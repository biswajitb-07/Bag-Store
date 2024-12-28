import React from 'react'
import { useSelector } from 'react-redux';
import { selectCart } from '../../Redux/cartSlice';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CartTotal = () => {
    const cartItem = useSelector(selectCart);
    const location = useLocation();

    // Calculate totals
    const calculateSubtotal = () => {
        return cartItem.reduce((acc, item) => acc + item.subTotal, 0);
    };

    const calculateGST = (subtotal) => {
        const gstPercentage = 0.1; // 10% GST
        return subtotal * gstPercentage;
    };

    const calculateTotal = (subtotal, gst) => {
        return subtotal + gst;
    };

    const subtotal = calculateSubtotal();
    const gst = calculateGST(subtotal);
    const total = calculateTotal(subtotal, gst);

    const isCartPage = location.pathname === '/cart';
    const buttonText = isCartPage ? 'Proceed to checkout' : 'Place order';
    const buttonLink = isCartPage ? '/place-order' : '/orders';

    const msgShow = () => {
        toast.success("Order successful")
    }

    return (
        <>
            {/* CARD TOTAL */}
            <div className="bg-white border border-gray-200 shadow-md rounded-md p-6">
                <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
                <div className="flex justify-between text-gray-600 mb-2">
                    <span>SUBTOTAL:</span>
                    <span className="font-medium">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                    <span>GST:</span>
                    <span className="font-medium">$ {gst}.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-gray-800 font-semibold text-lg">
                    <span>TOTAL</span>
                    <span>$ {total.toFixed(2)}</span>
                </div>
                <Link to={buttonLink}>
                    <button onClick={buttonText == "Place order" ? msgShow : ""} className="mt-6 w-full bg-black text-white text-center py-2 rounded-md hover:bg-yellow-500 transition">
                        {buttonText}
                    </button>
                </Link>
            </div>
        </>
    )
}