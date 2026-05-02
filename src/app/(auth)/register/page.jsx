


import Link from "next/link";
import RegisterButton from "@/components/RegisterClientComponents/RegisterButton";
import RegisterForm from "@/components/RegisterClientComponents/RegisterForm";
import { FaHome } from "react-icons/fa";



export const metadata = {
  title: "SunCart | Register",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};


export default function RegisterPage() {


    return (
        <div className="h-screen flex items-center justify-center  mx-auto max-w-xl">

            <div className="flex items-center justify-center  w-full  bg-[#FFFBF5] py-8 px-6 rounded-2xl">

                <div className="w-full max-w-md ">


                    <div className="space-y-1">
                        <div className="flex justify-between items-center"><p className="text-lg text-orange-500 font-semibold">REGISTER</p>
                            <Link href={'/'} className="bg-orange-500 w-8 flex justify-center items-center h-8 rounded-full hover:scale-105 hover:border border-gray-700">
                                <FaHome />
                            </Link></div>
                        <h1 className="text-2xl font-bold mt-1">Create an account</h1>
                        <p className="text-gray-500 text-sm mb-6">
                            Start shopping summer deals today.
                        </p>
                    </div>


                    <RegisterForm></RegisterForm>


                    <RegisterButton></RegisterButton>


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