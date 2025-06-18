import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default function form() {
  async function handlesave(params) {
    "use server";
    const firstname = params.get("firstname");
    const lastname = params.get("lastname");
    const email = params.get("email");
    await db.query(
      `INSERT INTO usersets (firstname, lastname, email) VALUES ($1, $2, $3)`,
      [firstname, lastname, email]
    );
    revalidatePath("/form/users");
    redirect("/form/users");
  }
  return (
    <form action={handlesave}>
      <fieldset>
        <legend>add user</legend>
        <label htmlFor="firstname">first name:</label>
        <input id="firstname" name="firstname" type="text" required />
        <label htmlFor="lastname">last name:</label>
        <input id="lastname" name="lastname" type="text" required />
        <label htmlFor="email">email:</label>
        <input id="email" name="email" type="email" required />
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
}
