import React from "react";
import PropTypes from "prop-types";

const starCheck = (value, checkValue) => {
  return value >= checkValue
    ? "fas fa-star"
    : value >= checkValue - 0.5
    ? "fas fa-star-half-alt"
    : "far fa-star";
};

const Rating = ({ value, text }) => {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i className={starCheck(value, i)}></i>
      </span>
    );
  }

  return (
    <div className="rating">
      {stars}
      <span> {text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Rating;
