---
layout: post
title: "Literate Programming in org"
date: 2018-09-10
categories: linux jekyll update
---

Still diving into org babel. *Warning: this is pretty deep..*

Very instructive example from [stackoverflow](https://emacs.stackexchange.com/questions/42208/how-to-add-hline-and-column-sum-to-bottom-of-table-using-a-src-block):

```
#+name: mytable
| p | q |
|---+---|
| a | 5 |
| b | 2 |
| c | 3 |


#+begin_src emacs-lisp :var table=mytable :colnames yes 
  (let* ((total (apply '+ (mapcar 'car (mapcar 'cdr table))))  )
    (append table `(hline ("" ,total))))
#+end_src

#+RESULTS:
| p |  q |
|---+----|
| a |  5 |
| b |  2 |
| c |  3 |
|---+----|
|   | 10 |
```

Ok, so for the simple case, this how to calculate the sum and mean by calling calc from lisp:

```elisp
;; sum
(setq v1 '(vec 10 20 30 40))
(calc-eval (calcFunc-vmean v1))

;; mean
(setq d '(10 20 30 40))
(setq v2 (cons 'vec d))
(calc-eval (calcFunc-vmean v2))
```

So, now let's build a table:

```
#+name: mytab
#+begin_src emacs-lisp :var table=mytable
    '((5) (2) (4) (10) (6))
#+end_src

#+RESULTS: mytab
|  5 |
|  2 |
|  4 |
| 10 |
|  6 |
```

then call its values from other code blocks and calculate the sum and the mean:

```
#+name:mysum
#+begin_src emacs-lisp :var tab=mytab
  (apply '+ (mapcar 'car tab))
#+end_src

#+RESULTS:
: 27

#+name:mymean
#+begin_src emacs-lisp :var tab=mytab
     (calc-eval (calcFunc-vmean (cons 'vec (mapcar 'car tab))))
#+end_src

#+RESULTS: mymean
: 5.4
```

Many thanks to [this stackoverflow post](https://emacs.stackexchange.com/questions/18704/how-to-use-calc-vector-functions), too.
