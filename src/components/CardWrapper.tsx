import type { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  classes?: string;
}

const CardWrapper = ({ children, classes }: CardWrapperProps) => {
  return (
    <div className={`bg-grey-900 mx-auto w-96 rounded-2xl p-8 ${classes}`}>
      {children}
    </div>
  );
};

export default CardWrapper;
