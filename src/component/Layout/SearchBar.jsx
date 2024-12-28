import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search, setSearch, ShowSearch, setShowSearch } from "../../Redux/shop"

export const SearchBar = () => {
    const search = useSelector(Search);
    const showSearch = useSelector(ShowSearch);

    const dispatch = useDispatch();

    return showSearch ? (
        <div className='border-t border-b bg-gray-50 text-center pt-3'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-3 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input value={search} onChange={(e) => dispatch(setSearch(e.target.value))} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
                <img className='w-4' src="../images/search_icon.png" alt="" />
            </div>
            <img onClick={() => dispatch(setShowSearch(false))} className='inline w-3 cursor-pointer' src="../images/cross_icon.png" alt="" />
        </div>
    ) : null
}