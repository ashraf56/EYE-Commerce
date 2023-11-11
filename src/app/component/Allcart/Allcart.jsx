'use client'
import { Context } from '@/context/Context';
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
           <div className='grid grid-cols-1   gap-2  px-20 '>
            {
               cart?.map(p =>(
                <div className="alert shadow-lg justify-between" key={p.id}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

  <div>
    <h3 className="font-bold">{p?.title}</h3>
    <p>${p?.price}</p>
    <p>Quantity: {p?.quantity}</p>
  </div>
  <div>
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
           </div>  <Toaster></Toaster>
        </div>
    );
};

export default Allcart;