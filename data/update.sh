#!/bin/bash

cd  /home/torpedro/web/summersale/
git pull

wget "https://docs.google.com/feeds/download/spreadsheets/Export?key=1t6PEl4eYtDXrC8n0umCqU4ruy1mlYRGquLbf7SgRy7I&exportFormat=csv&gid=0" -O /home/torpedro/web/summersale/data/stuff.csv
