import ProfileUpdateForm from "@/components/ProfileUpdate/ProfileUpdateForm";



export const metadata = {
    title: "SunCart | Update Profile",
    description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};

const UpdateProfilePage = () => {

    return (
        <div className="min-h-screen bg-[#FFFBF5] py-12 px-4">
            <div className="max-w-xl mx-auto">

                
                <div className="mb-8">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27]">
                        Account
                    </span>
                    <h1
                        className="text-3xl font-bold text-[#1A1108] mt-1"

                    >
                        Update Information
                    </h1>
                    <p className="text-[13px] text-[#888780] mt-1">
                        Change your display name or profile photo.
                    </p>
                </div>

               
                <div className="bg-[#FFFBF5] border border-[#FAC775] rounded-2xl overflow-hidden">

                   
                    <div className="h-20 bg-linear-to-r from-[#1A1108] via-[#2C1E06] to-[#3A2A0A] relative overflow-hidden">
                        <div className="absolute w-40 h-40 rounded-full bg-[#EF9F27] opacity-10 -top-8 -right-8" />
                        <div className="absolute w-24 h-24 rounded-full bg-[#FAC775] opacity-10 -bottom-6 left-16" />
                    </div>



                    <ProfileUpdateForm></ProfileUpdateForm>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;