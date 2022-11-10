import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../useHooks/UseHook';

const ServiceDetails = () => {
    const [review, setReview] = useState({});
    const [userData, setUserData] = useState({ name: 'default', email: 'default@gmail.com', img: 'default' })
    const { currentUser } = useContext(AuthContext);
    useTitle('Service Details')
    const { title, img, details, ratting } = useLoaderData();

    const handleReview = event => {
        const userData = {
            name: currentUser?.displayName,
            email: currentUser?.email,
            img: currentUser?.photoURL

        }
        setUserData(userData);
        event.preventDefault();
        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully review added. Thank you!');

                }
            })
    }
    const handleBlur = event => {

        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
        setUserData()
        // console.log(field, value)
    }
    return (
        <div className='container mx-auto mx-3 my-10'>
            <div className="flex justify-center items-center">
                <div className="mb-10">
                    <img className='rounded-lg' src={img} alt=" img not found" />
                    <div className=" flex justify-between">
                        <p className='font-bold text-xl'>{title}</p>
                        <div className="flex justify-end">
                            <div className="rating rating-lg rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className='ml-2'><span className='font-bold text-lg'>{ratting}</span>/5</p>
                            </div>
                        </div>
                    </div>
                    <p>{details}</p>
                </div>
            </div>

            <div className="">
                <p className='text-center text-3xl'>Item Reviews</p>
                <div className="">

                </div>
            </div>
            {
                currentUser?.email ?
                    <div className="container mx-auto flex justify-center">
                        <form onSubmit={handleReview}>
                            <textarea onBlur={handleBlur} className="textarea textarea-accent w-[700px] h-32" name='review' placeholder="Please, valid review provide"></textarea><br />
                            <button className="btn btn-outline btn-success">Add Review</button>

                        </form>
                    </div>
                    :
                    <h3 className='text-xl font-bold'>Review provide? please login first!</h3>

            }
        </div>
    );
};

export default ServiceDetails;