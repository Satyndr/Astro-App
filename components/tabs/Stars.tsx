import { Rating } from "@kolking/react-native-rating";

const Stars = ({ rating, style, size }: any) => {
  return <Rating rating={rating} size={size} />;
};

export default Stars;
