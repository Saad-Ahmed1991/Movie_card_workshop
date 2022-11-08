import React from "react";
import { Rating } from "react-simple-star-rating";

const Filter = ({ setInput, setRate }) => {
  const handleRating = (rate) => {
    setRate(rate);
  };
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="search by title"
      />
      <Rating onClick={handleRating} />
    </div>
  );
};

export default Filter;
