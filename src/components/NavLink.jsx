'use client'
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets : ['latin'],
  weight : ['100','200','300','400','500','600','700','800','900']
})

const NavLink = ({href , children , className}) => {
    const path = usePathname();
    // console.log(path)
    const isActive = path == href;
    return (
        <Link href={href} className={`${isActive && 'border-b-2 border-[#EF9F27] '} pb-1 text-sm ${className} ${dm_sans.className}`}>{children}</Link>
    );
};

export default NavLink;