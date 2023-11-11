import CartButton from '@/app/component/CartButton/CartButton';
import Stockcount from '@/app/component/Stockcount/Stockcount';
import getSingleProduct from '@/util/getSingleProduct';
import Image from 'next/image';
import Link from 'next/link';



const ProductDetail = async({params}) => {
const {id}=params;
const singleProduct= await getSingleProduct(id)

    return (
        <div className='p-10'>
            <div className='text-center'>
                <button className='btn'>
                    <Link href={'/'}>Go to Home</Link>
                </button>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={singleProduct?.thumbnail} alt='img' width={300} height={300}/>
  </figure>
  <div className="card-body">
   <div>
   <h2 className="card-title">{singleProduct.title}</h2>
    <p>${singleProduct.price}</p>
    <p>{singleProduct.description}</p>
   <Stockcount singleProduct={singleProduct}></Stockcount>
   </div>
    <div className="card-actions justify-end">
      <CartButton singleProduct={singleProduct}></CartButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;