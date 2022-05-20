import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import './Home.css';

const ItemCard = ({ item }) => {
  const { image, description, price, discountPrice } = item;
  return (
    <>
      <div className="custom-card text-white shadow-2xl m-8 w-[90%] h-[400px] relative overflow-hidden">
        <img className="h-[70%] w-full bg-cover" src={image} alt="" />
        <div className="custom-card-back  absolute top-[60%] h-[65%]"></div>
        <div className="absolute top-[5%] left-6 overflow-hidden">
          <MdFavorite size={30} color={'white'} />
        </div>
        <div className=" absolute bottom-[20%] left-[40%]  ">
          <p>{description.slice(0, 70)}..</p>
        </div>
        <div className="absolute bottom-[10%] text-xl font-semibold left-8">
          <p>
            <del className="opacity-70">$ {price}</del>
            <span className="ml-4">$ {discountPrice}</span>
          </p>
        </div>
        <div className="btn btn-primary text-white absolute right-8 bottom-[7%]">
          <Link to="/">Buy Now</Link>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
