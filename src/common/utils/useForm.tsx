import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || "info@systein.nl";
const CONTACT_ENDPOINT =
  process.env.REACT_APP_CONTACT_ENDPOINT ||
  (CONTACT_EMAIL ? `https://formsubmit.co/ajax/${CONTACT_EMAIL}` : "");
const CONTACT_SUBJECT =
  process.env.REACT_APP_CONTACT_SUBJECT ||
  "New message from the SystEin contact form";

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    if (!CONTACT_ENDPOINT) {
      notification["error"]({
        message: "Error",
        description:
          "Contact endpoint is not configured. Please try again later.",
      });
      return;
    }

    try {
      if (Object.values(errors).every((error) => error === "")) {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            _subject: CONTACT_SUBJECT,
            _captcha: "false",
          }),
        });

        if (!response.ok) {
          const errorBody = await response.json().catch(() => null);
          throw new Error(
            errorBody?.message ||
              "There was an error sending your message, please try again later."
          );
        }

        formElement.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));

        notification["success"]({
          message: "Success",
          description: "Your message has been sent!",
        });
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
