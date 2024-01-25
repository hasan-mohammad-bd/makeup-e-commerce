import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function SocialIcon({
  href,
  icon,
  name,
  linkClass,
  iconClass,
  ...props
}) {
  return (
    <Link
      target="_blank"
      href={href || "/"}
      className={twMerge("inline", linkClass)}
      {...props}
    >
      {icon}
    </Link>
  );
}
