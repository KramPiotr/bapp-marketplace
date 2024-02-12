import { makeBAppStorageActor } from "utils/actorLocator";

export default async function submit(blockID: string, collectionID: string) {
  const bappStorageActor = makeBAppStorageActor();
  const result = await bappStorageActor.storeBlock(blockID, collectionID);
  console.log(result);

  const wall3 =
    process.env.NEXT_PUBLIC_WALL3_CANISTER_ID ?? "jz25f-niaaa-aaaal-adtkq-cai";
  const url =
    process.env.DFX_NETWORK === "ic"
      ? `https://${wall3}.icp0.io/`
      : `http://127.0.0.1:4943/?canisterId=${wall3}`;

  return url;
}
