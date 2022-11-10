import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { currentUser, logOut } = useContext(AuthContext);
    console.log(currentUser?.photoURL)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Successfully Logout!');
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }
    return (
        <div className=" bg-red-700 text-white ">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-3xl">HungryNaki</Link>
                </div>
                <div className="flex-none">
                    {
                        currentUser?.uid ?

                            <>
                                <div className="">
                                    <ul className='flex text-lg font-bold mr-5'>
                                        <Link to={''}><li className='pr-5'>My Reviews</li></Link>
                                        <Link to={'/add-service'}><li>Add Services</li></Link>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className='w-12 h-12 rounded-full border-2 ' src={currentUser?.photoURL} alt="Profile not found!" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-60">
                                        <p className='text-slate-500'>Sign in as</p>
                                        <li className='my-3'>{currentUser?.displayName}</li>
                                        <hr />
                                        <li className='my-3'>{currentUser?.email}</li>
                                        <hr />
                                        <li onClick={handleLogOut} className='cursor-pointer my-3'>Logout</li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <Link to={'/signin'}>
                                    <button className="btn glass mr-3">Signin</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;