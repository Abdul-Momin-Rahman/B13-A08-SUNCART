import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const poppins = Poppins({
  variable : "--font-poppins",
  subsets : ["latin"],
  weight : ['100','200','300','400','500','600','700','800','900']
})



export const metadata = {
  title: "SunCart | Summer Essentials Store",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme = "suncart"
      className={`h-full antialiased poppins ${poppins.className}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
