import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card w-96 glass container mx-auto">
                <figure><img src={service.img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p className='text-lg font-bold text-red-700'>{service.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;