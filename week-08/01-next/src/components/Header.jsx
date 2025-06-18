import Link from "next/link";
export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/cats"}>Cats</Link>
        <Link href={"/form"}>new user form</Link>
      </nav>
    </header>
  );
}
