---
layout: post
title: "Emails in emacs (1/4)"
date: 2018-08-15
categories: linux jekyll update
---

In this series of posts, I write about two emacs email clients, `gnus`[^1][^2] and `mu4e`[^3], using two approaches: 

1. IMAP (in-memory) `gnus` 
2. Downloading emails to a folder `~/Maildir` 

The search engine, `mu`, and the emacs package `mu4e` deals with the 2nd approach. `gnus` can work with both approaches. 

My usage: If I am just checking for emails, and deciding what to do them, I use `gnus` with the 1st approach.  If I am filtering a large number of emails to do some classifications or bulk-actions, I use `mu4e` with the 2nd approach.

`gnus` is somewhat hard to set up if you're gonna rely on the documentation. This is why I created [this post]({% post_url 2018-01-10-gnus %}).

`mu4e` is easier to set up. First use [mbsync]({% post_url 2018-01-10-synchronizingemails %}) download the emails to a folder, then initialize some variables for `mu4e` in `~/.emacs`, as described [here]({% post_url 2018-01-10-mu4e %}) and you're set. In this approach, you have a folder synchronized to the email, and you do everything with a search. The program `mu` indexes your local email folder, so it is faster than doing things on the web because it is a local folder. 

I used this approach to clean up my over +1000 unread emails, then went back to using `gnus` to read emails as news, expiring articles and "ticking" only what needs to be ticked. Btw you can search your `IMAP` groups in `gnus` using the your email providers search with command `G G` in the `*group*` buffer. 

---
[^1]: [Gnus on Wikipedia](https://en.wikipedia.org/wiki/Gnus)
[^2]: [Gnus manual](https://www.gnu.org/software/emacs/manual/html_node/gnus/index.html)
[^3]: [Mu's homepage](https://www.djcbsoftware.nl/code/mu/)
