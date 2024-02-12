# Wall-3 - the go-to page in the web3 world

Wall3 – the go-to page in the web3 world.

Whenever a newcomer wants to learn about web3 they quickly realize that the world of web3 is chaotic, decentalized and has a very steep learning curve. There is so many solutions, projects and terminologies that are niche, keep low-key profile and are hard to find information about.

Here comes Wall-3, the first of its kind fully decentralized home page for the web3 world. Its mission is to drive web3 adoption, categorize and organize knowledge about the web3 world.

Wall-3 is a big dashboard of block apps (bApps) which are decentalized, programmable blocks, created and rented out by web3 enthusiasts to web3 enthusiast and in the future governed by a DAO (to remove malicious actors and keep the content accurate). 

So far in the prototype I implemented a couple of types of blocks:
-	A text block
-	An image block
-	A link block - leading to subpage of Wall-3
-	And a more advanced NFT minter block - an app that serves as a template and an example of how to develop bApps

However, in the future the blocks (and groups of blocks) could be of various shapes and forms, like:
- a DEX UI
- a bridge UI
- wallet UI
- X (Twitter) summaries
- Telegram UI
- calendar for web3 events
- maps of the web3 world
- etc.

The blocks can form groups. This means that more important concepts can take up more tiles than the less important ones. This is a great tool to quickly visualize the state of the web3 world (e.g. there could be a subpage with market capitalization etc.)

The link blocks will lead to thematic subpages - think tree-like structure of web3 knowledge. For example the main homepage could contain sublinks to "ZK", "Layer 1", "Layer 2" etc., however the governing DAO and people decide.

I created a block App marketplace as well that is used to create and customize the bApps.

IC is a perfect fit for Wall-3 because of:
- **wallet-free experience** - i.e. users much more willing to interact with Wall-3, especially the newcomers, 
- **storage capacity and web app integration** - never before in the history of web3 it was possible to create a site like this that would run in a fully decentralized manner. 
- **ease of integration with different technologies and payment methods** - IC's integration with BTC and ETH and the cross-chain communication abilities of IC set it apart as the most beginner friendly and comprehensive way of renting out and using bApps

## Links

Currently there is no charge for interacting with any of the below applications so you're welcome to try all of the features.

The features that work well and can be tested:
- Open up Wall-3 homepage and take a look around
- Currently the blocks are randomized at each refresh **except the NFT blocks created in the bApp marketplace** - these are saved on the backend, retrieved after each refresh and always in the same position once they are added.
- To test the application  fell free to click on any of the "+" buttons. 
- This will take you to the block app (bApp) marketplace
- In the bApp marketplace click on the NFT app
- This will open up a view to the NFT canister where you can create your own NFT collection.
- Once you created the collection submit it to the Wall-3 storage using the text input below the NFT app
- Clicking on the "Submit & Go Back" button will take you to the Wall-3 homepage once again
- Here, after you wait a couple of seconds for the backend to refresh, you will see the block that you clicked on filled with a text inviting you to mint an NFT with the collection ID that you received earlier.
- When you click on this, the NFT minting page of the NFT app will pop-up where you can mint your custom NFT
- Remember that whatever NFT collection you submit it will stay there so be mindful what is the logo of your NFT collection ;)

### Front-end

https://jz25f-niaaa-aaaal-adtkq-cai.icp0.io/ - Wall-3

https://koirx-4qaaa-aaaal-adtca-cai.icp0.io/ - bApp marketplace

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/ - creating an NFT collection

https://uxz2k-jyaaa-aaaal-adoia-cai.icp0.io/mint?id=826798517 - minting an NFT

### Back-end

https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=kjjxd-riaaa-aaaal-adtcq-cai - Wall-3 storage backend

https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=wkeuc-2qaaa-aaaal-adohq-cai - NFT app backend

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

- **backend/bapp_storage** - code for the Wall-3 storage
- **backend/bapp_storage_prototype** - here I started coding up a bit more advanced approach that stored each bApp as an NFT. I will continue working on that but currently it's not being used
- **backend/template** - here is the back-end code for the NFT app
- **frontend/wall3** - Next.js code of Wall-3
- **frontend/bapp-marketplace** - Next.js code of the bApp marketplace
- **frontend/template** - Next.js code of the NFT app