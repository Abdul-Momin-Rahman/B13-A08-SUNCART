import React from 'react';

const MainLoading = () => {
    return (
        <div className="min-h-screen bg-[#FFFBF5] flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full border-[3px] border-[#FAC775] border-t-[#EF9F27] animate-spin" />
            <p className="text-[11px] uppercase tracking-widest font-semibold text-[#888780]">
                Loading...
            </p>
        </div>
    );
};

export default MainLoading;