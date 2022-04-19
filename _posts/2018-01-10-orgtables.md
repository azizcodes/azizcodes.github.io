---
layout: post
title: "Advanced functions in Org Tables"
date: 2018-08-12
categories: linux jekyll update
---

The basics of Org Tables are documented in Emacs. However, more sophisticated formulas requires experience with Calc and possibly Elisp. You can see some examples of this below.

To sum elements in a column (from the 2nd row in the 3rd column in the example below) and put the result in the last row

```
@>$3=vsum(@2..@-1)
```

To insert a date into a field, you can use this formula

```
'(org-insert-time-stamp (current-time))
```

You can use the [following commands](https://www.gnu.org/software/emacs/manual/html_node/org/Editing-and-debugging-formulas.html) to edit the fields

* `C-c SPC` blanks a field
* `C-c `\` edit a field
* `C-c =` install a new formula for the currnet column
* `C-c ?` field info
* `C-c '` edit formulas
* `C-u C-c C-c` re-evaluate all formulas 
