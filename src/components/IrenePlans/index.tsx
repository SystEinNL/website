import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  PlansSection,
  PlansHeader,
  PlansTitle,
  PlansSubtitle,
  PlansGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanShift,
  PlanPrice,
  PlanBullets,
  PlanBullet,
} from "./styles";

const WHATSAPP_BASE = "https://wa.me/3197010274600";

const planConfig = [
  {
    key: "starter",
    copyPrefix: "Starter",
    bulletKeys: [
      "StarterBulletOne",
      "StarterBulletTwo",
      "StarterBulletThree",
      "StarterBulletFour",
    ],
    buttonColor: "#fff",
  },
  {
    key: "advanced",
    copyPrefix: "Advanced",
    bulletKeys: [
      "AdvancedBulletOne",
      "AdvancedBulletTwo",
      "AdvancedBulletThree",
      "AdvancedBulletFour",
    ],
    badgeKey: "AdvancedBadge",
    featured: true,
  },
  {
    key: "elite",
    copyPrefix: "Elite",
    bulletKeys: ["EliteBulletOne", "EliteBulletTwo", "EliteBulletThree"],
    buttonColor: "#fff",
  },
];

const IrenePlans = () => {
  const { t } = useTranslation();
  const planCopy = useMemo(() => {
    return (
      (t("IrenePlans", {
        returnObjects: true,
      }) as Record<string, string>) || {}
    );
  }, [t]);

  const getCopy = (key: string) => planCopy?.[key] || "";

  return (
    <PlansSection id="hire-irene">
      <Slide direction="up" triggerOnce>
        <PlansHeader>
          <PlansTitle>{t("HireIreneTitle")}</PlansTitle>
          <PlansSubtitle>{t("HireIreneSubtitle")}</PlansSubtitle>
        </PlansHeader>
        <PlansGrid>
          {planConfig.map((plan) => {
            const prefix = plan.copyPrefix;
            const name = getCopy(`${prefix}Name`);
            const shift = getCopy(`${prefix}Shift`);
            const price = getCopy(`${prefix}Price`);
            const bullets = plan.bulletKeys.map((key) => getCopy(key));
            const template =
              getCopy("MessageTemplate") ||
              "Hello, I want the {{plan}} subscription plan.";
            const whatsappMessage = encodeURIComponent(
              template.replace("{{plan}}", name)
            );
            const href = `${WHATSAPP_BASE}?text=${whatsappMessage}`;

            return (
              <PlanCard key={plan.key} featured={plan.featured}>
                {plan.badgeKey && (
                  <PlanBadge>{getCopy(plan.badgeKey)}</PlanBadge>
                )}
                <PlanName>{name}</PlanName>
                <PlanShift>{shift}</PlanShift>
                <PlanPrice>{price}</PlanPrice>
                <PlanBullets>
                  {bullets.map((bullet, index) => (
                    <PlanBullet key={`${plan.key}-bullet-${index}`}>
                      {bullet}
                    </PlanBullet>
                  ))}
                </PlanBullets>
                <Button
                  href={href}
                  target="_blank"
                  color={plan.buttonColor}
                  fullWidth
                >
                  {getCopy("Button")}
                </Button>
              </PlanCard>
            );
          })}
        </PlansGrid>
      </Slide>
    </PlansSection>
  );
};

export default IrenePlans;
