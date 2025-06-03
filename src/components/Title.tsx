import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="my-3 text-3xl font-bold text-white">{children}</h1>;
};

export default Title;
