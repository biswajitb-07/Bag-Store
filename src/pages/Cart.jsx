import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, addToCart, removeFromCart } from '../Redux/cartSlice';
import { MdDelete } from 'react-icons/md';
import { CartTotal } from '../component/UI/CartTotal';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Cart = () => {
  const cartItem = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    const updatedItem = { ...item, quantity: newQuantity, subTotal: item.price * newQuantity };
    dispatch(addToCart({ productData: updatedItem, quantity: newQuantity }));
  };

  const handleDecrement = (item) => {
    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
    const updatedItem = { ...item, quantity: newQuantity, subTotal: item.price * newQuantity };
    dispatch(addToCart({ productData: updatedItem, quantity: newQuantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Product remove from cart");
  };

  return (
    <div>
      {
        cartItem.length > 0 &&
        <>
          <h1 className='text-2xl md:text-4xl text-center font-black py-3'>ORDERS ITEM</h1>
          <div className='max-w-[78rem] mx-auto px-6 grid grid-cols-1 gap-8 py-10 min-h-[70rem] md:min-h-[85vh]'>
            <div>
              {cartItem.map((item) => (
                <div key={item.id} className="p-4 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-5">
                    {/* Product Info */}
                    <div className="flex items-center">
                      <img src={item.image} alt="Product" className="w-20 h-25 object-cover rounded" />
                      <div className="ml-4">
                        <h3 className="text-gray-800 font-medium">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 mt-1">${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity & Subtotal */}
                    <div className="flex items-center justify-center gap-5 px-10 lg:px-0">
                      {/* Quantity Selector */}
                      <div className="flex items-center border rounded">
                        <button onClick={() => handleDecrement(item)} className="px-2 py-1 text-gray-600 hover:bg-yellow-500">
                          –
                        </button>
                        <span className="px-4 text-gray-800">{item.quantity}</span>
                        <button onClick={() => handleIncrement(item)} className="px-2 py-1 text-gray-600 hover:bg-yellow-500">  +</button>
                      </div>

                      {/* Subtotal */}
                      <p className="text-gray-800 font-medium">
                        $ {item.subTotal.toFixed(2)}
                      </p>

                      {/* Delete Icon */}
                      <button onClick={() => handleRemove(item.id)} className="text-gray-500 hover:text-red-500">
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <CartTotal />
            </div>
          </div>
        </>
      }

      {
        cartItem.length === 0 && <div className='flex justify-center py-10 min-h-[45rem] md:min-h-[85vh]'>
          <div className='text-center'>
            <h1 className='text-3xl font-black pb-5'>No Item Found</h1>
            <Link to="/shop"> <button className='px-10 py-3 rounded-lg bg-black text-white hover:bg-yellow-500'>Plz Add Item</button></Link>
          </div>
        </div>
      }

    </div>
  );
}
