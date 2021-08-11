---
layout: post
title: "Emacs Text Forms"
date: 2018-07-30
categories: linux jekyll update
---

You want to simply enter data into a form and have it stored in a file. 

You don't need a relational database model or Microsoft whatever for this simple task. The RDBM (such as those used in websites, usually MySQL or postgres) is used to solve problems such as retreiving large amounts of data, multiple users, queries, etc. SQLite makes it easier to do this for a single user, such as commonly done on phone apps. The following solution is even simpler.

Say you want to record company name, date, order, quantity, and price. Open a text editor and write the following

``` elisp
(setq forms-file "orders.dat")

(setq forms-number-of-fields
      (forms-enumerate '(record-company-symbol record-date  record-buy-or-sell record-quantity record-price))
)

(defun new-record-filter (the-record)
    (aset the-record record-date (format-time-string "%Y-%m-%d")) the-record) ; return it

(setq forms-new-record-filter 'new-record-filter)

(setq forms-format-list
     (list
      "====== Orders ======"
      "\n\n"
      "Company: "          record-company-symbol
      "\n\n"
      "Date: "             record-date
      "\n\n"
      "Buy or Sell: "      record-buy-or-sell
      "\n\n"
      "Quantity: "         record-quantity
      "\n\n"
      "Price: "            record-price
      " "
      )
)
```

Store this "control file" as `orders.el`. Now open emacs and run the following command and specify this file when prompted

``` elisp
M-x forms-find-file
```

Follow the instructions to fill the form. The data will be stored in a tabular format in a data file called `orders.dat`.
