import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../Redux/cartSlice'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export const Orders = () => {
  const cartItem = useSelector(selectCart);

  const currentDate = new Date();
  const currentTime = new Date();
  const formattedDate = format(currentDate, "dd MMM, yyyy");
  const formattedTime = format(currentTime, "hh:mm:ss a");

  return (
    <div>
      <div className='max-w-[78rem] mx-auto min-h-[90vh] px-6 py-5'>
        {
          cartItem.length > 0 && <>
            <h1 className='text-xl md:text-4xl font-bold pb-5'>My Orders</h1>

            {
              cartItem.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row justify-between items-center py-5 border-t border-b">
                  <div className="flex items-center gap-5">
                    <div>
                      <img src={item.image} className="h-20 w-20 object-cover rounded-md" alt={item.name} />
                    </div>
                    <div className="grid gap-1">
                      <p className="font-semibold text-lg pr-1">{item.name}</p>
                      <p className="text-gray-500">
                        <span className="font-medium">${item.subTotal}</span> &nbsp;|&nbsp; Quantity: {item.quantity} &nbsp;|
                      </p>
                      <div className='flex items-center gap-3'>
                        <p className="text-sm font-bold">Date: <span className='text-gray-600'>{formattedDate}</span></p>
                        <p className="text-sm font-bold">Time: <span className='text-gray-600'>{formattedTime}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mt-5 md:mt-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <p className="text-base font-semibold">Ready to ship</p>
                    </div>
                    <button className="px-4 py-2 text-sm text-blue-500 border rounded-md hover:bg-gray-100">
                      Track Order
                    </button>
                  </div>
                </div>

              ))
            }
          </>
        }


        {
          cartItem.length === 0 && <div className='flex justify-center py-10 min-h-[45rem] md:min-h-[85vh]'>
            <div className='text-center'>
              <h1 className='text-3xl font-black pb-5'>You Not Order Yet</h1>
              <Link to="/shop"> <button className='px-10 py-3 rounded-lg bg-black text-white hover:bg-yellow-500'>Plz Order</button></Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
