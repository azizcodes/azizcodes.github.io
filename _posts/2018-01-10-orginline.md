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

To read more:

https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-python.html

https://orgmode.org/manual/Results-of-Evaluation.html#Results-of-Evaluation
