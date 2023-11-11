'use client'
import { Context } from '@/context/Context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Allcart = () => {
    let {cart,removeCartItem,handlePurchaseItem}= useContext(Context)
    let router = useRouter()

   let payment  =(pid)=>{
    removeCartItem(pid)
handlePurchaseItem(pid)


toast.success("Purchased")

  
  
   }


    
    return (
        <div>
         { cart.length != 0 ?  <div className='grid grid-cols-1   gap-3  px-20 '>
            {
               cart?.map(p =>(
                <div className="alert  shadow-lg " key={p.id}>
  <div className="avatar">
  <div className="rounded-full">
    <Image src={p?.thumbnail} alt='e' width={50} height={50} />
  </div>
</div>

  <div>
    <h3 className="font-bold">{p?.title}</h3>
    <p>${p?.price}</p>
    <p>Quantity: {p?.quantity}</p>
  </div>
  <div className=' '>
     <button className="btn" onClick={()=>payment(p)}>
      Buy now 
     </button>
     <button className="btn" onClick={ ()=>removeCartItem(p.id)}>
      Remove now
     </button>
     
   </div>
</div>
                    
                  
               ))
           }
           </div> : <div><div className='text-center hero-content text-4xl uppercase justify-center items-center' >No Cart item </div> </div> } <Toaster></Toaster>
        </div>
    );
};

export default Allcart;