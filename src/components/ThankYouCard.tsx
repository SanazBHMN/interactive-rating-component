// import components
import CardWrapper from "./CardWrapper";
import TextParagraph from "./TextParagraph";
import Title from "./Title";
// import assets
import img from "../assets/images/illustration-thank-you.svg";

interface ThankYouCardProps {
  rate: number | undefined;
}

const ThankYouCard = ({ rate }: ThankYouCardProps) => {
  return (
    <CardWrapper classes="p-12 text-center">
      <img
        src={img}
        alt="A mobile device connecting to a card."
        className="mx-auto"
      />
      <p>You selected {rate} out of 5</p>
      {/* TODO: Display selected rating */}
      <Title>Thank you!</Title>
      <TextParagraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </TextParagraph>
    </CardWrapper>
  );
};

export default ThankYouCard;
