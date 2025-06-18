export async function generateMetadata({ params }) {
  const props = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.id}`
  );
  const post = await res.json();
  return {
    title: `My App - Post ${post.id}`,
    description: `this is Post ${post.id}`,
  };
}

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
