import React, { useState } from 'react'
import { CartTotal } from '../component/UI/CartTotal'

export const PlaceOrder = () => {
  const [selectedMethod, setSelectedMethod] = useState('Cash on Delivery');

  const methods = [
    { name: 'Stripe', color: 'text-indigo-500' },
    { name: 'Razorpay', color: 'text-blue-500' },
    { name: 'Cash on Delivery', color: 'text-green-500' },
  ];

  return (
    <div>
      <div className='max-w-[78rem] mx-auto min-h-[90vh] px-6 grid grid-cols-1 items-start md:grid-cols-2'>
        <div>
          <div className="h-full bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Billing Details</h2>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First name" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
                <input type="text" placeholder="Last name" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email address" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Street" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="City" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
                <input type="text" placeholder="State" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Zipcode" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
                <input type="text" placeholder="Country" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
              <div>
                <input type="tel" placeholder="Phone" className="mt-1 w-full border h-10 border-black rounded-md shadow-sm" />
              </div>
            </form>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              PAYMENT METHOD 
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {methods.map((method) => (
                <div
                  key={method.name}
                  onClick={() => setSelectedMethod(method.name)}
                  className={`border rounded-md p-4 flex flex-col items-center justify-center cursor-pointer ${selectedMethod === method.name ? 'border-indigo-500 font-bold' : 'border-gray-300'
                    }`}
                >
                  <span className={`${method.color} text-[10px] md:text-base`}>{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:py-14'>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}
