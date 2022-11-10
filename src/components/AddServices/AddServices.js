import React, { useState } from 'react';
import useTitle from '../useHooks/UseHook';

const AddServices = () => {
    const [item, setItem] = useState({});
    useTitle('Add Service');
    const handleSubmit = event => {
        event.preventDefault();
        fetch('https://hungry-naki-server-mizanor21.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully Item Added!');

                }
            })
        // .catch(console.dir)
    }
    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newItem = { ...item }
        newItem[field] = value;
        setItem(newItem)
    }
    return (
        <div className='min-h-screen container mx-auto flex justify-center items-center'>
            <fieldset className='border-2 p-24'>
                <legend className='text-lg font-bold'>Add Food Item</legend>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" placeholder="Food Title" name='title' className="input input-bordered input-success w-full max-w-xs mb-5" required /><br />
                    <input onBlur={handleBlur} type="text" placeholder="Price" name='price' className="input input-bordered input-success w-full max-w-xs mb-5" required /><br />
                    <input onBlur={handleBlur} type="text" placeholder="Image URL" name='img' className="input input-bordered input-success w-full max-w-xs mb-5" required /><br />
                    <input onBlur={handleBlur} type="number" placeholder="Ratting (0-5)" name='ratting' className="input input-bordered input-success w-full max-w-xs mb-5" required /><br />
                    <textarea onBlur={handleBlur} className="textarea textarea-accent w-80 h-44" name='details' placeholder="Details" required></textarea> <br />
                    <p><span className='font-bold'>Note:</span> Please valid data provide all* field. <br /></p>
                    <button className="btn btn-outline btn-secondary my-5">Submit</button>

                </form>
            </fieldset>
        </div>
    );
};

export default AddServices;