import { useRef, useState } from "react";
// import components
import RateCard from "./components/RateCard";
import ThankYouCard from "./components/ThankYouCard";
import Attribution from "./components/Attribution";

function App() {
  const ratings = useRef([1, 2, 3, 4, 5]);
  const [selectedRate, setSelectedRate] = useState<number | undefined>();
  const [isRateSubmitted, setIsRateSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (selectedRate) {
      setIsRateSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  const handleSelectedRate = (rate: number) => {
    setSelectedRate(rate);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      {!isRateSubmitted && (
        <RateCard
          ratings={ratings.current}
          onSubmit={handleSubmit}
          onRateSelection={handleSelectedRate}
          selectedRate={selectedRate}
        />
      )}
      {isRateSubmitted && <ThankYouCard rate={selectedRate} />}
      <Attribution />
    </main>
  );
}

export default App;
