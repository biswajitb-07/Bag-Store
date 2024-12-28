import React, { useEffect, useState, useTransition } from 'react';
import { useSelector } from 'react-redux';
import { Products, Search, ShowSearch } from '../Redux/shop.jsx';
import { PopularItem } from '../component/Layout/PopularItem';
import { Loader } from "../component/UI/Loader.jsx";
import { SearchBar } from '../component/Layout/SearchBar.jsx';
import { ScrollToTop } from '../component/Layout/ScrollToTop.jsx';

export const Collection = () => {
  const products = useSelector(Products);
  const search = useSelector(Search);
  const showSearch = useSelector(ShowSearch);

  const [popularProducts, setPopularProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setPopularProducts(products);
      setFilteredProducts(products);
    });
  }, [products]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...popularProducts];

      if (showSearch && search) {
        filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      }

      if (categoryFilter !== 'All') {
        filtered = filtered.filter((item) => item.category === categoryFilter);
      }

      if (priceFilter === 'High To Low') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (priceFilter === 'Low To High') {
        filtered.sort((a, b) => a.price - b.price);
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [categoryFilter, priceFilter, popularProducts, search, showSearch]);

  if (isPending) return <Loader />;

  return (
    <div>
      <ScrollToTop />
      <div className="max-w-[78rem] mx-auto min-h-[70rem] pt-14">
        <div>
          <div className='grid place-items-center gap-1'>
            <h1 className='text-2xl md:text-4xl font-black'>ALL COLLECTION</h1>
          </div>

          <SearchBar />

          <div className='flex items-center justify-between px-6 pt-12'>
            <div className='flex flex-col gap-2'>
              <p className='text-[14px] font-semibold'>CATEGORY</p>
              <select
                className='border border-gray-400 rounded-md h-7'
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option className='text-sm'>All</option>
                <option className='text-sm'>CASUAL</option>
                <option className='text-sm'>TRAVEL</option>
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-[14px] font-semibold'>PRICE</p>
              <select
                className='border border-gray-400 rounded-md h-7'
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option className='text-sm'>Sort by: Relevant</option>
                <option className='text-sm'>High To Low</option>
                <option className='text-sm'>Low To High</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center pt-8 px-6'>
            {filteredProducts?.map((item, index) => (
              <PopularItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                originalPrice={item.originalPrice}
                rating={item.rating}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
