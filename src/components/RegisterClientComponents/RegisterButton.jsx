'use client'

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';

const RegisterButton = () => {

      const [googleLoading, setGoogleLoading] = useState(false);
    
        const handleGoogleSignIn = async () => {
    
            setGoogleLoading(true);
            const data = await authClient.signIn.social({
                provider: "google",
            });
    
            setGoogleLoading(false);
        }

    return (
        <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#D85A30] hover:text-white cursor-pointer mt-6"
            onClick={handleGoogleSignIn} disabled={googleLoading}>
            {googleLoading ? <span className="loading loading-spinner loading-md"></span> :
                <><span className="text-lg"><BsGoogle /></span>
                    <span>Continue with Google</span></>}
        </button>
    );
};

export default RegisterButton;