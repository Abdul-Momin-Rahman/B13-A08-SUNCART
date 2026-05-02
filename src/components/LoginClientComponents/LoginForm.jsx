'use client'

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { Bounce, Slide, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {


    
    const searchParams = useSearchParams();
    const next = searchParams.get("next");

    const [loading, setLoading] = useState(false);

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
                className="w-full text-lg bg-white text-[#D85A30] py-2 rounded-lg hover:bg-[#D85A30] hover:text-white border transition cursor-pointer"
            >
                {loading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;