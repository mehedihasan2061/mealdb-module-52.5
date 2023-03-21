import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-blue-500 text-yellow-50">
          <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">MealDB</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              
              <li>
                <Link to='/home'>Home</Link>
              </li>
              
              <li>
                <Link to='/resturant'>Resturant</Link>
              </li>
              
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;