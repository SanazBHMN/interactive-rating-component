// import components
import { useRef, useState } from "react";
import RateCard from "./components/RateCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const ratings = useRef([1, 2, 3, 4, 5]);
  const [selectedRate, setSelectedRate] = useState<number | undefined>();
  const [isRateSubmitted, setIsRateSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (selectedRate) setIsRateSubmitted(true);
  };

  const handleSelectedRate = (rate: number) => {
    setSelectedRate(rate);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      {!isRateSubmitted && (
        <RateCard
          ratings={ratings.current}
          onSubmit={handleSubmit}
          onRateSelection={handleSelectedRate}
        />
      )}
      {isRateSubmitted && <ThankYouCard rate={selectedRate} />}
    </main>
  );
}

export default App;
