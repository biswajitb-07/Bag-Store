import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Products } from '../Redux/shop';
import { addToCart } from '../Redux/cartSlice';
import { PopularItem } from '../component/Layout/PopularItem';
import { ScrollToTop } from '../component/Layout/ScrollToTop';
import { toast } from 'react-toastify';

export const Product = () => {
  const { productId } = useParams();
  const products = useSelector(Products);
  const [productData, setProductData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const fetchProductData = async () => {
    const product = products.find((item) => item.id === parseInt(productId));
    if (product) {
      setProductData(product);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId])

  const setLG = () => {
    dispatch(addToCart({ productData, quantity }))
    toast.success("Product add in Cart")
  }

  useEffect(() => {
    if (productData) {
      const categoryFilterData = products.filter(
        (item) =>
          item.category === productData.category && item.id !== productData.id
      );
      setRelatedProducts(categoryFilterData);
    }
  }, [productData, products]);

  return (
    <div>
      <h1 className='text-2xl md:text-4xl grid place-items-center font-black py-3'>Buy Item</h1>
      <ScrollToTop />
      <div className='max-w-[78rem] mx-auto px-6 min-h-[45rem] md:min-h-[85vh]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 py-10'>
          <div className='w-full'>
            <img src={productData.image} className='object-cover w-full h-[25rem] md:h-[42rem] hover:transition-transform hover:scale-105 overflow-hidden ease-linear duration-300 rounded-lg' alt="" />
          </div>

          <div className='flex flex-col gap-y-14'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-bold'>{productData.name}</h1>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-[#FCB424] text-xl ${index < Math.floor(productData.rating) ? 'fill-current' : 'text-[#c1c1cd]'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className='text-lg font-semibold'>${productData.price}.00</p>
            </div>

            <div>
              <p className='text-lg'>{productData.about}</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-400 rounded py-2 gap-1">
                <button onClick={decrement} className="px-3 py-1 text-gray-700 hover:bg-yellow-500 transition">&minus;</button>
                <span className="px-4 py-1">{quantity}</span>
                <button onClick={increment} className="px-3 py-1 text-gray-700 hover:bg-yellow-500 transition">+</button>
              </div>
              <button onClick={setLG} className="px-6 py-3 w-full bg-black text-white rounded hover:bg-yellow-500 transition">
                Add to cart
              </button>
            </div>
            
            <Link to="/cart">
              <button className="px-6 py-3 w-full bg-black text-white rounded hover:bg-yellow-500 transition">
                View In Cart
              </button>
            </Link>

            <div className='flex flex-col gap-3'>
              <p className='text-base font-bold'>CATEGORY: <span className='text-sm font-normal px-2'>{productData.category}</span></p>
              <p className='text-xl font-bold'>DESCRIPTION: <span className='text-xl px-2 font-normal'>{productData.description}</span></p>
            </div>

          </div>
        </div>

        <h1 className='text-2xl md:text-4xl grid place-items-center font-black pt-10 pb-3'>Related Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center pt-8 px-6'>
          {
            relatedProducts?.map((item) => (
              <PopularItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} originalPrice={item.originalPrice} rating={item.rating} category={item.category} />
            ))
          }
        </div>
      </div>
    </div>
  )
}