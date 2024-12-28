import React from 'react'
import { useSelector } from 'react-redux'
import { Currency } from '../../Redux/shop'
import { Link } from 'react-router-dom';

export const ProductItem = ({ id, image, name, rating, price, originalPrice, category }) => {
    const currency = useSelector(Currency);

    return (
        <Link
            className="w-full max-w-[80rem] mx-auto bg-white rounded-xl shadow-md transition-shadow duration-200"
            to={`/product/${id}`}
        >
            {/* Image Section */}
            <div className="relative w-full h-[20rem] md:h-[25rem] overflow-hidden rounded-lg">
                <img
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    src={image}
                    alt={name}
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2 min-h-[12rem]">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-[#FCB424] text-xl ${index < Math.floor(rating) ? 'fill-current' : 'text-[#c1c1cd]'}`}
                        >
                            ★
                        </span>
                    ))}
                </div>

                <p className="text-base text-black">{category}</p>

                {/* Price Section */}
                <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-black">{currency}{price}</span>
                    {originalPrice && (
                        <span className="text-sm line-through text-gray-500">{currency}{originalPrice}</span>
                    )}
                </div>
            </div>


        </Link>
    );
};
