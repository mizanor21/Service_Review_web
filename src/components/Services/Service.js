import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {

    return (
        <div>
            <div className="card w-96 glass container mx-auto">
                <PhotoProvider>
                    <PhotoView key={service?.index} src={service?.img}>
                        <figure>
                            <img src={service?.img} alt="img not found!" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{service?.title}</h2>
                        <div className="flex">
                            <div className="rating rating-lg rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className='ml-2'><span className='font-bold text-lg'>{service?.ratting}</span>/5</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-lg font-bold text-red-700'>{service?.price}</p>
                    <p>{service?.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service-details/${service._id}`}>
                            <button className="btn bg-red-700 border-none">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;