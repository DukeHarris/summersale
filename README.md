Summersale
===========

After our internship we had a lot of stuff we needed to get rid of before heading back home. We had a google spreadsheet with all things we wanted to sell, but we wanted to display everything in a nicer way to potential buyers.

This project generates a website based on a CSV file (e.g. Google Spreadsheet export). Simply create a spreadsheet with the required columns and either export that spreadsheet as CSV to the /data directory or simply point the /data/update.sh script to your google spreadsheet and let it do the export automatically.

You can also add the update.sh to your crontab to periodically update the website when the spreadsheet changes.
