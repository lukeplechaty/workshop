import { db } from "@/utils/dbConnection";
import Link from "next/link";
export default async function Cats() {
  const query = await db.query(`SELECT * FROM cats`);
  const cats = query.rows;
  return (
    <>
      <h1>Cats</h1>
      {cats.map((cat) => (
        <div key={cat.id}>
          <Link href={`/cats/${cat.id}`}>
            <h2>{cat.name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
