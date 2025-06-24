import Link from "next/link";

export default function notfound() {
  return (
    <>
      <h1>404 not found</h1>
      <p>no cat hear</p>
      <Link href={"/"}>Return Home</Link>
    </>
  );
}
