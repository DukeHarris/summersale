Summersale
===========

After our internship we had a lot of stuff we needed to get rid of before heading back home. We had a google spreadsheet with all things we wanted to sell, but we wanted to display everything in a nicer way to potential buyers.

This project generates a website based on a CSV file (e.g. Google Spreadsheet export). Simply create a spreadsheet with the required columns and either export that spreadsheet as CSV to the /data directory or simply point the /data/update.sh script to your google spreadsheet and let it do the export automatically.

You can also add the update.sh to your crontab to periodically update the website when the spreadsheet changes.

### Demo

Demo website:  
http://summersale.ramv.de

Demo Spreadsheet:  
https://docs.google.com/spreadsheets/d/19hAbGD_VBhD5i8Fuwt-Rey8jFb3a0MsgmhVLF1FQTQk/edit?usp=sharing

### How to get the google spreadsheet ID

Look at the URL of your spreadsheet. The whole part bewtween /d/ and /edit is the ID. In the example Spreadsheet that is _19hAbGD_VBhD5i8Fuwt-Rey8jFb3a0MsgmhVLF1FQTQk_

Make sure to set the spreadsheet privacy settings to _Anyone who has the link can view_. Otherwise the update script cannot fetch the export.
