#!/usr/bin/env zsh

dfx deploy template_backend
dfx deploy bapp_storage
dfx deploy template_frontend
dfx deploy bapp_marketplace
dfx deploy wall3
dfx deps deploy
dfx deps init internet_identity --argument null
./deploy_icp_ledger_canister.zsh