/* eslint-disable @next/next/no-img-element */
'use client'

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfileUpdateForm = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user;
    const router = useRouter();

    const [name, setName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await authClient.updateUser({ name, image });
            router.push('/myprofile');
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleUpdate} className="px-8 pb-8 pt-6 flex flex-col gap-5">


            {error && (
                <div className="px-4 py-3 rounded-xl bg-[#FAECE7] border border-[#D85A3040] text-[13px] text-[#993C1D]">
                    {error}
                </div>
            )}


            <div>
                <label className="block text-[12px] font-medium uppercase tracking-widest text-[#888780] mb-2">
                    Full Name
                </label>

                <div className="flex items-center gap-3 h-11 bg-[#FFFBF5] border-[1.5px] border-[#FAC775] focus-within:border-[#EF9F27] rounded-xl px-4 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2" strokeLinecap="round" className="shrink-0">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="flex-1 bg-transparent outline-none text-[13px] text-[#1A1108] placeholder-[#B4B2A9]"
                    />
                </div>
            </div>


            <div>
                <label className="block text-[12px] font-medium uppercase tracking-widest text-[#888780] mb-2">
                    Photo URL
                </label>
                <div className="flex items-center gap-3 h-11 bg-[#FFFBF5] border-[1.5px] border-[#FAC775] focus-within:border-[#EF9F27] rounded-xl px-4 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2" strokeLinecap="round" className="shrink-0">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="https://example.com/photo.jpg"
                        className="flex-1 bg-transparent outline-none text-[13px] text-[#1A1108] placeholder-[#B4B2A9]"
                    />
                </div>

                {image && (
                    <div className="flex items-center gap-3 mt-3 p-3 bg-[#FAEEDA] border border-[#FAC775] rounded-xl">
                        <img
                            src={image}
                            alt="Preview"
                            className="w-10 h-10 rounded-full object-cover border-2 border-[#EF9F27]"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <span className="text-[12px] text-[#BA7517] truncate">{image}</span>
                    </div>
                )}
            </div>


            <div className="w-full h-px bg-[#FAC775]/50" />


            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex-1 h-11 border border-[#FAC775] text-[#5F5E5A] hover:border-[#EF9F27] hover:text-[#BA7517] transition-colors duration-200 text-[13px] font-semibold rounded-full cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 h-11 bg-[#EF9F27] hover:bg-[#FAC775] text-[#1A1108] text-[13px] font-semibold rounded-full transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                    {loading ? 'Updating...' : 'Update Information'}
                </button>
            </div>

        </form>
    );
};

export default ProfileUpdateForm;