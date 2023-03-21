import React from 'react';
import { Link } from 'react-router-dom';

const Meals = ({ meals }) => {
    // console.log(meals);
    const { strCategory, strCategoryThumb } = meals;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={strCategoryThumb} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{strCategory}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to='/resturant/${idCategory}'>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Meals;