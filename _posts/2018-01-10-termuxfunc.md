---
layout: post
title: "Termux API"
date: 2018-08-22
categories: linux jekyll update
---

In the previous post, I talked about `termux-clipboard-set`. There are more functions to control your android device. They all start with 

``` bash
termux-
```
To see them, type the above and hit `TAB`.

```
Possible completions are:
termux-am 	termux-am-socket
termux-api-start 	termux-api-stop
termux-audio-info 	termux-backup
termux-battery-status 	termux-brightness
termux-call-log 	termux-camera-info
termux-camera-photo 	termux-change-repo
termux-chroot 	termux-clipboard-get
termux-clipboard-set 	termux-contact-list
termux-dialog 	termux-download
termux-elf-cleaner 	termux-fingerprint
termux-fix-shebang 	termux-info
termux-infrared-frequencies 	termux-infrared-transmit
termux-job-scheduler 	termux-keystore
termux-location 	termux-media-player
termux-media-scan 	termux-microphone-record
termux-nfc 	termux-notification
termux-notification-list 	termux-notification-remove
termux-open 	termux-open-url
termux-reload-settings 	termux-reset
termux-restore 	termux-sensor
termux-setup-package-manager 	termux-setup-storage
termux-share 	termux-sms-inbox
termux-sms-list 	termux-sms-send
termux-speech-to-text 	termux-storage-get
termux-telephony-call 	termux-telephony-cellinfo
termux-telephony-deviceinfo 	termux-toast
termux-torch 	termux-tts-engines
termux-tts-speak 	termux-usb
termux-vibrate 	termux-volume
termux-wake-lock 	termux-wake-unlock
termux-wallpaper 	termux-wifi-connectioninfo
termux-wifi-enable 	termux-wifi-scaninfo
```
You can read the description of these functions [here](). You can do actions like sending SMS or getting the device location etc. Useful with scripting.
