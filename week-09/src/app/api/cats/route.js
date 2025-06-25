import { db } from "@/utils/dbConnection";
export async function GET() {
  const query = await db.query(`SELECT * FROM cats ORDER BY id ASC`);
  const cats = query.rows;
  return new Response(JSON.stringify(cats));
}
