import React from 'react';
import logo from '../../restaurant.jpg'
import Lottie from 'lottie-react'
import data from '../assets/data.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="grid grid-cols-2 bg-black">
        {/* <div className="card card-compact w-80 bg-base-100 shadow-xl mt-9 mx-8">
          <figure>
            <img src={logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
        <div className="m-16 ">
          <img className="rounded-lg" src={logo} alt="" />
          <div className="card-body">
            <h2 className="card-title text-white">Resturant !</h2>
            <p className="text-lime-500">5 Star Resturant !!!</p>
            <div className="card-actions justify-center">
              <Link to='/resturant'>
                <button className="btn btn-primary">Visit Store</button>
              </Link>
            </div>
          </div>
        </div>

        {/* animation food  */}
        <div className=" mx-8">
          <Lottie animationData={data} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Home;