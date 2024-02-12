#!/usr/bin/env zsh

if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <source_directory> <target_directory>"
    exit 1
fi

backend_project="$1"
frontend_project="$2"

source_index_file="src/declarations/$backend_project/index.d.ts"
target_index_file="frontend/$frontend_project/ui/declarations/$backend_project/index.d.ts"

source_interface="src/declarations/$backend_project/$backend_project.did.d.ts"
target_interface="frontend/$frontend_project/ui/declarations/$backend_project/$backend_project.did.d.ts"

cp "$source_interface" "$target_interface"
cp  "$source_index_file" "$target_index_file"
