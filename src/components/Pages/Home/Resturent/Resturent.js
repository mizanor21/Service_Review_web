import React from 'react';
import rest1 from '../../../../assets/rest1.jpg'
import rest2 from '../../../../assets/rest2.jpg'
import rest3 from '../../../../assets/rest3.jpg'

const Resturent = () => {
    return (
        <div className='flex justify-center container mx-auto my-10'>
            <div className="text-center">
                <h6 className='text-red-700 font-bold'>Our Recommendations</h6>
                <h1 className='text-6xl font-bold'>Cafes & Restaurants</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={rest1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Restaurant Monaco
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Visit</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={rest2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Happy Grill Cafe
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Visit</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={rest3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sushiteria
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Visit</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resturent;