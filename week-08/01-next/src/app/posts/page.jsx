import Link from "next/link";

export const metadata = {
  title: "My App - Posts",
  description: "data about posts",
};

export default async function Posts({ searchParams }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const query = await searchParams;
  if (query.sort === "asc")
    posts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  else if (query.sort === "desc")
    posts.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  else if (query.sort === "rev") posts.reverse();

  return (
    <>
      <h1>Posts</h1>
      <Link href={"?sort=asc"}>Sort ASC</Link>
      <Link href={"?sort=desc"}>Sort DESC</Link>
      <Link href={"?sort=rev"}>Sort REV</Link>
      <Link href={"/posts"}>Sort reset</Link>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </>
  );
}
