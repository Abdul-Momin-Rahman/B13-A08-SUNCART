import ProfileClientComponent from "@/components/Profile/ProfileClientComponent";


export const metadata = {
    title: "SunCart | Profile",
    description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};


const MyProfilePage = () => {

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


                <ProfileClientComponent></ProfileClientComponent>

            </div>
        </div>
    );
}

export default MyProfilePage;