import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default async function Fast() {
  return (
    <>
      <h1>this is fast</h1>
      <Suspense fallback={<p className="text-green-400">Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </>
  );
}
