interface RateProps {
  ratings: number[];
  onRateSelection: (rate: number) => void;
}

const Rate = ({ ratings, onRateSelection }: RateProps) => {
  return (
    <ul className="my-8 flex items-center justify-between gap-4">
      {ratings.map((rate) => (
        <li
          onClick={() => onRateSelection(rate)}
          key={rate}
          className="text-grey-500 hover:bg-primary hover:text-grey-900 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border p-6 text-center text-sm"
        >
          {rate}
        </li>
      ))}
    </ul>
  );
};

export default Rate;
