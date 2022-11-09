import React from 'react';
import { Link } from 'react-router-dom';

const FoodItem = ({ foodItem }) => {
    // console.log(foodItem)
    return (
        <div>
            <div className="card w-96 glass container mx-auto">
                <figure><img src={foodItem.img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodItem.title}</h2>
                    <p className='text-lg font-bold text-red-700'>{foodItem.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;