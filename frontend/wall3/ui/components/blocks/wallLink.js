import Link from "next/link";
import Image from "next/image";

function WallLink({ blockData }) {

  const id = blockData?.content?.split("id:")?.[1];

  return (
    <Link
      href={`/${id}` ?? "/"}
      aria-label={`Go to wall ${id ?? "home"}`}
      className="flex h-full w-full items-center justify-center border-gray-700 cursor-pointer"
    >
      <Image
        src={"/link.png"}
        alt="Wall link"
        width={15}
        height={15}
        // className="opacity-70"
      />
    </Link>
  );
}

export default WallLink;
