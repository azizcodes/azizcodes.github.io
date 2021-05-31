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

To search for something in all manuals, use this command `M-x info-apropos`
