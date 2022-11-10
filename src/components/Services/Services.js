import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../useHooks/UseHook';
import Service from './Service';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div className=''>
            <div className="flex justify-center">
                <i className='text-center text-3xl text-white bg-red-700 font-extrabold px-16 py-5 my-10 rounded-t-3xl shadow-2xl'>FOOD CORNER</i>
            </div>
            <div className="flex justify-center mb-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] gap-5">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;