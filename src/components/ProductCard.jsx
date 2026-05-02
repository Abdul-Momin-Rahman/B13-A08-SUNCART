import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`} className="card  bg-[#FFFBF5] shadow-lg hover:shadow-[#EF9F27] hover:scale-102 border border-gray-200">
            <figure className='w-full h-full'>
                <Image
                    width={400} height={400}
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover'
                    loading="eager"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-[#1A1108]  leading-snug">{product.name}</h2>

                <div className='flex justify-between items-center '>
                    <p className='flex items-center gap-2 text-lg '>
                        <FaStar className='text-[#EF9F27]' /> {product.rating} ({product.reveiws})
                    </p>
                    <p className='text-3xl font-bold text-[#EF9F27]  flex justify-end'>${product.price}</p>
                </div>

            </div>
            <button className='text-white text-lg bg-[#BA7517] w-full text-center py-2 px-3 rounded-2xl cursor-pointer'>View Details</button>
        </Link>
    );
};

export default ProductCard;