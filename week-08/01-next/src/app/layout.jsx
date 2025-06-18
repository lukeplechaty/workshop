import "./globals.css";
import Header from "@/components/Header";
import { Outfit } from "next/font/google";

const font = Outfit({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "Made by Luke Plechaty",
  openGraph: {
    title: "My App",
    description: "Made by Luke Plechaty",
    type: "website",
    url: "#",
    images: ["image-1"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
