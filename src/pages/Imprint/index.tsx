import { lazy } from "react";
import { useTranslation } from "react-i18next";
import {
  LegalContent,
  LegalPagesContent,
} from "../../components/PrivacyBlock/types";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const PrivacyBlock = lazy(() =>
  import("../../components/PrivacyBlock")
);

const LegalNotice = () => {
  const { t } = useTranslation();
  const legalContent = t("legal", {
    returnObjects: true,
  }) as LegalPagesContent;
  const content = legalContent?.imprint as LegalContent | undefined;

  return (
    <Container>
      <ScrollToTop />
      {content && <PrivacyBlock {...content} />}
    </Container>
  );
};

export default LegalNotice;
