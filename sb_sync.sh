#!/bin/bash

cp -r ~/Sites/localhost/material-test/storybook-static/* ~/Sites/localhost/tejas-encora.github.io/
cd ~/Sites/localhost/tejas-encora.github.io/
git config pull.rebase false
git pull origin main
git add .
git commit -m "Build updated"
git push origin main