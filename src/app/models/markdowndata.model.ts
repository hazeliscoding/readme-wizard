export interface MarkdownData {
  fileName: string;
  title: string;
  headings: { text: string; level: number }[];
  descriptions: string[];
  images: { url: string; alt: string }[];
  codeBlocks: { language: string; code: string }[];
}
