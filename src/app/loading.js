export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-[#1A1108] flex flex-col items-center justify-center gap-6">

      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 bg-[#EF9F27] rounded-full flex items-center justify-center animate-pulse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="#fff" />
            <line x1="12" y1="2" x2="12" y2="5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="19" x2="12" y2="22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="2" y1="12" x2="5" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="19" y1="12" x2="22" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <span
          className="text-2xl font-bold text-[#BA7517] dark:text-[#FAC775]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sun<span className="text-[#EF9F27]">Cart</span>
        </span>
      </div>

      {/* Spinning sun rays */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-[#FAC775]  border-t-[#EF9F27] animate-spin" />
        {/* Inner dot */}
        <div className="w-4 h-4 rounded-full bg-[#EF9F27] opacity-80 animate-pulse" />
      </div>

      {/* Animated dots */}
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-[#EF9F27]"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Label */}
      <p className="text-[12px] uppercase tracking-widest font-semibold text-[#888780]">
        Loading...
      </p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}