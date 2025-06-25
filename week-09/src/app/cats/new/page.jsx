import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default function NewCat() {
  async function handle(params) {
    "use server";
    const name = params.get("name");
    const age = params.get("age");
    const colour = params.get("colour");
    await db.query(`INSERT INTO cats (name, age, colour) VALUES ($1, $2, $3)`, [
      name,
      age,
      colour,
    ]);
    revalidatePath("/cats");
    redirect("/cats");
  }
  return (
    <form action={handle}>
      <fieldset>
        <legend>add cat</legend>
        <label htmlFor="name">name:</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="age">age:</label>
        <input id="age" name="age" type="number" required />
        <label htmlFor="colour">colour:</label>
        <input id="colour" name="colour" type="text" required />
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
}
