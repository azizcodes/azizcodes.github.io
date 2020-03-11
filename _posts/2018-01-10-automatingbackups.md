---
layout: post
title:  "Phone Backup Script"
date:   2018-03-17
categories: jekyll update
---

# Android Locations

Suppose you want to back up the following locations using `rsync` over LAN

1. Termux data, `~/` (home) folder
2. Whatsapp data `/sdcard/Whatsapp`
3. Image folders
  1. `/sdcard/Pictures` 
  2. `/sdcard/DCIM`

and you want to temporarily put all of that in `~/Documents/phone/backup`. Here is a script to do this.

Note: 

* replace 192.168.x.x below with the address of the phone on the network
* this script assumes you can already ssh into your phone from your computer

```
#!/bin/bash

# backup: backsup phone data

echo "
My Phone Back Up Program

Backing up what today?
	1. termux data
	2. whatsapp data
	3. image folders (Pictures/ and DCIM/)
	0. abort

Remember that this is a one way backup. 
If you are deleting something, delete it from the source (the phone). 
Otherwise, it is going to be copied again

"

read -p "Enter selection [0-3] > "

test1='ssh 192.168.x.x -p 8022'

if [ test1 ]; then
	echo ssh works

	case $REPLY in 
		1)  echo "
			executing 
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:~/ ~/Documents/phone/backups/
			pls wait..
			"
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:~/ ~/Documents/phone/backups/Home/
			;;
		2)  echo "
			executing 
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/Whatsapp ~/Documents/phone/backups/
			pls wait..
			"
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/Whatsapp ~/Documents/phone/backups/
			;;
		3)  echo "
			executing 
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/DCIM ~/Documents/phone/backups/
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/Pictures ~/Documents/phone/backups/
			pls wait..
			"
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/DCIM ~/Documents/phone/backups/
			rsync -av --delete -e 'ssh -p 8022' 192.168.x.x:/sdcard/Pictures ~/Documents/phone/backups/
			;;
		0)  echo aborting
			;;
	esac			
else
	echo ssh is not working
fi
```
