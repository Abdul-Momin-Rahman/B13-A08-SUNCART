"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { Bounce, Slide, toast } from "react-toastify";


export default function LoginPage() {


    const router = useRouter();
    const searchParams = useSearchParams();
    const next = searchParams.get("next");

    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const handleGoogleSignIn = async () => {

        setGoogleLoading(true);
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL : next || "/",
        });

        setGoogleLoading(false);
    }

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = async (data) => {

        setLoading(true);

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            // rememberMe: true,
            callbackURL: next || "/",
        });

        setLoading(false);

        if (error) {
            toast.error(`${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        if (res) {
            toast.success('Login Successful', {
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
        }


    };



    return (
        <div className=" h-screen flex items-center justify-center  mx-auto max-w-xl">

            <div className="flex items-center justify-center  w-full  bg-[#FFFBF5] py-16 px-6 rounded-2xl">
                <div className="w-full max-w-md">

                    <div className="flex  items-center justify-between">
                        <p className="text-lg text-orange-500 font-semibold">LOGIN</p>
                        <Link href={'/'} className="bg-orange-500 w-8 flex justify-center items-center h-8 rounded-full hover:scale-105 hover:border border-gray-700">
                            <FaHome />
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold mt-1">Welcome back</h1>
                    <p className="text-gray-500 text-sm mb-6">
                        Enter your credentials to access your account.
                    </p>




                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

                        <div>
                            <label className="text-sm text-gray-600">Email address</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required for Login" })}
                                placeholder="you@example.com"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                        </div>


                        <div className="relative">
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", { required: "Password is required for Login" })}
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            <span className="absolute right-5 top-10 text-white cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-end">
                            <div className="text-right text-sm text-orange-500 cursor-pointer hover:text-orange-800 w-fit">
                                Forgot password?
                            </div>
                        </div>


                        <button
                            type="submit" disabled={loading}
                            className="w-full text-lg bg-white text-[#D85A30] py-2 rounded-lg hover:bg-[#D85A30] hover:text-white transition cursor-pointer"
                        >
                            {loading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
                        </button>
                    </form>


                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>


                    <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#D85A30] hover:text-white cursor-pointer"
                        onClick={handleGoogleSignIn} disabled={googleLoading}>
                        {googleLoading ? <span className="loading loading-spinner loading-md"></span> :
                            <><span className="text-lg"><BsGoogle /></span>
                                <span>Continue with Google</span></>}
                    </button>

                    <p className="text-center text-sm mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href={'/register'} className="text-orange-500 cursor-pointer hover:text-orange-800">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>


        </div>
    );
}