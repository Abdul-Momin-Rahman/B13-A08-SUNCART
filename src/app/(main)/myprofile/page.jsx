"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




function Avatar({ size = 96 }) {


    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const initials = user.name
        ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
        : user.email[0].toUpperCase();

    if (user.image) {
        return (
            <Image
                src={user.image}
                alt={user.name || "Profile photo"}
                width={size}
                height={size}
                className="rounded-full object-cover border-[3px] border-[#EF9F27]"
                style={{ width: size, height: size }}
            />
        );
    }

    return (
        <div
            className="rounded-full bg-[#FAEEDA]  border-[3px] border-[#EF9F27] flex items-center justify-center shrink-0"
            style={{ width: size, height: size }}
        >
            <span
                className="text-[#BA7517]  font-bold"

            >
                {initials}
            </span>
        </div>
    );
}

function InfoRow({ label, value, icon }) {
    return (
        <div className="flex items-center gap-4 py-4 border-b border-[#FAC775]/40  last:border-0">
            <div className="w-9 h-9 rounded-xl bg-[#FAEEDA]  flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[#888780] mb-0.5">
                    {label}
                </p>
                <p className="text-[14px] text-[#1A1108]  truncate font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}

export default function MyProfilePage() {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const router = useRouter();

    useEffect(() => {
        if (!isPending && !user) {
            router.push("/login");
        }

        if (isPending) {
            return <div className="h-screen w-full flex justify-center items-center"><span className="loading loading-infinity loading-xl"></span></div>
        }
    }, [isPending, user, router]);




    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/login");
    };





    return (
        <div className="min-h-screen bg-[#FFFBF5]  py-12 px-4">
            <div className="max-w-2xl mx-auto">


                <div className="mb-8">

                    <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-1">
                        Account
                    </span>

                    <h1
                        className="text-3xl font-bold text-[#1A1108] "
                    >
                        My Profile
                    </h1>
                </div>


                <div className="bg-[#FFFBF5]  border border-[#FAC775]  rounded-2xl overflow-hidden mb-5">


                    <div className="h-24 bg-linear-to-r from-[#1A1108] via-[#2C1E06] to-[#3A2A0A] relative overflow-hidden">
                        <div className="absolute w-48 h-48 rounded-full bg-[#EF9F27] opacity-10 -top-10 -right-10" />
                        <div className="absolute w-28 h-28 rounded-full bg-[#FAC775] opacity-10 -bottom-10 left-20" />
                    </div>


                    <div className="px-6 pb-6">
                        <div className="flex items-end justify-between -mt-12 mb-5">
                            <div className="ring-4 ring-[#FFFBF5]  rounded-full z-40">
                                <Avatar user={user} size={88} />
                            </div>
                            <Link
                                href="/my-profile/update"
                                className="flex items-center gap-2 border border-[#EF9F27] text-[#BA7517]  hover:bg-[#EF9F27] hover:text-[#1A1108]  transition-colors duration-200 text-[12px] font-semibold px-4 py-2 rounded-full"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                                Edit Profile
                            </Link>
                        </div>


                        <h2
                            className="text-2xl font-bold text-[#1A1108] dark:text-[#FAC775] mb-0.5"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {user && user.name || "—"}
                        </h2>
                        <p className="text-[13px] text-[#888780]">{user.email}</p>
                    </div>
                </div>

                {/* ── Info rows card ── */}
                <div className="bg-[#FFFBF5] dark:bg-[#2C1E06] border border-[#FAC775] dark:border-[#3A2A0A] rounded-2xl px-6 py-2 mb-5">

                    <InfoRow
                        label="Full Name"
                        value={user.name || "—"}
                        icon={
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2" strokeLinecap="round">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        }
                    />

                    <InfoRow
                        label="Email Address"
                        value={user.email}
                        icon={
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2" strokeLinecap="round">
                                <path d="M3 8l9 6 9-6" />
                                <rect x="2" y="6" width="20" height="14" rx="2" />
                            </svg>
                        }
                    />

                </div>


                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/myprofile/update"
                        className="flex-1 flex items-center justify-center gap-2 h-11 bg-[#EF9F27] hover:bg-[#FAC775] text-[#1A1108] text-[13px] font-semibold rounded-full transition-colors duration-200 px-3 py-2"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Update Information
                    </Link>

                    <button
                        onClick={handleSignOut}
                        className="flex-1 flex items-center justify-center gap-2 h-11 border border-[#D85A30]/50 text-[#D85A30]  hover:bg-[#D85A30] hover:text-white hover:border-[#D85A30] transition-colors duration-200 text-[13px] font-semibold rounded-full px-3 py-2"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Sign Out
                    </button>
                </div>

            </div>
        </div>
    );
}