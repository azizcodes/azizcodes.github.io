---
layout: post
title: "inline programming in org"
date: 2018-09-10
categories: linux jekyll update
---

You can include python in your org documents:

``` elisp
#+begin_src python :results value
  x=[k for k in range(10)]
  return x
#+end_src

#+RESULTS:
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
```

if you are evaluating a number of variables and you want to see what python prints to stdout, use the following for `:results`

``` elisp
#+begin_src python :results output

  import numpy as np

  x=np.arange(10)
  y=x+4
  print(x)
  print(y)

#+end_src

#+RESULTS:
: [0 1 2 3 4 5 6 7 8 9]
: [ 4  5  6  7  8  9 10 11 12 13]
```

# Using Matplotlib

Here is a full document with usual settings:

* no toc
* to numbering for sections
* no html postamble (emacs default is to include it)

```
#+OPTIONS: toc:nil num:nil

* Python Code Blocks

** Prerequisites

You need to load python first by evaluating this block (=C-c C-c= on the block) or including it in your init file.

#+begin_src elisp
  (org-babel-do-load-languages
   'org-babel-load-languages
   '((python . t)))

  (setq org-html-postamble nil) 		;to remove postamble when exporting
#+end_src

You also have to have the python packages you're using installed.

** The Code block

This example uses numpy and matplotlib.

#+begin_src python :results file link :exports both
  import numpy as np
  import matplotlib.pyplot as plt
  x=np.linspace(-6.28,6.28)
  y=np.sin(x)
  plt.plot(x,y)
  figname='pie.png'
  plt.savefig(figname)
  return figname
#+end_src

#+RESULTS:
[[file:pie.png]]
```

# Further Reading

* https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-python.html
* https://orgmode.org/manual/Results-of-Evaluation.html#Results-of-Evaluation
