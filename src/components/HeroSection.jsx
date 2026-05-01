"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
    {
        title: "Summer Sale ☀️",
        subtitle: "Up to 50% OFF",
        desc: "Sunglasses, outfits, skincare & more",
        img: "/images/summer1.jpg",



        features: ["UV Protection", "Breathable Fabric", "Skin Safe"],

        ctaPrimary: "Shop Now",
        ctaSecondary: "Explore",


    },

    {
        title: "Hot Deals 🔥",
        subtitle: "Limited Time Offers",
        desc: "Grab your favorite summer essentials",
        img: "/images/summer2.jpg",



        features: ["Best Sellers", "High Quality", "Top Rated"],

        ctaPrimary: "View Deals",
        ctaSecondary: "Shop Now",


    },

    {
        title: "Beach Ready 🌊",
        subtitle: "New Arrivals",
        desc: "Fresh styles for hot days",
        img: "/images/summer3.jpg",



        features: ["Lightweight", "Comfort Fit", "Stylish"],

        ctaPrimary: "Discover",
        ctaSecondary: "Shop Now",


    },
];

const HeroSection = () => {
    return (
        <section className="w-full h-screen">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop
                pagination={{ clickable: true }}
                className="h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>

                        <div
                            className="h-full bg-cover  bg-top bg-no-repeat flex items-center justify-between gap-160"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >

                            <div className="w-full h-full bg-black/60 flex items-center">
                                <div className="max-w-7xl mx-auto px-6 text-white">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-yellow-400">
                                        {slide.subtitle}
                                    </h2>
                                    <p className="mb-6 text-lg">{slide.desc}</p>

                                    <div className="flex gap-4">
                                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition cursor-pointer">
                                            {slide.ctaPrimary}
                                        </button>
                                        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition cursor-pointer">
                                            {slide.ctaSecondary}
                                        </button>
                                    </div>


                                    <p className="mt-4 text-lg opacity-80 text-center sm:text-left">
                                        Free delivery over ৳1500 • Easy returns
                                    </p>

                                    <div className="flex gap-3 mt-6 flex-wrap">
                                        {slide.features.map((f, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-white/20 px-3 py-1 rounded-full text-sm border-2 border-[#FAC775]"
                                            >
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;