import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meals from '../Meals/Meals';

const Resturant = () => {
    const totalData = useLoaderData()
    const mealData = totalData.categories;
    // console.log(mealData);
    return (
      <div className='grid grid-cols-3 gap-6'>
            {
                mealData.map(meals =><Meals key={meals.idCategory} meals={meals}></Meals> )
       }
      </div>
    );
};

export default Resturant;