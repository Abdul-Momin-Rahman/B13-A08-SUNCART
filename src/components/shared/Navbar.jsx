'use client'


import Image from 'next/image';
import React, { useState } from 'react';
import SunImg from '@/assets/sun.svg'
import NavLink from '../NavLink';
import { Avatar, Button } from '@heroui/react';
import { CiMenuBurger, CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';


const Navbar = () => {

    const route = useRouter();

    const path = usePathname();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false);
    }

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    // console.log(user)

    return (
        <div className='bg-[#fff6e9]  flex items-center h-15  lg:h-17 sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between '>



                <div className='flex gap-0.5 items-center'>
                    <Image src={SunImg} width={50} height={50} alt='SUN SVG'></Image>
                    <span className='text-[#EF9F27] font-bold text-2xl'>SunCart</span>
                </div>

                <div className='md:flex gap-8 items-center justify-between hidden'>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>Products</NavLink>
                    <NavLink href={user ? '/myprofile' : '/login'}>My Profile</NavLink>
                </div>

                <div className='md:flex gap-2 items-center justify-between hidden'>
                    {user ? <Avatar>
                        <Avatar.Image alt={user.name} src={user.image} />
                        <Avatar.Fallback>{user.name?.split(" ").map(n => n[0]).join("").toUpperCase()}</Avatar.Fallback>
                    </Avatar> :
                        <Button variant="ghost" className={"hover:bg-[#EF9F27]"} onClick={() => route.push('/register')}>Register</Button>}

                    {user ? <Button variant="ghost" className={"hover:bg-[#EF9F27]"} onClick={async () => {
                        await authClient.signOut()
                        redirect('/login')
                    }}>Logout</Button> : <Button variant="ghost" className={"hover:bg-[#EF9F27]"} onClick={() => redirect('/login')}>Login</Button>}

                </div>





                <div className="md:hidden ">

                    <div className='flex'>
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-4 py-2 bg-[#fffbf557] rounded"
                        >
                            {open ? <CiMenuFries /> : <CiMenuBurger />}
                        </button>

                        <div className='mr-3'>
                            {user ? isPending ? <span className="loading loading-ring loading-xl"></span> : <Avatar>
                                <Avatar.Image alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user.name?.split(" ").map(n => n[0]).join("").toUpperCase()}</Avatar.Fallback>
                            </Avatar> : null}
                        </div>
                    </div>

                    {open && (
                        <div className="absolute right-0  mt-3  w-25 py-2 pl-2  bg-[#FFFBF5] shadow-lg rounded">
                            <ul className="flex flex-col">
                                <Link href={'/'} className={`${path == '/' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl text-center py-1`} onClick={handleClick}>

                                    Home
                                </Link>

                                <Link href={'/products'} className={`${path == '/products' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl py-1 text-center`} onClick={handleClick}>

                                    Products
                                </Link>

                                <Link href={user? "/myprofile" : "/login"} className={`${path == '/myprofile' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl text-center py-1`} onClick={() => {
                                    handleClick
                                    

                                }}>

                                    My Profile
                                </Link>

                                {user ? <Link href={'/login'} className={`${path == '/login' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl text-center py-1`} onClick={async () => {
                                    handleClick
                                    await authClient.signOut()
                                    redirect('/login')
                                }}>

                                    Logout
                                </Link> : <Link href={'/login'} className={`${path == '/login' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl text-center py-1`} onClick={handleClick}>

                                    Login
                                </Link>}

                                {user ? "" : <Link href={'/register'} className={`${path == '/register' ? 'bg-[#EF9F27]' : undefined} rounded-l-xl text-center py-1`} onClick={handleClick}>

                                    Register
                                </Link>}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default Navbar;