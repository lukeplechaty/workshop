import { db } from "@/utils/dbConnection";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaCat } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
export default async function Cats() {
  const query = await db.query(`SELECT * FROM cats`);
  const cats = query.rows;
  return (
    <>
      <h1 className="flex justify-center">
        <GiCat />
        Cats
        <FaCat />
      </h1>
      {cats.map((cat) => (
        <div key={cat.id} className="flex justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/cats/${cat.id}`}>
                <h2>{cat.name}</h2>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>this is 1 of my cats named {cat.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
    </>
  );
}
