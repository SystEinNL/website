import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  children,
  onClick,
  href,
  target,
  rel,
}: ButtonProps) => {
  if (href) {
    return (
      <StyledButton
        as="a"
        color={color}
        href={href}
        target={target}
        rel={rel || "noopener noreferrer"}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
