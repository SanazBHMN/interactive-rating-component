interface ButtonProps {
  onHandleClick: () => void;
}

const Button = ({ onHandleClick }: ButtonProps) => {
  return (
    <button
      onClick={onHandleClick}
      type="submit"
      className="bg-primary text-grey-900 mx-auto w-full cursor-pointer rounded-full py-3 font-bold uppercase hover:bg-white"
    >
      Submit
    </button>
  );
};

export default Button;
