import React from 'react';
import image from '../../../../assets/order.jpg'

const Order = () => {

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={image} className="rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Sit at Home</h1>
                        <h1 className="text-5xl font-bold">We Will Take Care</h1>
                        <p className="py-6">Order now from restaurants near you with just a few clicks. Delicious meals delivered fresh to your doorstep. Browse our menu and order online! Easy ordering process. 20,000+ everyday items. 25+ cuisines. Online payment options. 2000+ restaurants.</p>
                        <button className="btn btn-primary">See all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;