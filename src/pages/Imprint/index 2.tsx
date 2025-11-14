import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const LegalNotice = () => {
  const content = `
LEGAL NOTICE (ENGLISH)

SYSTEIN Solutions – Eenmanszaak
Owner: [OWNER NAME]
De Lismortel 42 366
5612 AR Eindhoven
The Netherlands

Email: info@systein.nl
Website: www.systein.nl
Business structure: Sole proprietorship (Eenmanszaak)
Jurisdiction: The Netherlands

SYSTEIN Solutions provides AI-based software and related services, including the AI coaching system "Coach Irene". All information on this website is provided for general informational purposes only and is subject to change without notice. No rights can be derived from the content of this website.

Although SYSTEIN strives to keep the information on this website accurate and up to date, SYSTEIN does not provide any warranties, express or implied, regarding the completeness, accuracy, reliability or availability of the website or the information contained on it. Use of the website and Services is at your own risk.

AI-generated outputs may be inaccurate, incomplete, or inappropriate. The website and Services do not provide medical, psychological, legal or financial advice and do not replace professional care or consultation.

SYSTEIN is not liable for any damage arising from or in connection with the use of this website or the Services, except where liability cannot be excluded under applicable law.


JURIDISCHE KENNISGEVING (NEDERLANDS)

SYSTEIN Solutions – Eenmanszaak
Eigenaar: [NAAM EIGENAAR]
De Lismortel 42 366
5612 AR Eindhoven
Nederland

E-mail: info@systein.nl
Website: www.systein.nl
Rechtsvorm: Eenmanszaak
Rechtsgebied: Nederland

SYSTEIN Solutions biedt AI-software en gerelateerde diensten aan, waaronder het AI-coachsysteem "Coach Irene". Alle informatie op deze website wordt uitsluitend verstrekt voor algemene informatiedoeleinden en kan zonder voorafgaande kennisgeving worden gewijzigd. Aan de inhoud van deze website kunnen geen rechten worden ontleend.

Hoewel SYSTEIN ernaar streeft de informatie op deze website actueel en juist te houden, geeft SYSTEIN geen enkele garantie, expliciet of impliciet, omtrent de volledigheid, juistheid, betrouwbaarheid of beschikbaarheid van de website of de daarop vermelde informatie. Het gebruik van de website en de Diensten is geheel voor eigen risico.

De door AI gegenereerde uitvoer kan onjuist, onvolledig of niet passend zijn. De website en de Diensten vormen geen medisch, psychologisch, juridisch of financieel advies en vervangen geen professionele zorg of consult.

SYSTEIN is niet aansprakelijk voor schade die voortvloeit uit of verband houdt met het gebruik van deze website of de Diensten, behalve voor zover uitsluiting van aansprakelijkheid op grond van toepasselijk recht niet is toegestaan.
  `;

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title="Legal Notice / Juridische Kennisgeving"
        content={content}
        icon="scale.svg"
        id="legal-notice"
      />
    </Container>
  );
};

export default LegalNotice;