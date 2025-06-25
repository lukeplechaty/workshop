import { db } from "@/utils/dbConnection";
import { notFound } from "next/navigation";
import Link from "next/link";
export default async function Cat({ params }) {
  const props = await params;
  const query = await db.query(`SELECT * FROM cats WHERE id=$1`, [props.catid]);
  if (!query.rows.length > 0) notFound();
  const cat = query.rows[0];
  return (
    <>
      <h1>Cat ID: {cat.id}</h1>
      <h2>Name: {cat.name}</h2>
      <p>Age: {cat.age}</p>
      <p>Colour: {cat.colour}</p>

      <Link href={`/cats/${props.catid}/update`}>
        <p>Update</p>
      </Link>
      <Link href={`/cats/${props.catid}/delete`}>
        <p>Delete</p>
      </Link>
    </>
  );
}
