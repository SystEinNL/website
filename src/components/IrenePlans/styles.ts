import styled from "styled-components";

export const PlansSection = styled("section")`
  padding: 5rem 0;
  background: #ffffffff;
`;

export const PlansHeader = styled("div")`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem auto;
`;

export const PlansTitle = styled("h2")`
  margin-bottom: 0.75rem;
`;

export const PlansSubtitle = styled("p")`
  color: #4b5d68;
  font-size: 1.15rem;
  line-height: 1.8;
  margin: 1.5rem 0 0 0;
`;

export const PlansSubtitleHighlight = styled("span")`
  color: rgb(255, 130, 92);
  text-decoration: underline wavy rgb(255, 130, 92);
  text-underline-position: under;
`;

export const PlansGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
`;

export const PlanCard = styled("div")<{ featured?: boolean }>`
  background: ${(p) => (p.featured ? "#fffdf9" : "#fff")};
  border-radius: 12px;
  padding: ${(p) => (p.featured ? "2.75rem 2.25rem" : "2rem")};
  box-shadow: ${(p) =>
    p.featured
      ? "0 25px 60px rgba(46, 24, 106, 0.25)"
      : "0 20px 50px rgba(9, 30, 66, 0.08)"};
  border: 2px solid ${(p) => (p.featured ? "#2e186a" : "#edf3f5")};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: center;
  transform: ${(p) => (p.featured ? "translateY(-12px)" : "none")};
`;

export const PlanBadge = styled("span")`
  display: inline-block;
  background: #2e186a;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
`;

export const PlanName = styled("h3")`
  font-size: 1.65rem;
  margin-bottom: 0.35rem;
  color: rgb(255, 130, 92);
`;

export const PlanRoleplayTitle = styled("p")`
  font-weight: 700;
  margin: 0.5rem 0 0.25rem 0;
  color: #0a0a0a;
`;

export const PlanRoleplayDescription = styled("p")`
  font-size: 0.95rem;
  color: #4b5d68;
  margin: 0 0 1.25rem 0;
`;

export const PlanPrice = styled("p")`
  font-size: 1.35rem;
  font-weight: 800;
  color: #111533;
  margin-bottom: 1.35rem;
`;

export const PlanBullets = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
  text-align: left;
`;

export const PlanBullet = styled("li")`
  position: relative;
  font-size: 0.95rem;
  color: #4b5d68;
  margin-bottom: 0.85rem;
  padding-left: 1.5rem;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: #ff825c;
    font-weight: 700;
  }
`;

export const PlanBulletDescription = styled("div")`
  display: none;
  position: absolute;
  left: 0;
  top: calc(100% + 0.35rem);
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(10, 10, 30, 0.08);
  box-shadow: 0 18px 35px rgba(9, 30, 66, 0.15);
  padding: 0.85rem 1rem;
  width: 260px;
  font-size: 0.85rem;
  color: #4b5d68;
  z-index: 5;
`;

export const LearnMoreButton = styled("button")`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 0.5rem;
  color: #ff825c;
  font-size: 0.7rem;
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`;

export const PlanBulletWrapper = styled("div")`
  position: relative;
  display: inline-flex;
  align-items: center;

  ${LearnMoreButton}:hover + ${PlanBulletDescription},
  ${LearnMoreButton}:focus + ${PlanBulletDescription} {
    display: block;
  }
`;
