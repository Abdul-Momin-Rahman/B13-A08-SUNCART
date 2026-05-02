"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";




export default function RegisterPage() {

    const [loading ,setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        
        setGoogleLoading(true);
        const data = await authClient.signIn.social({
            provider: "google",
        });

        setGoogleLoading(false);
    }

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegister = async (data) => {

        setLoading(true);

        const { name, email, photo, password } = data;

        const { data: res, error  } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
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
            toast.success('Sign Up Successful', {
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

            router.push('/login')
        }
    };





    return (
        <div className="h-screen flex items-center justify-center  mx-auto max-w-xl">

            <div className="flex items-center justify-center  w-full  bg-[#FFFBF5] py-8 px-6 rounded-2xl">

                <div className="w-full max-w-md ">


                    <div className="space-y-1">
                        <p className="text-lg text-orange-500 font-semibold">REGISTER</p>
                        <h1 className="text-2xl font-bold mt-1">Create an account</h1>
                        <p className="text-gray-500 text-sm mb-6">
                            Start shopping summer deals today.
                        </p>
                    </div>


                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">


                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required for Registration" })}
                                placeholder="Your Name"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
                        </div>


                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required for Registration" })}
                                placeholder="Your Email"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                        </div>


                        <div>
                            <label className="text-sm text-gray-600">Photo URL</label>
                            <input
                                type="text"
                                {...register("photo", { required: "Photo URL is required for Registration" })}
                                placeholder="Your Photo URL"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            {errors.photo && <p className="text-red-500 mt-2">{errors.photo.message}</p>}
                        </div>


                        <div className="relative">
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required for Registration", minLength: {
                                        value: 8,
                                        message: "Minimum 8 characters",
                                    },
                                })}
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700  text-white outline-none"

                            />
                            <span className="absolute right-5 top-10 text-white " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                        </div>





                        <button
                            disabled = {loading}
                            type="submit"
                            className="w-full text-[#D85A30] bg-white  py-2 rounded-lg hover:bg-[#D85A30] hover:text-white cursor-pointer transition mt-10 text-lg"
                            
                        >
                            {loading ? <span className="loading loading-spinner loading-md"></span> : "Register"}
                        </button>
                    </form>


                    <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#D85A30] hover:text-white cursor-pointer mt-6"
                        onClick={handleGoogleSignIn} disabled={googleLoading}>
                        {googleLoading ? <span className="loading loading-spinner loading-md"></span>  : 
                        <><span className="text-lg"><BsGoogle /></span>
                        <span>Continue with Google</span></>}
                    </button>


                    <p className="text-center text-sm mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-orange-500 hover:text-orange-800">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}