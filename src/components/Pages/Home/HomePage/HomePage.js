import React from 'react';
import useTitle from '../../../useHooks/UseHook';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';

const HomePage = () => {
    useTitle('Home')
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default HomePage;