'use client'
import StarRating from '@/components/StarRating';
import { getProductsDataById } from '@/lib/data';
import { Spinner } from '@heroui/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';





const ProductDetailsPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchProduct = async () => {
            setLoading(true);

            const data = await getProductsDataById(id);

            setProduct(data);
            setLoading(false);
        };

        if (id) fetchProduct();

    }, [id]);

    if (loading || !product) return <p className='h-screen flex justify-center items-center'><Spinner size="xl" /></p>
    // console.log(product)



    // const { name, brand, price, rating, stock, description, image, category, reveiws } = product;






    return (
        <div className="mx-auto max-w-5xl shadow-2xl shadow-[#EF9F27]/30 my-4 md:my-16 rounded-2xl overflow-hidden border border-[#FAC775] ">
            <div className="card lg:card-side bg-[#FFFBF5] ">
                <figure className="lg:w-105 shrink-0 bg-[#FAC775]/10 ">
                    <Image
                        loading='eager'
                        src={product.image}
                        alt={product?.name || "Photo"}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body p-4 md:p-8 flex flex-col justify-between">


                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#EF9F27] bg-[#FAEEDA]  border border-[#EF9F2740] px-3 py-1 rounded-full w-fit mb-2">
                        {product?.category}
                    </span>


                    <h2 className="card-title text-2xl font-bold text-[#1A1108]  leading-snug">
                        {product?.name}
                    </h2>


                    <p className="text-[12px] text-[#888780] tracking-wide -mt-1">by {product?.brand}</p>


                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                            <StarRating rating={product?.rating} />
                        </div>
                        <span className="text-[12px] text-[#888780]">{product?.rating} ({product?.reveiws})</span>
                    </div>


                    <div className="w-full h-px bg-[#FAC775]/50 my-2" />


                    <p className="text-[13px] text-[#5F5E5A]  leading-relaxed">
                        {product?.description}
                    </p>


                    <p className="text-[12px] text-[#0F6E56]  font-medium mt-1">
                        ✓ In Stock — {product?.stock} left
                    </p>


                    <div className="card-actions justify-between items-center mt-4">
                        <span
                            className="text-3xl font-bold text-[#EF9F27]"

                        >
                            {product?.price}$
                        </span>
                        <button className=" cursor-pointer h-11 px-7 bg-[#EF9F27] hover:bg-[#FAC775] text-[#1A1108] text-[13px] font-semibold rounded-full transition-colors duration-200"
                            onClick={() => {
                                toast.success(`${product.name} is added to the cart`, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Slide,
                                });
                            }}>
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;