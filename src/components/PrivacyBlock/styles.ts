import styled from "styled-components";

export const PrivacyContainer = styled("section")`
  padding: 5rem 0;
  background: #fefefe;

  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const PrivacyWrapper = styled("div")`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media only screen and (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export const Title = styled("h1")`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #18216d;
`;

export const IntroParagraph = styled("p")`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5d68;
  margin-bottom: 1rem;
`;

export const Section = styled("section")`
  margin-top: 2.5rem;
`;

export const SectionHeading = styled("h2")`
  font-size: 1.35rem;
  margin-bottom: 1rem;
  color: #18216d;
`;

export const Paragraph = styled("p")`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5d68;
  margin-bottom: 0.85rem;
`;

export const List = styled("ul")`
  margin: 0 0 1rem 1.25rem;
  padding: 0;
  color: #4b5d68;
  line-height: 1.8;
`;

export const ListItem = styled("li")`
  margin-bottom: 0.35rem;
`;
