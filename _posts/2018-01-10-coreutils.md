---
layout: post
title:  "Coreutils and getting help"
date:   2018-07-10
categories: jekyll update
---

Run the following command in bash,

``` bash
$ info coreutils
```
Alternatively, go on emacs (if it is installed), and `Ctrl-h i`, to see an overview of help topics. The `info` within emacs is more colorful than the standalone `info` program.

To get the manpage for bash, enter the following  

``` bash
$ info bash
```

which is a **highly recommended** read. To open the manpages on emacs, enter `Alt-x man` or `Alt-x woman`.

The `man` command in Linux does something similar, however the navigation is `vi` like, unlike the `info` command which is `emacs` like. For example in the `man` navigation, `j` and `k` to go up and down. `/` to search. In the `info` navigation, `Ctrl-v` goes downward, `Alt-v` upward, and `Ctrl-s` for search. Press `F10` to see more options and in `emacs`.


