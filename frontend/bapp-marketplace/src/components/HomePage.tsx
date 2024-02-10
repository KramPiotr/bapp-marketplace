import { BappGrid, Navigation } from "components";
import LoggedOut from "components/LoggedOut";
import { useAuth } from "utils/useAuthClient";

const bApps = [
  {
    id: "text",
    title: "Text",
    description: "Add text to your block",
    image: "/blocks/text.svg",
  },
  {
    id: "image",
    title: "Image",
    description: "Add an image to your block",
    image: "/blocks/image.svg",
  },
  {
    id: "nft-slider",
    title: "NFT Slider",
    description: "Display your NFTs on a slider",
    image: "/blocks/slider.svg",
  },
  {
    id: "nft-collection-creator",
    title: "Create and distribute your NFT collection",
    description:
      "Create, distribute and monetize your NFT collection with our no-code IC solution. Requires an internet identity",
    image: "/blocks/nft_minter.png",
    customSize: 90,
    url: "https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/",
  },
];

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  return (
    <Navigation>
    <div className="container flex flex-col p-4">
      {isAuthenticated ? (
        <>
          <h1 className="text-gray-00 text-base tracking-tight">All bApps</h1>
          <BappGrid bApps={bApps} />
        </>
      ) : (
        <LoggedOut />
      )}
    </div></Navigation>
  );
}
