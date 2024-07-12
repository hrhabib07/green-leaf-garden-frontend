import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";
import "./star.css"; // Import the CSS file

interface StarProps {
  filled: boolean;
  halfFilled: boolean;
}

const Star: React.FC<StarProps> = ({ filled, halfFilled }) => {
  if (filled) {
    return <FontAwesomeIcon icon={faStar} className="star" />;
  } else if (halfFilled) {
    return <FontAwesomeIcon icon={faStarHalfAlt} className="star" />;
  } else {
    return <FontAwesomeIcon icon={farStar} className="star" />;
  }
};

export default Star;
