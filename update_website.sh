#!/bin/bash

# This script updates the jmkapi entries and the website
# I use this internally on a CRON job that runs every 12 hours
# This assumes you've cloned https://git.joinfirefish.org/firefish/joinfirefish.org/ and https://git.joinfirefish.org/firefish/jmkapi into $HOME

cd $HOME/jmkapi
git pull --ff
bun index.js

cd $HOME/joinfirefish.org
git stash
git pull --ff
bun run build