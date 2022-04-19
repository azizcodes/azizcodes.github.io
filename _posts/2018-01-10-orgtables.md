---
layout: post
title: "Advanced functions in Org Tables"
date: 2018-08-12
categories: linux jekyll update
---

The basics of Org Tables are documented in Emacs. However, more sophisticated formulas requires experience with Calc and possibly Elisp. You can see examples of this below.

To sum elements in a column (from the 2nd row in the 3rd column in the example below) and put the result in the last row

```
@>$3=vsum(@2..@-1)
```

To insert a date into a field, use this formula

```
'(org-insert-time-stamp (current-time))'
```

* `C-c `\` edit a field
* `C-c '` edit formulas
* `C-u C-c C-c` re-evaluate all formulas 

