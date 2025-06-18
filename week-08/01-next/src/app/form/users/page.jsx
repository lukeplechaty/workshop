import { db } from "@/utils/dbConnection";
export default async function Users() {
  const query = await db.query(`SELECT * FROM usersets`);
  const users = query.rows;
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.firstname}</h2>
          <p>{user.lastname}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}
