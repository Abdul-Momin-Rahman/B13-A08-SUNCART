"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";




export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegister = (data) => {

        console.log(data);
    };

    const passlength = watch("password");



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


                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required for Registration", minLength: {
                                        value: 8,
                                        message: "Minimum 8 characters",
                                    },
                                })}
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700  text-white outline-none"

                            />
                            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                        </div>





                        <button
                            type="submit"
                            className="w-full text-[#D85A30] bg-white  py-2 rounded-lg hover:bg-[#D85A30] hover:text-white cursor-pointer transition mt-10 text-lg"
                        >
                            Register
                        </button>
                    </form>


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