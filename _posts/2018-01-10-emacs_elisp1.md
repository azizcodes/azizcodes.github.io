---
layout: post
title: "Elisp"
date: 2018-07-28
categories: linux jekyll update
---

Why am I learning elisp?

* I have a file that has a bunch of shell scripts in it.
* I would like to be able to call shell commands directly using keybindings in emacs.

Is this possible? Yes, just following the [tutorial by Mr. Xah](http://ergoemacs.org/emacs/elisp_basics.html). This is how to launch shell commands from elisp (go to *scratch*, which is in *lisp interaction mode* first):

``` elisp
(shell-command "dir")
```
Try it by placing the cursor after the last parenthesis then typing `C-x C-e`.

Here is how to define functions

``` elisp
(defun myFunction ()
  "testing"
  (message "Yay!"))
```
Now let's make it interactive.

``` elisp
(defun yay ()
  "Insert “Yay!” at cursor position."
  (interactive)
  (insert "Yay!"))
```

Nice. Now let's make the function we wanted:

``` elisp
(defun runBackup ()
  "Runs the shell script "backup"."
  (interactive)
  (shell-command "/location/of/script/script.sh")
  ;; you can try it with, for example, 
  ;; (shell-command "date")
  (message "I'm done. Yay!"))
```
Now it can be run with `M-x runBackup`. Yay!
