---
layout: post
title: "mbsync, synchronizing emails (3/4)"
date: 2018-08-17
categories: linux jekyll update
---

AKA `isync`. Available on Linux with `sudo apt-get install mbsync`.

# Example
Assuming you are using protonmail/bridge. Create the directories `~/Mail/proton`. Then create a file called `~/.mbsyncrc` and put the following content in it. 

``` mbsync
IMAPAccount protonmail
Host 127.0.0.1
Port 1143
User (your email)
Pass (your bridge password)
SSLType NONE

IMAPStore proton-remote
Account protonmail

MaildirStore proton-local
Subfolders Verbatim
Path ~/Mail/proton/
Inbox ~/Mail/proton/INBOX/

Channel proton
Master :proton-remote:
Slave :proton-local:
Patterns *
Create Both
SyncState *
```
Then run 

``` bash
mbsync -a
```

# Explanation

The first part defines the _account_ details. The second and third parts define the remote and local _stores_. The fourth part defines a _channel_ and master-slave settings (called far-near in the new version, lol).
