import { lazy } from "react";
import IreneIntroContent from "../../content/IreneIntroContent.json";
import IreneMiddleBlockContent from "../../content/IreneMiddleBlockContent.json";
import IreneAboutContent from "../../content/IreneAboutContent.json";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const IrenePlans = lazy(() => import("../../components/IrenePlans"));
const Contact = lazy(() => import("../../components/ContactForm"));

const Irene = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IreneIntroContent.title}
        content={IreneIntroContent.text}
        button={IreneIntroContent.button}
        icon="waving.svg"
        id="irene-intro"
      />
      <MiddleBlock
        title={IreneMiddleBlockContent.title}
        content={IreneMiddleBlockContent.text}
        button={IreneMiddleBlockContent.button}
        buttonTarget={IreneMiddleBlockContent.buttonTarget}
      />
      <ContentBlock
        direction="left"
        title={IreneAboutContent.title}
        content={IreneAboutContent.text}
        section={IreneAboutContent.section}
        icon="chess.svg"
        id="irene-about"
      />
      <IrenePlans />
      <Contact
        title="IreneContactTitle"
        content="IreneContactContent"
        id="contact"
      />
    </Container>
  );
};

export default Irene;
