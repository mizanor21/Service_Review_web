import React from 'react';

const Review = ({ review }) => {
    // console.log(review)
    return (
        <div>
            {
                review ?
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full py-3">

                            <tbody>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3 min-w-[200px]">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={review?.currentUser?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    review?.currentUser?.displayName ?
                                                        <div className="font-bold">{review?.currentUser?.displayName}</div>
                                                        :
                                                        <div className="font-bold">{review?.currentUser?.email}</div>
                                                }

                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{review.review}</td>
                                </tr>

                            </tbody>

                        </table>
                        <hr />
                    </div>
                    :
                    <h3>Review not found!</h3>
            }
        </div>
    );
};

export default Review;