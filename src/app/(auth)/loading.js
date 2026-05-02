

const loading = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#1A1108] via-[#2C1E06] to-[#3A2A0A] flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full border-[3px] border-[#3A2A0A] border-t-[#EF9F27] animate-spin" />
            <p className="text-[11px] uppercase tracking-widest font-semibold text-[#5F5E5A]">
                Loading...
            </p>
        </div>
    );
};

export default loading;