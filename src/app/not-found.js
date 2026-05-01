import Link from 'next/link';
import React from 'react';

const GlobalNotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-8xl font-extrabold text-[#EF9F27]">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" className="btn bg-[#BA7517] text-white mt-8">
                Go Back Home
            </Link>
        </div>

    );
};

export default GlobalNotFoundPage;