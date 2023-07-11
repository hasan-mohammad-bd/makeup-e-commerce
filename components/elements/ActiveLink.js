"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
};

export default ActiveLink;
