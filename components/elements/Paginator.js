"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * The `Pagination` function is a React component that renders a pagination UI based on the provided
 * meta data from laravel api and allows users to navigate between pages.
 * @params paginationItems - sets the limit for paginate items to be shown
 */
export default function Paginator({ meta, paginateItems }) {
  let pathname = usePathname();
  if (pathname === "/") pathname = "/products"; //deactivate if you want pagination in home page
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const links = meta?.links || [];
  if (Array.isArray(links) && links.length) {
    links.shift();
    links.pop();
  }

  const currentPage = meta.current_page;
  const lastPage = meta.last_page;
  const paginationItemsToShow = paginateItems || 3;
  const firstDotAfterPage = paginationItemsToShow + 1;

  return (
    <div className="flex gap-2 items-center">
      {/* Previous Page  */}
      {currentPage > 1 ? (
        <Link
          className={`p-2 rounded-lg border border-slate-200 text-slate-600 px-6`}
          href={pathname + "?" + createQueryString("page", currentPage - 1)}
        >
          <AiOutlineLeft />
        </Link>
      ) : (
        <span
          className={`p-2 rounded-lg border border-slate-200 text-slate-300 px-6`}
        >
          <AiOutlineLeft />
        </span>
      )}
      {/* Pages  */}
      {links.map((link, index) => {
        if (
          ((index === lastPage - 2 &&
            currentPage !== lastPage - 1 &&
            currentPage !== lastPage) || //showing three dots before last item
            (index === 1 && currentPage > firstDotAfterPage)) && // showing three dots after first item
          lastPage > paginationItemsToShow + 1
        ) {
          // Show "..." after page 1 when on the last page
          return (
            <span
              key={link.label}
              className="p-2 min-w-[36px] text-center rounded-lg border border-slate-200 text-slate-600"
            >
              ...
            </span>
          );
        } else if (
          (currentPage < paginationItemsToShow + 1 &&
            index < paginationItemsToShow) || //initial pages
          (index < currentPage &&
            index >= currentPage - paginationItemsToShow) || //after page 3
          (currentPage > firstDotAfterPage && index === 0) || //showing first page
          (index === lastPage - 1 && index > paginationItemsToShow) //showing last page
        ) {
          return (
            <Link
              className={`p-2 min-w-[36px] text-center rounded-lg border ${
                link.active
                  ? "border-primary text-primary"
                  : "border-slate-200 text-slate-600"
              }`}
              key={link.label}
              href={pathname + "?" + createQueryString("page", link.label)}
            >
              {link.label}
            </Link>
          );
        } else {
          return null; // Hide other links
        }
      })}
      {/* Next Page  */}
      {currentPage < lastPage ? (
        <Link
          className={`p-2 rounded-lg border border-slate-200 text-slate-600 px-6`}
          href={pathname + "?" + createQueryString("page", currentPage + 1)}
        >
          <AiOutlineRight />
        </Link>
      ) : (
        <span
          className={`p-2 rounded-lg border border-slate-200 text-slate-300 px-6`}
        >
          <AiOutlineRight />
        </span>
      )}
    </div>
  );
}
