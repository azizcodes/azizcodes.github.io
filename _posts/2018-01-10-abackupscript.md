---
layout: post
title: "A Backup Script"
date: 2018-04-03
categories: jekyll update
---
Here is one way to write a back up script in Bash (using `rsync`).
``` bash
#!/bin/bash

# backupscript: back up data to a removable disk

today=$(date "+%Y-%m-%d %H:%M")

# input
srcdir=$HOME                  # source                 
dstdir=/Volumes/volume1/$USER # destination
logfile=/Volumes/volume1/rsync.log
#

if [ -e $logfile ]; then
	echo "$logfile exists"
else
	echo "creating $logfile" > $logfile
fi

read -p "are you sure you want to run the backup script [y/n]?"
if [ $REPLY == 'y' ]; then
	rsync -avhE --delete --progress $srcdir $dstdir |tee -a $logfile
	echo "copied $srcdir to $dstdir for $USER on $today" >> $logfile
	echo "you can check the log at $logfile"
fi
echo 'program terminated'
```
