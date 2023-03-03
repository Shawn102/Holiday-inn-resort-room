import React from "react";
import mImage from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoomCard = ({ rooms }) => {
  const { slug, price, name, images } = rooms;
  return (
    <article className="rooms-outside-container">
      <div className="absolute-container">
        <img src={images[0]} alt="" />
        <div className="price-container">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <div className="featured-buttonCon">
          <div>
            <Link to={`/singleroom/${slug}`} className="links-to">
              Featured
            </Link>
          </div>
        </div>
      </div>
      <h4>{name}</h4>
    </article>
  );
};
RoomCard.propTypes = {
  rooms: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default RoomCard;
