import { lazy } from "react";
import { useTranslation } from "react-i18next";
import {
  LegalContent,
  LegalPagesContent,
} from "../../components/PrivacyBlock/types";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const PrivacyBlock = lazy(() => import("../../components/PrivacyBlock"));

const Terms = () => {
  const { t } = useTranslation();
  const legalContent = t("legal", {
    returnObjects: true,
  }) as LegalPagesContent;
  const content = legalContent?.terms as LegalContent | undefined;

  return (
    <Container>
      <ScrollToTop />
      {content && <PrivacyBlock {...content} />}
    </Container>
  );
};

export default Terms;
