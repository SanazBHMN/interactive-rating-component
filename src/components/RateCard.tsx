// import components
import Button from "./Button";
import Rate from "./Rate";
import TextParagraph from "./TextParagraph";
import Title from "./Title";
// import statics
import starIcon from "../assets/images/icon-star.svg";
import CardWrapper from "./CardWrapper";

interface RateCardProps {
  ratings: number[];
  onSubmit: () => void;
  onRateSelection: (rate: number) => void;
  selectedRate: number | undefined;
}

const RateCard = ({
  ratings,
  onSubmit,
  onRateSelection,
  selectedRate,
}: RateCardProps) => {
  return (
    <CardWrapper>
      <img
        src={starIcon}
        alt="An orange star"
        className="bg-grey-500/15 mb-10 rounded-full p-3"
      />
      <Title>How did we do?</Title>
      <TextParagraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </TextParagraph>
      <Rate
        ratings={ratings}
        onRateSelection={onRateSelection}
        selectedRate={selectedRate}
      />
      <Button onHandleClick={onSubmit} />
    </CardWrapper>
  );
};

export default RateCard;
