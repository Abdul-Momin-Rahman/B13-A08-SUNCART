
import LoginButton from "@/components/LoginClientComponents/LoginButton";
import LoginForm from "@/components/LoginClientComponents/LoginForm";
import Link from "next/link";
import { FaHome } from "react-icons/fa";


export const metadata = {
  title: "SunCart | Login",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};


export default function LoginPage() {


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




                    <LoginForm></LoginForm>


                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>


                    <LoginButton></LoginButton>

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