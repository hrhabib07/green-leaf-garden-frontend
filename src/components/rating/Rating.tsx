import React from "react";
import Star from "./star";

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (value >= i + 1) {
      stars.push(<Star key={i} filled={true} halfFilled={false} />);
    } else if (value > i && value < i + 1) {
      stars.push(<Star key={i} filled={false} halfFilled={true} />);
    } else {
      stars.push(<Star key={i} filled={false} halfFilled={false} />);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
