import { Fade } from "react-awesome-reveal";
import {
  PrivacyContainer,
  PrivacyWrapper,
  Title,
  IntroParagraph,
  Section,
  SectionHeading,
  Paragraph,
  List,
  ListItem,
} from "./styles";
import { PrivacyBlockProps } from "./types";

const PrivacyBlock = ({ title, intro, sections }: PrivacyBlockProps) => {
  const safeSections = sections ?? [];

  return (
    <PrivacyContainer>
      <PrivacyWrapper>
        <Fade triggerOnce>
          <div>
            <Title>{title}</Title>
            {intro?.map((text, index) => (
              <IntroParagraph key={`intro-${index}`}>{text}</IntroParagraph>
            ))}
            {safeSections.map((section, index) => (
              <Section key={`${section.title}-${index}`}>
                <SectionHeading>{section.title}</SectionHeading>
                {section.paragraphs?.map((text, pIndex) => (
                  <Paragraph key={`paragraph-${index}-${pIndex}`}>
                    {text}
                  </Paragraph>
                ))}
                {section.list && (
                  <List>
                    {section.list.map((item, itemIndex) => (
                      <ListItem key={`list-${index}-${itemIndex}`}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                )}
              </Section>
            ))}
          </div>
        </Fade>
      </PrivacyWrapper>
    </PrivacyContainer>
  );
};

export default PrivacyBlock;
