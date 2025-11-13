export interface LegalSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalContent {
  title: string;
  intro?: string[];
  sections: LegalSection[];
}

export interface LegalPagesContent {
  privacy?: LegalContent;
  terms?: LegalContent;
  imprint?: LegalContent;
}

export type PrivacyBlockProps = LegalContent;
