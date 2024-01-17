---
layout: post
title: "From Shell to Kill Ring"
date: 2018-09-16
categories: linux jekyll update
---

You can show the result of an expressions in `*Shell Command Output*` with

  (shell-command "date") ;; assuming you're working on *nix
   
To evaluate an `(expression)` place marker after it and press`C-x C-e`. The message area will display the exist status as `0` if the command is successful and the result will go to that buffer.

Now suppose you want to copy the result of the `date` to your clipboard to be used by emacs. You can do the following 

  (kill-new (replace-regexp-in-string "\n" "" (shell-command-to-string "date")))

This will add it to the *kill ring*, an emacs term for the rotating clipboard (it also has another clipboard mechanism called *registers*). Press `C-y` to paste from the kill ring

  Wed Jan 17 15:23:45 +03 2024

You can number the org files in your directory without opening a command line

  (kill-new (shell-command-to-string "wsl ls *.org | nl")) ;; assuming you're on Windows
