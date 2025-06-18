import Button from "@/components/Button";
import Image from "next/image";
import mycats from "@/../public/my-cats.jpg";
export default function Home() {
  return (
    <div>
      <h1>hi all</h1>
      <Button />
      <Image src={mycats} alt="my cats" height={300} />
      <Image
        src={"https://evek.one/4432-home_default/test.jpg"}
        alt="test"
        height={300}
        width={300}
      />
    </div>
  );
}
