import type { ReactNode } from "react";

interface TextParagraphProps {
  children: ReactNode;
}

const TextParagraph = ({ children }: TextParagraphProps) => {
  return <p className="text-paragraph text-grey-500">{children}</p>;
};

export default TextParagraph;
