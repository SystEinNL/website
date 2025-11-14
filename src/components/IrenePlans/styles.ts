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
  font-size: 1rem;
  line-height: 1.8;
  margin: 1.5rem 0 0 0;
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
  font-size: 1.35rem;
  margin-bottom: 0.35rem;
  color: #141c3a;
`;

export const PlanShift = styled("p")`
  font-weight: 600;
  color: #ff825c;
  margin-bottom: 0.25rem;
`;

export const PlanPrice = styled("p")`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #0a0a0a;
`;

export const PlanBullets = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
  text-align: left;
`;

export const PlanBullet = styled("li")`
  display: flex;
  align-items: flex-start;
  font-size: 0.95rem;
  color: #4b5d68;
  margin-bottom: 0.65rem;

  &::before {
    content: "•";
    color: #ff825c;
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;
