export default async function Posts({ params }) {
  const props = await params;
  console.log(props.id);
  return (
    <>
      <h1>
        Posts {props.id} {props.name}
      </h1>
    </>
  );
}
