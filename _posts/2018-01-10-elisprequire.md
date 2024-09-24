---
layout: post
title: "Hijri calendars in elisp"
date: 2018-09-17
categories: linux jekyll update
---
I want to write a table that tracks how long an item stays at each station.

The date for when an item arrive is given in Hijri.

Can I use emacs's Hijri calendar functions for this calculation?

Yes, using `(require 'something)`. See the final results below

```
| Today | [2024-09-24] |            |                    |          |                       |
|       |              |            |                    |          |                       |
|       | Station      | Hijri      | Gregorian (approx) | Days Ago | Total Days at Station |
|-------+--------------+------------+--------------------+----------+-----------------------|
| #     | Station 1    | 1445/09/09 | [2024-03-19]       |      189 |                    62 |
| #     | Station 2    | 1445/11/12 | [2024-05-20]       |      127 |                   100 |
| #     | Station 3    | 1446/02/22 | [2024-08-28]       |       27 |                    21 |
| #     | Station 4    | 1446/03/14 | [2024-09-18]       |        6 |                     1 |
| #     | Station 5    | 1446/03/15 | [2024-09-19]       |        5 |                     5 |
|       |              |            |                    |          |                       |
#+TBLFM: $4='(get-greg "$3");L::$5=@1$2-$4::$6=@+0$5-@+1$5::@1$2='(format-time-string "[%Y-%m-%d]")
```

For clarity, here are the formulas

``` elisp
# Column Formulas
$4 = '(get-greg "$3");L
$5 = @1$2-$4
$6 = @+0$5-@+1$5

# Field and Range Formulas
@1$2 = '(format-time-string "[%Y-%m-%d]")
```

`get-greg` is a function I wrote to convert Hijri dates to Gregorian, using emacs functions

``` elisp
(defun get-greg(str)
;; Gets the gregorian date from the islamic date
;; FYI (calendar-gregorian-from-absolute (calendar-islamic-to-absolute '(3 4 1446)))
;; FYI (calendar-islamic-date-string '(9 8 2024))
;; FYI (calendar-islamic-from-absolute (date-to-day "2024-09-08T00:00:00"))

(require 'cal-islam)
(setq y (string-to-number (substring str 0 4)))
(setq m (string-to-number (substring str 5 7)))
(setq d (string-to-number (substring str 8 10)))

(setq date (list m d y))
(setq greg (calendar-gregorian-from-absolute (calendar-islamic-to-absolute date)))

(setq m1 (format "%02d" (nth 0 greg)))
(setq d1 (format "%02d" (nth 1 greg)))
(setq y1 (number-to-string (nth 2 greg)))

(concat "[" y1 "-" m1 "-" d1 "]")
)    
```

## Note

The Hijri dates are usually off by a day or two. However, the date differences (calculated by the difference in Gregorian dates) should be consistent.


In order to get the accurate date, you can use a simple table to construct a link to a website like islamicfinder, as below.


```
|   | Year | Month    | Link                                                         |
|---+------+----------+--------------------------------------------------------------|
| # | 2024 | November | https://www.islamicfinder.org/islamic-calendar/2024/November |
| # | 1446 | Safar    | https://www.islamicfinder.org/islamic-calendar/1446/Safar    |
#+TBLFM: $4='(concat "https://www.islamicfinder.org/islamic-calendar/" $2 "/" $3)
```
