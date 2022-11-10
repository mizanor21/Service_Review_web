import React from 'react';
import useTitle from '../../../useHooks/UseHook';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import Order from '../Order/Order';
import Resturent from '../Resturent/Resturent';

const HomePage = () => {
    useTitle('Home')
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <FoodItems></FoodItems>
            <Order></Order>
            <Resturent></Resturent>
        </div>
    );
};

export default HomePage;