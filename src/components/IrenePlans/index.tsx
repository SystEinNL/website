import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  PlansSection,
  PlansHeader,
  PlansTitle,
  PlansSubtitle,
  PlansSubtitleHighlight,
  PlansGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanPrice,
  PlanBullets,
  PlanBullet,
  PlanBulletDescription,
  PlanBulletWrapper,
  LearnMoreButton,
} from "./styles";

const WHATSAPP_BASE = "https://wa.me/3197010274600";

interface PlanBulletConfig {
  labelKey: string;
  descriptionKey?: string;
  tooltipKey?: string;
}

interface PlanCardConfig {
  key: string;
  copyPrefix: string;
  buttonColor?: string;
  badgeKey?: string;
  featured?: boolean;
  bullets: PlanBulletConfig[];
}

const planConfig: PlanCardConfig[] = [
  {
    key: "starter",
    copyPrefix: "Starter",
    buttonColor: "#fff",
    bullets: [
      {
        labelKey: "StarterRoleplayTitle",
        descriptionKey: "StarterRoleplayDescription",
      },
      { labelKey: "StarterCallCredit" },
      { labelKey: "StarterReplies" },
      {
        labelKey: "StarterAdaptiveTitle",
        descriptionKey: "StarterAdaptiveDescription",
      },
    ],
  },
  {
    key: "advanced",
    copyPrefix: "Advanced",
    bullets: [
      {
        labelKey: "AdvancedRoleplayTitle",
        descriptionKey: "AdvancedRoleplayDescription",
      },
      { labelKey: "AdvancedCall" },
      { labelKey: "AdvancedReplies" },
      {
        labelKey: "AdvancedAdaptiveTitle",
        descriptionKey: "StarterAdaptiveDescription",
      },
      {
        labelKey: "AdvancedAutopilotTitle",
        descriptionKey: "AdvancedAutopilotDescription",
      },
    ],
    badgeKey: "AdvancedBadge",
    featured: true,
  },
  {
    key: "elite",
    copyPrefix: "Elite",
    buttonColor: "#fff",
    bullets: [
      {
        labelKey: "EliteRoleplayTitle",
        descriptionKey: "EliteRoleplayDescription",
      },
      { labelKey: "EliteCalls" },
      { labelKey: "EliteReplies" },
      {
        labelKey: "EliteAdaptiveTitle",
        descriptionKey: "StarterAdaptiveDescription",
      },
      {
        labelKey: "EliteAutopilotTitle",
        descriptionKey: "AdvancedAutopilotDescription",
      },
      {
        labelKey: "EliteInterventionTitle",
        descriptionKey: "EliteInterventionDescription",
      },
    ],
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
          <PlansSubtitle>
            {t("HireIreneSubtitle")
              .split(t("HireIreneHighlight"))
              .map((segment, index, arr) => (
                <span key={index}>
                  {segment}
                  {index < arr.length - 1 && (
                    <PlansSubtitleHighlight>
                      {t("HireIreneHighlight")}
                    </PlansSubtitleHighlight>
                  )}
                </span>
              ))}
          </PlansSubtitle>
        </PlansHeader>
        <PlansGrid>
          {planConfig.map((plan) => {
            const prefix = plan.copyPrefix;
            const name = getCopy(`${prefix}Name`);
            const price = getCopy(`${prefix}Price`);
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
                <PlanPrice>{price}</PlanPrice>
                <PlanBullets>
                  {plan.bullets.map((bullet, index) => {
                    const label = getCopy(bullet.labelKey);
                    const description = bullet.descriptionKey
                      ? getCopy(bullet.descriptionKey)
                      : "";

                    return (
                      <PlanBullet key={`${plan.key}-bullet-${index}`}>
                      <PlanBulletWrapper>
                        {label}
                        {description && (
                          <>
                            <LearnMoreButton type="button">
                              {t("LearnMore")}
                            </LearnMoreButton>
                            <PlanBulletDescription>
                              {description}
                            </PlanBulletDescription>
                          </>
                        )}
                      </PlanBulletWrapper>
                      </PlanBullet>
                    );
                  })}
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
