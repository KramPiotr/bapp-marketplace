# Wall-3 - the go-to page in the web3 world

Wall3 – the go-to page in the web3 world.
Whenever a newcomer wants to learn about web3 they quickly realise that the world of web3 is chaotic and has a very steep learning curve. Here comes Wall-3, the first of its kind fully decentralized home page for the web3 world. Its mission is to drive web3 adoption, categorize and organize knowledge about the web3 world.
Wall-3 is a big dashboard of tiles which are decentalized, programmable blocks, created and rented out by web3 enthusiasts for web3 enthusiast and in the future governed by a DAO. 
So far in the prototype I implemented a couple of types of blocks:
-	A text block
-	An image block
-	A link block
-	And a more advanced NFT minter block
The blocks can form groups. The link blocks will lead to thematic subpages - read tree-like structure of web3 knowledge.
I created a block App marketplace as well.
IC is a perfect fit for Wall-3 because of its wallet-free experience, storage capacity and web app integration.

## Links

Currently there is no charge for interacting with any of the above applications so you're welcome to try all of the features

### Front-end

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/ - creating an NFT collection

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/mint?id=826798517 - minting an NFT

https://koirx-4qaaa-aaaal-adtca-cai.icp0.io/ - bApp marketplace

unavailable at the moment because of lack of cycles, will be updated soon - Wall-3

### Back-end

https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=wkeuc-2qaaa-aaaal-adohq-cai - NFT app backend

https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=kjjxd-riaaa-aaaal-adtcq-cai - Wall-3 storage backend

## Running instructions

1. `dfx start --background`
2. `cd frontend/<app> && npm install && npm run build && cd ../..`
3. `./deploy.zsh`

## Instructions after updating backend

1. `./propagate_all_backend_updates.zsh` - make sure all of the backend and frontend dependencies that you updated are listed there

## YouTube walkthrough

https://youtu.be/Yq8anqlLUzk

## Inspirations

- the million dollar page
- google 
- wikipedia

## Plan for the future

- clean-up codebase
- add governing DAO
- add renting system
- add bApp voting system
- create more template bApps
- add subtree functionalities
- create and calculate the financial model of the application

## Code documentation