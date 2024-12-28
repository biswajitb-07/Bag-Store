import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="bg-white text-black text-center p-6 border border-gray-300 rounded-lg max-w-md mx-auto mt-20 shadow-lg">
            <h1 className="text-xl font-bold mb-4">Oops! An error occurred.</h1>
            {error && <p className="text-red-500 mb-6">{error.data}</p>}
            <NavLink to="/">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                    Go Back
                </button>
            </NavLink>
        </div>
    );
};