async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default async function SlowComponent() {
  await delay(5000);
  return (
    <>
      <p className="text-orange-400">{`I'm very slow to load`}</p>
    </>
  );
}
