"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

const LanguageSelector = ({ locale }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(locale); // Default language
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility state

  const dropdownRef = useRef(null);
  // When the user is on `/en`, this will be `/`
  const pathname = usePathname();
  // const router = useRouter();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "/assets/icons/usa-rounded.png",
    },
    { code: "bn", name: "Bangla", flag: "/assets/icons/ban-rounded.png" },
    { code: "ar", name: "Arabic", flag: "/assets/icons/uae-rounded.png" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-1 font-title bg-transparent box-border px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-gray-50"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Image
          src={languages.find((lang) => lang.code === selectedLanguage).flag}
          alt="Icon"
          width={16}
          height={16}
          sizes="100vh"
        />
        <span className="">
          {languages.find((lang) => lang.code === selectedLanguage).name}
        </span>
        <FiChevronDown className="" />
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-10 left-0 mt-12 bg-white border border-gray-300 rounded-md shadow-lg divide-y divide-gray-200">
          {languages.map((lang) => (
            <li key={lang.code}>
              <Link
                href={pathname}
                className="icon-btn px-4"
                onClick={() => handleLanguageChange(lang.code)}
                locale={lang.code}
              >
                <Image
                  src={lang.flag}
                  alt="Icon"
                  width={16}
                  height={16}
                  sizes="100vh"
                />
                <span className="">{lang.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
