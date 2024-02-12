#!/usr/bin/env zsh

if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <source_directory> <target_directory>"
    exit 1
fi

backend_project="$1"
frontend_project="$2"

index_file="frontend/$frontend_project/ui/declarations/$backend_project/index.js"

cp "src/declarations/$backend_project/$backend_project.did.js" "frontend/$frontend_project/ui/declarations/$backend_project/$backend_project.did.js"
cp "src/declarations/$backend_project/index.js" "$index_file"

# Replace process.env.*_CANISTER_ID with process.env.NEXT_PUBLIC_*_CANISTER_ID
sed -i 's/process\.env\.\(.*\)_CANISTER_ID/process.env.NEXT_PUBLIC_\1_CANISTER_ID/g' "$index_file"
