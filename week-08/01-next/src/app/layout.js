import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My App",
  description: "Edit by Luke Plechaty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/posts"}>posts</Link>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
