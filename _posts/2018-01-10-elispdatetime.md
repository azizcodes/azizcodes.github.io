---
layout: post
title: "elisp Date and Time"
date: 2018-09-07
categories: linux jekyll update
---

Examples:

``` elisp
;; This function returns the current time

(current-time)

=> (25778 26481 925256 0)

;; which is the number of seconds since the epoch, expressed in some formula
;; if you want to see the number of seconds as a an integer, try

(time-convert nil 'integer)

=>1689415252

;; to convert this to something humans can read, like the ISO 8601 standard, use

(format-time-string "%FT%T%z" (current-time))

=> "2023-07-15T05:43:36-0400"

;; to get it in y-m-d

(format-time-string "%Y-%m-%d" (current-time))

=> "2023-07-15"

;; the default is the current time, so you don't have to write it

(format-time-string "%Y-%m-%d")

=> "2023-07-15"

;; this function insert time as org time stamps

(org-insert-time-stamp TIME &optional WITH-HM INACTIVE PRE POST EXTRA)

(org-insert-time-stamp '(25778 26481 925256 0) nil 1 "" "" "")

=> [2023-07-15 Sat]

(org-insert-time-stamp 1689415252 nil 1 "" "" "")

=> [2023-07-15 Sat]

;; you can also use this one (but you can't not have the time with this onee)

(org-time-stamp '(16) 1)

=> [2023-07-15 Sat 05:50]

;; parsing time strings into lisp

(parse-time-string "2023-12-31")

=> (nil nil nil 31 12 2023 nil -1 nil)

;; set variable a to this value

(setq a (iso8601-parse "2023-12-31"))

a

=> (nil nil nil 31 12 2023 nil -1 nil)

;; access month

(decoded-time-month a)

=>12

(time-convert a 'integer)


(format-time-string "%y-%m-%d" (iso8601-parse "2023-12-31") )
```
