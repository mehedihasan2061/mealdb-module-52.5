import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Meal = () => {
    const mealData = useLoaderData()
   
   
    return (
        <div>
            <h1>mela</h1>
        </div>
    );
};

export default Meal;