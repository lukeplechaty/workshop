export default function Break() {
  const run = Math.floor(Math.random() * 10);
  if (run < 4) throw new Error("i go off some times");
  return (
    <>
      <h2>i show some of the times</h2>
    </>
  );
}
