import type { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  classes?: string;
}

const CardWrapper = ({ children, classes }: CardWrapperProps) => {
  return (
    <div
      className={`bg-grey-900 mx-auto w-11/12 rounded-2xl sm:w-96 ${classes}`}
    >
      <div className="mx-auto w-11/12 p-5">{children}</div>
    </div>
  );
};

export default CardWrapper;
