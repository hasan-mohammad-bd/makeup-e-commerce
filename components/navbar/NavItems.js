import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";

const NavItems = async () => {
  const { data: settings = {} } = await fetchData({ api: "settings" });
  const headerPages = settings?.header_page;

  return (
    <>
      <div className="header-left flex justify-between items-center gap-4">
        <Link href="/" className="logo">
          <Image
            src={settings?.logo}
            alt={settings?.name}
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
