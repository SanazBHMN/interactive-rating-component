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
    <CardWrapper classes="text-center">
      <img
        src={img}
        alt="A mobile device connecting to a card."
        className="mx-auto"
      />
      <p className="text-primary bg-grey-950 mx-auto mt-5 mb-8 w-fit rounded-full px-4 py-2 text-[14px]">
        You selected {rate} out of 5
      </p>
      <Title>Thank you!</Title>
      <TextParagraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </TextParagraph>
    </CardWrapper>
  );
};

export default ThankYouCard;
