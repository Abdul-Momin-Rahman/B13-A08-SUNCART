import React from 'react';

const ProductLoading = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-[#FFFBF5] border border-[#FAC775]/50 rounded-2xl overflow-hidden">
                    
                    <div className="h-52 bg-[#FAC775]/20 animate-pulse" />
                    
                    <div className="p-4 flex flex-col gap-3">
                        <div className="h-4 w-3/4 rounded-full bg-[#FAC775]/40 animate-pulse" />
                        <div className="flex items-center justify-between">
                            <div className="h-3 w-24 rounded-full bg-[#FAC775]/30 animate-pulse" />
                            <div className="h-4 w-10 rounded-full bg-[#EF9F27]/30 animate-pulse" />
                        </div>
                        <div className="h-10.5 w-full rounded-full bg-[#EF9F27]/20 animate-pulse mt-1" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductLoading;