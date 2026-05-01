"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";


export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = async (data) => {

        const {email,password} = data;

        const { data:res , error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(data, error)
    };



    return (
        <div className=" h-screen flex items-center justify-center  mx-auto max-w-xl">

            <div className="flex items-center justify-center  w-full  bg-[#FFFBF5] py-16 px-6 rounded-2xl">
                <div className="w-full max-w-md">

                    <div className="flex  items-center justify-between">
                        <p className="text-lg text-orange-500 font-semibold">LOGIN</p>
                        <Link href={'/'} className="bg-orange-500 w-8 flex justify-center items-center h-8 rounded-full hover:scale-105 hover:border border-gray-700">
                            <FaArrowLeft />
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


                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required for Login" })}
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"

                            />
                            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-end">
                            <div className="text-right text-sm text-orange-500 cursor-pointer hover:text-orange-800 w-fit">
                                Forgot password?
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="w-full text-lg bg-white text-[#D85A30] py-2 rounded-lg hover:bg-[#D85A30] hover:text-white transition cursor-pointer"
                        >
                            Login
                        </button>
                    </form>


                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>


                    <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#D85A30] hover:text-white cursor-pointer">
                        <span className="text-lg"><BsGoogle /></span>
                        Continue with Google
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