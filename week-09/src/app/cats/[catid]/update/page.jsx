import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function UpdateCat({ params }) {
  const props = await params;
  const query = await db.query(`SELECT * FROM cats WHERE id=$1`, [props.catid]);
  const cat = query.rows[0];
  async function handle(params) {
    "use server";
    const name = params.get("name");
    const age = params.get("age");
    const colour = params.get("colour");
    await db.query(`UPDATE cats SET name=$1, age=$2, colour=$3 WHERE id=$4`, [
      name,
      age,
      colour,
      props.catid,
    ]);
    revalidatePath("/cats");
    revalidatePath(`/cats/${props.catid}`);
    redirect("/cats");
  }
  return (
    <form action={handle}>
      <fieldset>
        <legend>Update cat</legend>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={cat.name}
          required
        />
        <label htmlFor="age">age: </label>
        <input
          id="age"
          name="age"
          type="number"
          defaultValue={cat.age}
          required
        />
        <label htmlFor="colour">colour: </label>
        <input
          id="colour"
          name="colour"
          type="text"
          defaultValue={cat.colour}
          required
        />
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
}
