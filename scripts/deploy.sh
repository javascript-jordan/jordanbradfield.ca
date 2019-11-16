#!/bin/bash
shopt -s extglob
echo "What version are you deploying?"
read version
git add .
git commit -m "rel: ${version}"
git push origin master
git tag "${version}"
git push origin "${version}"
cd ../javascript-jordan.github.io
rm -rfv !("CNAME"|"*git")
git add .
git commit -m "removing old assets"
cp -r ../jordanbradfield.ca/dist/client/* ./
git add .
git commit -m "rel: ${version}"
git push origin master
git tag "${version}"
git push origin "${version}"