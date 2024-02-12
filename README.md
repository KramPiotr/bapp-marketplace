# NFT bApp - a working end to end bApp stored on ICP

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/ - creating an NFT collection

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/mint?id=826798517 - minting an NFT

* Firstly, a user is gonna purchase the bApp on the marketplace
* Secondly, a user is gonna get access to fill in the required data to create an NFT collection
* Upon filling in the data he's gonna receive an NFT collection ID
* Currently there is no charge for creating the NFT collection and minting the NFT (all cycles (gas) is paid by the backend canister (smart contract)) so you're welcome to visit one of the links above to try the bApp yourself.

## Running instructions
1. `dfx start --background`
2. `cd frontend/template && npm install && npm run build && cd ../..`
3. `./deploy.zsh`

## Instructions after updating backend
1. `dfx generate`
2. 

Consider renaming bapp to icapp or something


URLs:
  Frontend canister via browser
    bapp_marketplace: https://koirx-4qaaa-aaaal-adtca-cai.icp0.io/
    template_frontend: https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/
  Backend canister via Candid interface:
    bapp_storage: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=kjjxd-riaaa-aaaal-adtcq-cai
    internet_identity: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=rdmx6-jaaaa-aaaaa-aaadq-cai
    template_backend: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=wkeuc-2qaaa-aaaal-adohq-cai