import CartButton from '@/app/component/CartButton/CartButton';
import Stockcount from '@/app/component/Stockcount/Stockcount';
import getSingleProduct from '@/util/getSingleProduct';
import Image from 'next/image';



const ProductDetail = async ({ params }) => {
  const { id } = params;
  const singleProduct = await getSingleProduct(id)

  return (
    <div className='p-10'>

      <div className="card bg-base-100 ">
        <div className="card-body">
          <figure>
            <Image src={singleProduct?.thumbnail} alt='img' width={400} height={400} />
          </figure>

          <div>
            <h2 className="card-title text-3xl">{singleProduct.title}</h2>
            <p>${singleProduct.price}</p>
            <p><span className='font-bold'>Description:</span>{singleProduct.description}</p>
            {/* it will show stock number */}
            <Stockcount singleProduct={singleProduct}></Stockcount>
          </div>
          <div className="card-actions justify-end">
            {/*  add to cart button */}
            <CartButton singleProduct={singleProduct}></CartButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;