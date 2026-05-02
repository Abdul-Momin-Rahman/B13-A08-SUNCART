export default function ProductsLoading() {
    return (
        <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1A1108] px-4 py-10">
            <div className="max-w-7xl mx-auto">

                {/* Page heading skeleton */}
                <div className="mb-10 flex flex-col items-center gap-3">
                    <div className="h-3 w-24 rounded-full bg-[#EF9F27]/30 animate-pulse" />
                    <div className="h-8 w-52 rounded-xl bg-[#FAC775]/30 dark:bg-[#3A2A0A] animate-pulse" />
                    <div className="h-3 w-72 rounded-full bg-[#FAC775]/20 dark:bg-[#2C1E06] animate-pulse" />
                </div>

                {/* Filter / sort bar skeleton */}
                <div className="flex items-center justify-between mb-8 gap-4">
                    <div className="flex gap-2">
                        {[80, 96, 72].map((w, i) => (
                            <div
                                key={i}
                                className="h-8 rounded-full bg-[#FAC775]/30 dark:bg-[#2C1E06] animate-pulse"
                                style={{ width: `${w}px`, animationDelay: `${i * 0.1}s` }}
                            />
                        ))}
                    </div>
                    <div className="h-8 w-32 rounded-full bg-[#FAC775]/20 dark:bg-[#2C1E06] animate-pulse" />
                </div>

                {/* Product cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-[#FFFBF5] dark:bg-[#2C1E06] border border-[#FAC775]/50 dark:border-[#3A2A0A] rounded-2xl overflow-hidden"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            {/* Image area */}
                            <div className="relative h-52 bg-[#FAC775]/20 dark:bg-[#3A2A0A] animate-pulse">
                                {/* Shimmer overlay */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#EF9F27]/10 to-transparent animate-[shimmer_1.5s_infinite]" />
                                {/* Placeholder sun icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="opacity-20"
                                    >
                                        <circle cx="12" cy="12" r="5" fill="#EF9F27" />
                                        <line x1="12" y1="2" x2="12" y2="5" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="12" y1="19" x2="12" y2="22" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="2" y1="12" x2="5" y2="12" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="19" y1="12" x2="22" y2="12" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {/* Category badge skeleton */}
                                <div className="absolute top-3 left-3 h-5 w-16 rounded-full bg-[#EF9F27]/20 animate-pulse" />
                            </div>

                            {/* Card body */}
                            <div className="p-4 flex flex-col gap-3">
                                {/* Brand */}
                                <div className="h-3 w-16 rounded-full bg-[#FAC775]/30 dark:bg-[#3A2A0A] animate-pulse" />

                                {/* Product name */}
                                <div className="h-4 w-3/4 rounded-lg bg-[#FAC775]/40 dark:bg-[#3A2A0A] animate-pulse" />

                                {/* Rating row */}
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, s) => (
                                            <div
                                                key={s}
                                                className="w-3 h-3 rounded-sm bg-[#EF9F27]/25 animate-pulse"
                                                style={{ animationDelay: `${s * 0.05}s` }}
                                            />
                                        ))}
                                    </div>
                                    <div className="h-3 w-8 rounded-full bg-[#FAC775]/20 dark:bg-[#3A2A0A] animate-pulse" />
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-[#FAC775]/30 dark:bg-[#3A2A0A]" />

                                {/* Price + button row */}
                                <div className="flex items-center justify-between">
                                    <div className="h-6 w-14 rounded-lg bg-[#EF9F27]/25 animate-pulse" />
                                    <div className="h-8 w-28 rounded-full bg-[#EF9F27]/20 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}