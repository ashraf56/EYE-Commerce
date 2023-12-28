'use client'
import { Context } from '@/context/Context';
import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';

const CartButton = ({ singleProduct }) => {
    // Pcart means Purchased product  which is already in the localstorage
    const { Pcart, cart, handlecartItem } = useContext(Context)

    let Cquantity = cart.map(pc => pc.quantity)
    let Pstock = Pcart.map(pc => pc.stock)

    return (
        <div>
            {/* if stock is empty then the add to cart button will disable  */}
            {Pstock >= singleProduct.stock || Cquantity >= singleProduct.stock ? <button disabled className='btn'>
                Add to cart
            </button> : <button className='btn' onClick={() => handlecartItem(singleProduct)}>
                Add to cart
            </button>}
            <Toaster></Toaster>
        </div>
    );
};

export default CartButton;