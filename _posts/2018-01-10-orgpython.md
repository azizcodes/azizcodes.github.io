---
layout: post
title: "Literate Programming in org (3/3)"
date: 2018-09-12
categories: linux jekyll update
---

This post is on incorporating python in org babel, on windows, which was a struggle due to some peculiarities with `conda`. Here is what you need to do 

1. install `conda.el` from `M-x list-packages`
2. Follow the [instructions](https://github.com/necaris/conda.el) on that page.

You need to find where's the python installation that `conda` uses.  It was in different places on my two Windows computers. That folder corresponds to the emacs variable `python-shell-virtualenv-root` in the below. Add the following to `.emacs`

``` elisp
(custom-set-variables
 '(python-shell-interpreter
   "C:\\Users\\user\\AppData\\Local\\Continuum\\anaconda3\\python.exe")
 '(python-shell-virtualenv-root
   "C:\\Users\\user\\AppData\\Local\\Continuum\\anaconda3\\")
 '(conda-anaconda-home "C:\\Users\\user\\AppData\\Local\\Continuum\\anaconda3")
 '(org-babel-python-command "python")

 )

(org-babel-do-load-languages
 'org-babel-load-languages
 '((python . t)))
 
 
 (setq conda-env-home-directory "C:\\Users\\user\\AppData\\Local\\Continuum\\anaconda3\\"
      conda-env-subdirectory "envs")

(require 'conda)
(conda-env-activate "base")

```

To test that it works, try `run-python`. If it activates the conda environment, it's working propertly. If not, go to your prompt and check the values for the conda environment variables (with a command like `set` on Windows).

Once it works, you can include python source blocks like what I did in the [first post]({% post_url 2018-01-10-orginline %}) of this series.
