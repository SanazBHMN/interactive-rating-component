interface RateProps {
  ratings: number[];
  onRateSelection: (rate: number) => void;
  selectedRate: number | undefined;
}

const Rate = ({ ratings, onRateSelection, selectedRate }: RateProps) => {
  return (
    <ul className="my-8 flex items-center justify-between gap-4">
      {ratings.map((rate) => (
        <li
          onClick={() => onRateSelection(rate)}
          key={rate}
          className={`text-grey-500 bg-grey-500/15 hover:bg-primary hover:text-grey-900 xs:p-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-4 text-center text-sm sm:p-6 ${selectedRate === rate ? "text-grey-900 bg-white" : ""}`}
        >
          {rate}
        </li>
      ))}
    </ul>
  );
};

export default Rate;
