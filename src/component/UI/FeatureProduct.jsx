import React, { useEffect, useState, useTransition } from 'react'
import { useSelector } from 'react-redux';
import { Products } from '../../Redux/shop';
import { ProductItem } from '../Layout/ProductItem';
import { Offer } from '../Layout/Offer';
import { Link } from 'react-router-dom';
import {Loader} from "./Loader.jsx";

export const FeatureProduct = () => {
  const products = useSelector(Products);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => setFeatureProducts(products.slice(0, 4)));
  }, [products])

  if (isPending) return <Loader />;

  return (
    <div>
      <div className="max-w-[78rem] mx-auto p-2 pt-32">
        <div className='bg-white min-h-[80vh]'>
          <div className='grid place-items-center gap-1'>
            <h1 className='text-2xl md:text-4xl font-black'>Featured Products</h1>
            <p className='p-1 text-gray-500'>Tristique senectus netus et malesuada fames.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center pt-8 px-6'>
            {
              featureProducts?.map((item, index) => (
                <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} originalPrice={item.originalPrice} rating={item.rating} category={item.category} />
              ))
            }
          </div>

          <Link to="/shop" className='grid place-items-center pt-5'>
            <button className="bg-[#0A0500] hover:bg-[#FFCD05] hover:text-black p-4 text-white text-center text-[19px] w-[14rem]">
              View All Products
            </button>
          </Link>

          <div className='px-6 pt-24'>
            <Offer />
          </div>
        </div>
      </div>
    </div>
  )
}


