---
layout: post
title: "Learning Emacs: info"
date: 2018-07-24
categories: linux jekyll update
---

# Using Info 

There are tons of manuals on emacs.  While the process of finding information was made really easy, this might be hard for beginners as they may skip over this information initially. **It really saves a lot of time to learn this before learning the details of emacs**.
  
Use `C-h i` to start info. You will get the following message

```
  This (the Directory node) gives a menu of major topics.
  Typing "q" exits, "H" lists all Info commands, "d" returns here,
  "h" gives a primer for first-timers,
  "mEmacs<Return>" visits the Emacs manual, etc.
```

If the buffer wasn't open already, it will take you to the top directory of `info`. Type:

- `H` to list all info commands
- `l` t go to the last node you were at

## Moving Around

To move through nodes:

- `n` `p` to move to next and previous nodes 
- `[` `]` to move to next and previous nodes, going into sub-levels 
- `m` to go to a menu item
- `l` to go back to a previous node

## `g` command

Use this command to `go to node`. Specifiy the manual with parenthesis, then write the name of the node. For example, while in the info buffer, type

```
g RET (calc)Top
````

would take you to the top level of the calc manual. To copy the name of the current node to the "kill ring", use `c`.

## info-apropos

This is very useful, to search for something in all manuals, use this command `M-x info-apropos`


## Saving your location

To store your location in the manuals, assuming you are using [Org Mode]({% post_url 2018-01-10-emacs_org %}) to keep track of your notes, you can save the location you are at in your notes as follows:

* `M-x org-store-link` from the info window (uses the [org-store-link](https://orgmode.org/manual/Handling-Links.html) function)
* `C-c C-l` to insert it in an Org Mode note

The link will look like this [info:org#Timestamps]() and the target will be `[[info:org#Timestamps][info:org#Timestamps]]`. 

A more efficient method uses [org-capture](https://orgmode.org/manual/Using-capture.html#Using-capture). Just type `M-x org-capture` and follow the prompt. The note will be saved in `.notes` folder by default.
