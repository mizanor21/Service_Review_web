import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';

const FoodItems = () => {
    const samble = '-->';
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch('https://hungry-naki-server-mizanor21.vercel.app/food-items')
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])
    return (
        <div className=''>
            <div className="flex justify-center">
                <i className='text-center text-3xl text-white bg-red-700 font-extrabold px-16 py-5 my-10 rounded-t-3xl shadow-2xl'>FOOD CORNER</i>
            </div>
            <div className="flex justify-center mb-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] gap-5">
                    {
                        foodItems.map(foodItem => <FoodItem
                            key={foodItem._id}
                            foodItem={foodItem}
                        ></FoodItem>)
                    }
                </div>
            </div>
            <div className="container mx-auto text-end max-w-[1200px] mb-10">
                <Link to={'/services'}><button className="btn bg-red-700 border-none">See all {samble}</button></Link>
            </div>
        </div>

    );
};

export default FoodItems;