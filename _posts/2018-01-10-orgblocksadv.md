---
layout: post
title: "Literate Programming in org (2/3)"
date: 2018-09-11
categories: linux jekyll update
---

Still diving into org babel.. 

Notes: 
1. This is a pretty deep dive into elisp. I could've used Python for the below, but as of now I don't have all necessary packages on all my platforms and elisp is the most portable solution
3. In order to facilitate evaluation, modify the variable `org-confirm-babel-evaluate` with `C-h v` to `nil` 
4. Code blocks are an excellent way to learn programming

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

So from analyzing the above, we can see the syntax that org babel interprets as a table. So, we can build one with elisp as follows:

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

now we need to operate on these lists and find the sum and mean. These are vector operations and I will use calc.


Calc has a special syntax for vectors that was barely mentioned once in the whole documentation. [This stackoverflow post](https://emacs.stackexchange.com/questions/18704/how-to-use-calc-vector-functions) mentioned that it uses a special "internal" syntax for vectors:

```
(vec 1 2 3)
```

Ok, so for the simple case, this how to calculate the sum and mean by calling calc from lisp:

```elisp
;; finding the mean using calc
(setq v1 '(vec 10 20 30 40))
(calc-eval (calcFunc-vmean v1))

;; converting from a list 
(setq d '(10 20 30 40))
;; to a vector
(setq v2 (cons 'vec d))
(calc-eval (calcFunc-vmean v2))
```

Now we can form code blocks and calculate the sum and the mean using elisp.

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

# Producing a table

Let's calculate the sum and the mean for this data and put them in a table

```
#+name: newdata
| v  |
|----|
| 45 |
| 45 |
| 52 |
| 57 |
| 43 |
| 65 |
| 25 |
```
code block

```elisp
#+name: stats
#+begin_src emacs-lisp :var v=newdata :exports results :noweb yes 
  (setq u (mapcar 'car v))

  (setq sum (apply '+ u))
  (setq sumt (number-to-string sum))

  (setq meant (calc-eval (calcFunc-vmean (cons 'vec u))))
  (setq mean (format "%6.2f" (string-to-number meant)))

  (append '((Sum Mean)) `(hline (,sum ,mean)))
#+end_src
```
result

```
#+RESULTS: stats
| Sum |  Mean |
|-----+-------|
| 332 | 47.43 |
```

# Mappig values

```elisp
#+name: mapping
#+begin_src emacs-lisp :var v=newdata :exports results :noweb yes 
 (setq u (mapcar 'car v))
 (setq doubled (mapcar '(lambda (d) (* d 2))  u))
 (setq doubledl (mapcar 'list doubled))
 (setq med (append '((v*2)) '(hline)))
 (append med doubledl)
#+end_src
```
And the result

```
#+RESULTS: mapping
|  v*2 |
|------|
|   90 |
|   90 |
| 1050 |
|  114 |
|   86 |
|  130 |
|   50 |
```
