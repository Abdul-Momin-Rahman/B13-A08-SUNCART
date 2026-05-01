import { CgCheck } from "react-icons/cg";
import { FaAnchor } from "react-icons/fa";
import { MdFaceRetouchingNatural, MdUmbrella } from "react-icons/md";
import { SiAqua } from "react-icons/si";

const brands = [
  {
    id: 1,
    name: "SunShade",
    category: "Eyewear",
    badge: "UV400 Certified",
    badgeBg: "bg-[#FAEEDA] dark:bg-[#412402]",
    badgeText: "text-[#BA7517] dark:text-[#FAC775]",
    logoBg: "bg-[#FAEEDA] dark:bg-[#412402]",
    icon: <MdUmbrella/>
  },
  {
    id: 2,
    name: "GlowSkin",
    category: "Skincare",
    badge: "Dermatologist Approved",
    badgeBg: "bg-[#E1F5EE] dark:bg-[#04342C]",
    badgeText: "text-[#0F6E56] dark:text-[#9FE1CB]",
    logoBg: "bg-[#E1F5EE] dark:bg-[#04342C]",
    icon: <MdFaceRetouchingNatural/>
  },
  {
    id: 3,
    name: "CoastalWear",
    category: "Beachwear",
    badge: "New Collection",
    badgeBg: "bg-[#E6F1FB] dark:bg-[#042C53]",
    badgeText: "text-[#185FA5] dark:text-[#B5D4F4]",
    logoBg: "bg-[#E6F1FB] dark:bg-[#042C53]",
    icon: <FaAnchor/>
  },
  {
    id: 4,
    name: "AquaFresh",
    category: "Hydration & Care",
    badge: "Best Seller",
    badgeBg: "bg-[#FAECE7] dark:bg-[#4A1B0C]",
    badgeText: "text-[#993C1D] dark:text-[#F5C4B3]",
    logoBg: "bg-[#FAECE7] dark:bg-[#4A1B0C]",
    icon: <SiAqua/>
  },
];

export default function TopBrands() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">

        
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#FAC775] to-transparent mb-16" />

        
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#EF9F27] mb-2">
            Our Partners
          </span>
          <h2
            className="text-4xl font-bold text-[#1A1108]  mb-3"
            
          >
            Top Brands
          </h2>
          <p className="text-[#5F5E5A]  text-sm max-w-md mx-auto leading-relaxed">
            Trusted names we carry exclusively in our summer collection.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col items-center text-center bg-white  border border-[#FAC775]  rounded-2xl px-5 py-8 hover:border-[#EF9F27] hover:shadow-[0_0_0_3px_#EF9F2715] transition-all duration-200 cursor-pointer"
            >
              
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 ${brand.logoBg}`}
              >
                {brand.icon}
              </div>

              
              <h3 className="text-[15px] font-semibold text-[#1A1108]  mb-1">
                {brand.name}
              </h3>

              
              <p className="text-[12px] text-[#888780] mb-3">{brand.category}</p>

              
              <span
                className={`text-[10px] font-semibold px-3 py-1 rounded-full ${brand.badgeBg} ${brand.badgeText}`}
              >
                {brand.badge}
              </span>
            </div>
          ))}
        </div>

       
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">

          {["Free Shipping on Orders ৳1500+", "30-Day Returns", "100% Authentic Products", "Secure Checkout"].map(
            (text) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EF9F27] flex items-center justify-center shrink-0">
                  <CgCheck/>
                </div>
                <span className="text-[12px] text-[#5F5E5A] ">{text}</span>
              </div>
            )
          )}
        </div>

        
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#FAC775] to-transparent mt-16" />
      </div>
    </section>
  );
}