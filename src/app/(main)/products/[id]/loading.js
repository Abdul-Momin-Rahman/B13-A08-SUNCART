import React from 'react';

const DynamicProductLoading = () => {
    return (
        <div className="bg-[#FFFBF5] border border-[#FAC775]/50 rounded-2xl overflow-hidden max-w-4xl mx-auto mt-10">
            <div className="flex flex-col lg:flex-row">
                
                <div className="lg:w-105 shrink-0 h-64 lg:h-auto bg-[#FAC775]/20 animate-pulse" />
                
                <div className="flex-1 p-8 flex flex-col gap-4">
                    <div className="h-5 w-20 rounded-full bg-[#EF9F27]/20 animate-pulse" />
                    <div className="h-7 w-2/3 rounded-xl bg-[#FAC775]/40 animate-pulse" />
                    <div className="h-3 w-24 rounded-full bg-[#FAC775]/20 animate-pulse" />

                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="w-3.5 h-3.5 rounded-sm bg-[#EF9F27]/25 animate-pulse" />
                        ))}
                    </div>
                    
                    <div className="w-full h-px bg-[#FAC775]/30" />
                    <div className="h-3 w-full rounded-full bg-[#FAC775]/20 animate-pulse" />
                    <div className="h-3 w-4/5 rounded-full bg-[#FAC775]/20 animate-pulse" />
                    <div className="h-3 w-20 rounded-full bg-[#0F6E56]/20 animate-pulse" />
                    <div className="flex items-center justify-between mt-auto pt-2">
                        <div className="h-8 w-16 rounded-xl bg-[#EF9F27]/30 animate-pulse" />
                        <div className="h-11 w-32 rounded-full bg-[#EF9F27]/20 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicProductLoading;