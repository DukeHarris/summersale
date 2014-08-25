#!/bin/bash

SPREADSHEETID="19hAbGD_VBhD5i8Fuwt-Rey8jFb3a0MsgmhVLF1FQTQk"

cd "`dirname $0`"
git pull

wget "https://docs.google.com/feeds/download/spreadsheets/Export?key=$SPREADSHEETID&exportFormat=csv&gid=0" -O "$(dirname $0)/stuff.csv"
