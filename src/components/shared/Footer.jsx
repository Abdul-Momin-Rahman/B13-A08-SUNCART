import Link from 'next/link';
import React from 'react';
import { BsTwitterX, BsYoutube } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaSun } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#1A1108] text-white px-10 pt-12 pb-6 mt-auto">

            <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-50 mb-10 container mx-auto">

                {/* left */}
                <div className=' w-full '>

                    <div className="flex items-center gap-2 mb-3">

                        <div className='bg-[#EF9F27] rounded-full p-2'><FaSun /></div>
                        <span className="text-xl font-bold text-[#FAC775]">
                            Sun
                            <span className="text-[#EF9F27]">Cart</span>
                        </span>
                    </div>

                    <p className="text-[#888780] text-sm leading-relaxed max-w-55 mb-5">
                        Your one-stop summer essentials store. Sun, style, and everything in between.
                    </p>


                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-3">
                        Contact Info
                    </p>


                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-[#2C1E06] rounded-md flex items-center justify-center shrink-0">
                            <div className='text-[#EF9F27]'><MdEmail /></div>
                        </div>
                        <span className="text-[#B4B2A9] text-sm">support@suncart.com</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 bg-[#2C1E06] rounded-md flex items-center justify-content-center shrink-0 justify-center">

                            <div className='text-[#EF9F27]'><IoCallOutline /></div>
                        </div>
                        <span className="text-[#B4B2A9] text-sm">+1 (800) SUN-CART</span>
                    </div>


                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#2C1E06] rounded-md flex items-center justify-center shrink-0">
                            <div className='text-[#EF9F27]'><CiLocationOn /></div>
                        </div>
                        <span className="text-[#B4B2A9] text-sm">Miami Beach, FL 33139</span>
                    </div>
                </div>

                {/* middle */}
                <div className=' w-full'>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-4">
                        Follow Us
                    </p>

                    <div className="flex gap-3 mb-2">

                        <a href="https://facebook.com" target="_blank"
                            className="w-9 h-9 bg-[#2C1E06] border border-[#3A2A0A] rounded-lg flex items-center justify-center hover:bg-[#3A2A0A] transition-colors">
                            <FaFacebook className='text-[#EF9F27]' />
                        </a>


                        <a href="https://instagram.com" target="_blank"
                            className="w-9 h-9 bg-[#2C1E06] border border-[#3A2A0A] rounded-lg flex items-center justify-center hover:bg-[#3A2A0A] transition-colors">
                            <FiInstagram className='text-[#EF9F27]' />
                        </a>


                        <a href="https://x.com" target="_blank"
                            className="w-9 h-9 bg-[#2C1E06] border border-[#3A2A0A] rounded-lg flex items-center justify-center hover:bg-[#3A2A0A] transition-colors">
                            <BsTwitterX className='text-[#EF9F27]' />
                        </a>


                        <a href="https://youtube.com" target="_blank" rel="noreferrer"
                            className="w-9 h-9 bg-[#2C1E06] border border-[#3A2A0A] rounded-lg flex items-center justify-center hover:bg-[#3A2A0A] transition-colors">
                            <BsYoutube className='text-[#EF9F27]' />
                        </a>
                    </div>

                    <p className="text-[#888780] text-xs mb-6">Facebook · Instagram · X · YouTube</p>


                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-2">
                        Newsletter
                    </p>
                    <p className="text-[#888780] text-xs leading-relaxed mb-3">
                        Get summer deals straight to your inbox.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Give your @email"
                            className="flex-1 bg-[#2C1E06] border border-[#3A2A0A] text-[#FAC775] placeholder-[#5F5E5A] text-xs px-3 py-2 rounded-md outline-none focus:border-[#EF9F27] transition-colors"
                        />
                        <button className="bg-[#EF9F27] text-[#1A1108] text-xs font-semibold px-3 py-2 rounded-md hover:bg-[#FAC775] transition-colors cursor-pointer ">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className='md:ml-10  w-full '>
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-3">
                            Quick Links
                        </p>
                        {[
                            { label: "Home", href: "/" },
                            { label: "Products", href: "/products" },
                            { label: "My Profile", href: "/myprofile" },
                            { label: "Summer Care Tips", href: "/#summer-tips" },
                            { label: "Top Brands", href: "/#top-brands" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block text-[#B4B2A9] text-sm mb-2 hover:text-[#EF9F27] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mt-6 mb-3">
                            Legal
                        </p>
                        {[
                            { label: "Privacy Policy", href: "#" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Cookie Policy", href: "#" },
                            { label: "Refund Policy", href: "#" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block text-[#B4B2A9] text-sm mb-2 hover:text-[#EF9F27] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            <div className="container mx-auto border-t border-[#2C2C2A] pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 ">
                <p className="text-[#5F5E5A] text-xs text-center w-full">
                    © 2025 SunCart. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;