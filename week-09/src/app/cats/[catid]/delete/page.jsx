import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function DeleteCat({ params }) {
  const props = await params;
  async function handle(params) {
    "use server";
    await db.query(`DELETE FROM cats WHERE id=$1`, [props.catid]);
    revalidatePath("/cats");
    redirect("/cats");
  }
  return (
    <form action={handle}>
      <button type="submit">Delete</button>
    </form>
  );
}
