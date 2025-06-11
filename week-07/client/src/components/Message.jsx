import { useSearchParams } from "react-router";

export default function Message() {
  const [searchParams] = useSearchParams();
  const msg = searchParams.get("msg");
  return (
    <>
      <h1>message</h1>
      <p>{msg}</p>
    </>
  );
}
