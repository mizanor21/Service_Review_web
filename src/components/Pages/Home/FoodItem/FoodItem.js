import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const FoodItem = ({ foodItem }) => {
    // console.log(foodItem)
    return (
        <div>
            <div className="card w-96 glass container mx-auto">
                <PhotoProvider>
                    <PhotoView key={foodItem.index} src={foodItem.img}>
                        <figure><img src={foodItem.img} alt="car!" /></figure>
                    </PhotoView>
                </PhotoProvider>
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