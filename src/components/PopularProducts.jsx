
import { getProductsData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';
import { FaFire } from 'react-icons/fa';
import Link from 'next/link';

const PopularProducts = async () => {

    const productData = await getProductsData();


    return (
        <div className='container mx-auto my-25'>

            <div className='flex justify-between items-center flex-col gap-2 sm:flex-row sm:mx-10 my-5'>
                <div className='flex items-center gap-3'>
                    <FaFire className='text-red-500' />
                    <h2 className='text-2xl font-bold'>Popular Products</h2>
                </div>

                <Link className='text-sm font-semibold text-[#BA7517] hover:text-[#ffd08f]' href={'/products'}>View All</Link>
            </div>

            <div className='grid lg:grid-cols-3  gap-10 '>
                {
                    productData.slice(0, 3).map(product => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;