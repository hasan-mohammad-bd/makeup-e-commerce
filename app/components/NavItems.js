import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";

const NavItems = async () => {
  const settings = await fetchData({ api: "settings", revalidate: 60 });
  const headerPages = settings?.data?.header_page;

  return (
    <>
      <div className="header-left flex justify-between items-center gap-4">
        <Link href="/" className="logo">
          <Image
            src={settings?.data?.logo}
            alt={settings?.data?.name}
            width={200}
            height={48}
          />
        </Link>
        <div className="nav-menu">
          {Object.keys(headerPages).map((key) => (
            <Link key={key} href={headerPages[key]}>
              {key}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavItems;
