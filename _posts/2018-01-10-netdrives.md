---
layout: post
title: "Mapped drives"
date: 2018-07-15
categories: linux jekyll update 
---

This is more of a windows post. I am using `rsync` and `cron` to synchronize a folder on a network drive. 

The following reading was helpful in setting it up.

[Map a network drive in Windows 10](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-10-29ce55d1-34e3-a7e2-4801-131475f9557d)

See your mounted drives with

``` bash
ls /mnt/
```

According to [mounting network drives](https://dev.to/rpalo/mounting-network-drives-into-windows-subsystem-linux-3ef7), make a directory in there

``` bash 
sudo mkdir /mnt/stroopwafel
```

If you have mapped the network drive to a drive letter on your Windows system already--let's say `\\stroopwafel` is mapped to `Z:\`--or if you've just got a removable drive that isn't mounted yet but has a letter on your Windows system, the syntax changes a little:

``` bash
sudo mount -t drvfs Z: /mnt/stroopwafel
```

## Additional reading

* [Schedule Tasks Using Crontab on Windows 10 with WSL](https://blog.snowme34.com/post/schedule-tasks-using-crontab-on-windows-10-with-wsl/index.html#Make-the-Daemon-start-at-Windows-Boot)
* [What is /dev/null 2>&1?](https://stackoverflow.com/questions/10508843/what-is-dev-null-21)
* [What Is a Mapped Drive?](https://www.lifewire.com/what-is-a-mapped-drive-2625932)
* [wsl startup](https://blog.snowme34.com/post/schedule-tasks-using-crontab-on-windows-10-with-wsl/index.html)

