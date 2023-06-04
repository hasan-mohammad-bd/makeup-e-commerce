import Link from "next/link";
import Image from "next/image";

async function fetchSettings() {
  const res = await fetch(`${process.env.API_BASE_URL}/settings`, {
    next: { revalidate: 60 },
    headers: {
      AmsPublickey: process.env.AmsPublickey,
      AmsPrivateKey: process.env.AmsPrivateKey,
    },
  });
  const settings = await res.json();

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return settings;
}
const NavItems = async () => {
  const settings = await fetchSettings();
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
