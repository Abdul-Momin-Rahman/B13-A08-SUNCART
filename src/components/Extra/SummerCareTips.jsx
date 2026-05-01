"use client";

import { CgSun } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { LuGlassWater } from "react-icons/lu";
import { MdEco } from "react-icons/md";

const tips = [
  {
    id: 1,
    title: "Apply SPF Daily",
    desc: "Use SPF 30+ sunscreen every morning, even on cloudy days. Reapply every 2 hours when outdoors.",
    iconBg: "bg-[#FAEEDA]",
    accentBg: "bg-[#EF9F27]",
    icon: <CgSun/>
  },
  {
    id: 2,
    title: "Stay Hydrated",
    desc: "Drink at least 8–10 glasses of water daily. Add lemon or cucumber for an extra refresh boost.",
    iconBg: "bg-[#E6F1FB]",
    accentBg: "bg-[#1e90ff]",
    icon: <LuGlassWater/>
  },
  {
    id: 3,
    title: "Moisturize After Sun",
    desc: "Apply aloe vera or light moisturizer after sun exposure to soothe and restore your skin's moisture.",
    iconBg: "bg-[#E1F5EE]",
    accentBg: "bg-[#1D9E75]",
    icon: <FaDroplet/>
  },
  {
    id: 4,
    title: "Avoid Peak Sun Hours",
    desc: "Stay in the shade between 10am–4pm when UV rays are strongest. Wear a wide-brim hat outside.",
    iconBg: "bg-[#FAECE7]",
    accentBg: "bg-[#D85A30]",
    icon: <FaUmbrellaBeach/>
  },
  {
    id: 5,
    title: "Wear UV Protection",
    desc: "Choose sunglasses with 100% UV400 protection. Look for wraparound frames for full eye coverage.",
    iconBg: "bg-[#EEEDFE]",
    accentBg: "bg-[#7F77DD]",
    icon: <FiShield/>
  },
  {
    id: 6,
    title: "Eat Skin-friendly Foods",
    desc: "Load up on watermelon, berries, and leafy greens. Antioxidants help protect your skin from within.",
    iconBg: "bg-[#FBEAF0]",
    accentBg: "bg-[#D4537E]",
    icon: <MdEco/>
  },
];

export default function SummerCareTips() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-2">
            Tips & Advice
          </span>
          <h2
            className="text-4xl font-bold text-[#1A1108] mb-3"
          >
            Summer Care Tips
          </h2>
          <p className="text-[#5F5E5A]  text-sm max-w-md mx-auto leading-relaxed">
            Stay cool, protected, and glowing all season long with these essential summer tips.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="relative overflow-hidden bg-[#FFFBF5]  border-2 border-[#FAC775]  rounded-2xl p-5 group hover:border-[#EF9F27] transition-colors duration-200"
            >
              
              <div
                className={`absolute top-0 right-0 w-14 h-14 rounded-bl-full opacity-10 ${tip.accentBg}`}
              />

              
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tip.iconBg}`}
              >
                {tip.icon}
              </div>

              
              <h3 className="text-[14px] font-semibold text-[#1A1108]  mb-2">
                {tip.title}
              </h3>
              <p className="text-[13px] text-[#5F5E5A]  leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}