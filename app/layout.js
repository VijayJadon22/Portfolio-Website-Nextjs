import { Outfit as OutfitFont, Ovo as OvoFont, Open_Sans, Poppins, Inter, Roboto, Lato } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = OvoFont({
  subsets: ["latin"], weight: ["400"]
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add or adjust weights as needed
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add more if needed
  variable: "--font-poppins", // Optional: for Tailwind or global CSS
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add more if needed
  variable: "--font-inter", // Optional: for Tailwind or global CSS
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add more weights if needed
  style: ["normal", "italic"],   // Optional: include italic styles
  variable: "--font-roboto",     // Optional: for Tailwind or global CSS
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Add more weights if needed
  style: ["normal", "italic"],   // Optional: include italic styles
  variable: "--font-lato",       // Optional: for Tailwind or global CSS
});






export const metadata = {
  title: "Portfolio - Vijay",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
