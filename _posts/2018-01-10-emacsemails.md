---
layout: post
title: "Emails in emacs [1/4]"
date: 2018-08-17
categories: linux jekyll update
---

In this series of posts, I write about two emacs email clients, `gnus` and `mu4e`, using two approaches: 

1. IMAP (in-memory) `gnus` 
2. Downloading emails to a folder `~/Maildir` 

The search engine, `mu`, and the emacs package `mu4e` deals with the 2nd approach. `gnus` can work with both approaches. 

If I am just checking for emails, and deciding what to do them, I use `gnus` with the 1st approach.  If I am filtering a large number of emails, or looking for something specific, I use `mu4e`, with the 2nd approach.

`gnus` is somewhat hard to set up if you're gonna rely on the documentation. This is why I created [this post]({% post_url 2018-01-10-gnus %}).

`mu4e` is easier to set up. First use [mbsync]({% post_url 2018-01-10-synchronizingemails %}) download the emails to a folder, then initialize some variables for `mu4e` in `~/.emacs`, as described [here]({% post_url 2018-01-10-mu4e %}) and you're set. In this approach, you have a folder synchronized to the email, and you do everything with a search. The program `mu` indexes your local email folder, so it is faster than doing things on the web because it is a local folder. 

I used this approach to clean up my over +1000 unread emails, then reverted back to `gnus` to read emails as news, expiring articles and ticking only what needs to be ticked. Btw you can search your `IMAP` groups in `gnus` using the your email providers search with command `G G` in the `*group*` buffer. 
