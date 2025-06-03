// import components
import Button from "./Button";
import Rate from "./Rate";
import TextParagraph from "./TextParagraph";
import Title from "./Title";
// import statics
import starIcon from "../assets/images/icon-star.svg";

const RateCard = () => {
  return (
    <div className="bg-grey-900 mx-auto w-96 rounded-2xl p-8">
      <img
        src={starIcon}
        alt="An orange star"
        className="bg-grey-950 mb-10 rounded-full p-3"
      />
      <Title>How did we do?</Title>
      <TextParagraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </TextParagraph>
      <Rate />
      <Button />
    </div>
  );
};

export default RateCard;
