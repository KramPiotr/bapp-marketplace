"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function Available({ blockData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleBlockClick() {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );

    currentParams.set("editBlock", blockData.id);

    router.push(`${pathname}?${currentParams.toString()}`);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleBlockClick}
        className="flex h-full w-full cursor-pointer items-center justify-center rounded-none bg-gray-800"
      >
        <Image
          className="opacity-70"
          src="/plus.png"
          alt="available"
          width={15}
          height={15}
        />
      </button>
    </>
  );
}

export default Available;
