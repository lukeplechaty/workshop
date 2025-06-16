export default async function PostPage({ params }) {
  const props = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.id}`
  );
  const post = await res.json();
  return (
    <>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
}
