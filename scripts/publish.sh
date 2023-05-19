#!/bin/sh

set -e

pnpm i --frozen-lockfile

pnpm update:version

pnpm build

cd packages/plugin-md

npm publish --access public
cd -

echo "✅ Publish completed"
