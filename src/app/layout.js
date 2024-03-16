import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercuriy",
  description: "Garden community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
