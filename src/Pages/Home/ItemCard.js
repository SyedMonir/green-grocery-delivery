import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/fa';
import './Home.css';

const ItemCard = ({ item }) => {
  const { image, description, price, discountPrice } = item;
  return (
    <>
      <div className="first hero">
        <img className="hero-profile-img" src={image} alt="" />
        <div className="hero-description-bk"></div>
        <div className="hero-logo">
          <MdFavorite />
        </div>
        <div className="hero-description">
          <p>{description}</p>
        </div>
        <div className="hero-date">
          <p>
            <del>$ {price}</del>
            <span className="ml-4">$ {discountPrice}</span>
          </p>
        </div>
        <div className="hero-btn">
          <Link to="/">Buy Now</Link>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
