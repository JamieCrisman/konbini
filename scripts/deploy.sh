#!/usr/bin/env bash
set -eo pipefail

export NODE_ENV=production
export APP_ENV=production
NPM_BIN=$(npm bin)

echo "cleaning up"
rm -rf dist/*

echo "compiling"
$NPM_BIN/webpack -p

# output directory
cd dist

# TODO: move CNAME into dist
cp ./../CNAME ./CNAME

git init

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "jamie@longest.voyage"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1