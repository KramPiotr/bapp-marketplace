import NextImage from "next/image";
import Link from "next/link";

function Image({ blockData }) {
  const img = blockData?.content?.split("|")?.[0]?.split("img:")[1];
  const alt = blockData?.content?.split("|")?.[1]?.split("alt:")[1];
  const link = blockData?.content?.split("|")?.[2]?.split("link:")[1];

  const isBase64 = (str) => {
    return str?.startsWith("data:");
  };

  const isUrl = (str) => {
    return (
      str?.startsWith("http://") ||
      str?.startsWith("https://") ||
      //TODO remove this placeholder maybe
      str?.startsWith("/")
    );
  };

  const imageElement = img ? (
    isUrl(img) ? (
      <NextImage
        src={img}
        alt={alt ?? "Block image"}
        className="h-full w-full"
        width={40}
        height={40}
      />
    ) : isBase64(img) ? (
      <img src={img} alt={alt ?? "Block image"} className="h-full w-full" />
    ) : null
  ) : null;

  return (
    <>
      {link ? (
        <Link href={link} target="_blank">
          <a>{imageElement}</a>
        </Link>
      ) : (
        imageElement
      )}
    </>
  );
}

export default Image;
