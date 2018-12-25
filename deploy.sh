#!/usr/bin/env sh
# build
npm run build
git add *
git commit -m "deploy"
git push -u origin master