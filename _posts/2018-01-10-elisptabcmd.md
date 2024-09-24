---
layout: post
title: "Org tables with executable commands"
date: 2018-09-18
categories: linux jekyll update
---

When workin on a terminal, keeping track of commands and retyping them can be tedious. One solution using an org table and a code block is presented below.

```
#+name: cmd
| Function                             | Command                                                       |
|--------------------------------------+---------------------------------------------------------------|
| find all folders in documents folder | wsl find /mnt/c/Users/User/Documents -type f -maxdepth 1      |
| find all ipynb files in documents    | wsl find /mnt/c/Users/User/Documents -type f -iname '*.ipynb' |
| find all png files in downloads      | wsl find /mnt/c/Users/User/Downloads -type f -iname '*png'    |
```

The following code takes the table above as input and executes the first command if you press `C-c C-c` on it

``` elisp
#+begin_src emacs-lisp :var v=cmd :results raw
  ;; the following code executes the first command in the table above
  (setq command (car (cdr (car v))))
  (shell-command command)
  (switch-to-buffer "*Shell Command Output*")
#+end_src
```
