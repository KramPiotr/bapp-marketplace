#!/usr/bin/env zsh

dfx generate

./propagate_backend_updates.zsh "bapp_storage" "bapp-marketplace" 
./propagate_typescript_backend_updates.zsh "bapp_storage" "bapp-marketplace" 
./propagate_backend_updates.zsh "bapp_storage" "wall3"