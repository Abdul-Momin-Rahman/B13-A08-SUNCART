import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100  shadow-lg hover:shadow-[#EF9F27] hover:scale-102 border border-gray-200">
            <figure className='w-full h-full'>
                <Image
                    width={250} height={250}
                    src={product.image}
                    alt={product.name}
                    quality={75}
                    className='w-full h-full object-cover  '
                    priority
                     />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <div className='flex justify-between items-center '><p className='flex items-center gap-2 text-lg'><FaStar className='text-[#EF9F27]' /> {product.rating}</p> <p className='text-xl flex font-bold justify-end'>${product.price}</p></div>
                
            </div>
            <Link className='text-white text-lg bg-[#BA7517] w-full text-center py-2 px-3 rounded-2xl' href={`/products/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;