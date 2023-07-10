import React from "react";
import Image from "next/image";

function NoWishList(props) {
  return (
    <div className="flex-center mt-28">
      <div className="flex-center flex-col jus h-[25rem] w-[25rem] rounded-2xl border border-slate-300">
        <Image
          src={"/assets/images/empty.png"}
          height={216}
          width={216}
          alt="not-item"
          sizes="100vh"
        />
        <h3 className="font-bold text-slate-700">কোন প্রডাক্ট নেই</h3>
      </div>
    </div>
  );
}

export default NoWishList;
