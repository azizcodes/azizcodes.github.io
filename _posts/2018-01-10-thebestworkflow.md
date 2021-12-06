---
layout: post
title: "My Workflow"
date: 2018-08-05
categories: linux jekyll update
---

In my view, TRAMP is emacs's best feature. It is why I adopted emacs into my workflow.

Bash scripts (such as backup scripts) are great but since I work on several computers, it's a real pain to synchronize them all.

My solution is the following:

1. Store the scripts remotely on termux and then cat them to laptop screen using ssh and pipe that to the bash
2. Store emacs functions in a `.el` file remotely on termux that are loaded at startup of emacs on the laptop
3. Use emacs command or key-binding to run some of these functions

The advantage is that doesn't just work for synchronizing scripts, but for synchronizing anything, and away from cloud computing. It's also really easy. I'll illustrate how below.

## Running Remote Scripts, Locally

First, get the value of `phone-ip-relative-to-the-laptop` which is gonna be a number separated by periods like `192...`. Then, on termux: 
       
``` bash
echo "echo hi; echo this is a script" > script.sh
echo (defun aziz-script() (interactive) (shell-command "ssh -p 8022 phone-ip-relative-to-the-laptop cat script.sh | bash")) > aziz_functions.el
```
On `~/.emacs` on the laptop:

``` emacs
(load-file "/ssh:user@phone-ip-relative-to-the-laptop#8022:/data/data/com.termux/files/home/aziz_functions.el")
(global-set-key (kbd "C-c p") 'aziz-script)
	   
```
Now when you restart emacs, the command `M-x aziz-script` will run script.sh residing on the phone, using the laptop's bash.

You can run the same command with the keyboard combination `C-c p`.

## Bonus: A Welcome Page

Here are some other settings I put in `aziz_functions.el`. A welcome page that contains text in org mode that is the first thing I see when I open emacs, together with ready registers for the current date.

``` elisp
(progn
  (find-file "/ssh:user@phone-ip-relative-to-the-laptop#8022:/data/data/com.termux/files/home/welcome")
  (switch-to-buffer "*scratch*")
  (org-mode)
  (insert (format-time-string "* %y-%m-%d\n"))
  (insert-file "/ssh:user@phone-ip-relative-to-the-laptop#8022:/data/data/com.termux/files/home/welcome")
  (set-register ?d (format-time-string "%b %d, %Y"))
  (set-register ?s (format-time-string "%m-%d"))
  )
```
## Bonus: Remembering Things

Setting the variable `org-agenda-files` to a remote location on your phone, is a great thing to integrate with this approach.

``` emacs
C-h v org-agenda-files /ssh:user@phone-ip-relative-to-the-laptop#8022:/data/data/com.termux/files/home/your-org-folder
```

