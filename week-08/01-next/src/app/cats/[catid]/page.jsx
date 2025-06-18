import { db } from "@/utils/dbConnection";
export default async function Cat({ params }) {
  const props = await params;
  const query = await db.query(`SELECT * FROM cats WHERE id=$1`, [props.catid]);
  const cat = query.rows[0];
  return (
    <>
      <h1>Cat ID: {cat.id}</h1>
      <h2>Name: {cat.name}</h2>
      <p>Age: {cat.age}</p>
      <p>Colour: {cat.colour}</p>
    </>
  );
}
