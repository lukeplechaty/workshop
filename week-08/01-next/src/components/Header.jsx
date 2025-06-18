"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/Links";
import style from "@/components/Header.module.css";
export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex justify-center gap-[10px]">
        {links.map((link) => (
          <Link
            className={
              pathname === link.href ? style.selected : style.unselected
            }
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
