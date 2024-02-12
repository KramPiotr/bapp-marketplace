"use client";

import Image from "next/image";

function NFTSlider({ blockData }) {
  return (
    <>
      <button
        type="button"
        className="flex h-full w-full cursor-pointer items-center justify-center rounded-none bg-gray-800"
      >
        <Image
          className="opacity-70"
          src="/wall3.jpg"
          alt="Wall-3 logo"
          width={15}
          height={15}
        />
      </button>
    </>
  );
}

export default NFTSlider;
