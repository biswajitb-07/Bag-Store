import React, { useEffect, useState, useTransition } from 'react'
import { useSelector } from 'react-redux';
import { Products } from '../../Redux/shop';
import { PopularItem } from '../Layout/PopularItem';
import { Loader } from './Loader';

export const PopularProducts = () => {
    const products = useSelector(Products);
    const [popularProducts, setPopularProducts] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const fiveStarProducts = products.filter((product) => product.rating === 5);
            setPopularProducts(fiveStarProducts.slice(0, 4));
        })
    }, [products])

    if (isPending) return <Loader />;

    return (
        <div>
            <div className="max-w-[78rem] mx-auto p-2 pt-32">
                <div className='bg-white'>
                    <div className='grid place-items-center gap-1'>
                        <h1 className='text-2xl md:text-4xl font-black'>Popular Products</h1>
                        <p className='p-1 text-gray-500'>Amet massa vitae tortor condimentum.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center pt-8 px-6'>
                        {
                            popularProducts?.map((item, index) => (
                                <PopularItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} originalPrice={item.originalPrice} rating={item.rating} category={item.category} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}