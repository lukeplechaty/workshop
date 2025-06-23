import Header from "@/components/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
