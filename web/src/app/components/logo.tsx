import React, { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <div className="h-10 w-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={85} // 图片宽度
          height={85} // 图片高度
        />
      </div>
      <div className="text-center font-medium text-2xl md:text-3xl text-zinc-950 relative text-nowrap">
        Cursor Search
      </div>
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
