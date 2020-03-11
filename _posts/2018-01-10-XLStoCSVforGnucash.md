---
layout: post
title:  "Formatting Data for Gnucash"
date:   2018-01-08
categories: jekyll update python
---

*Update: I have significantly built on this script and I will write about it in a future [post]().*

# XLStoCSVforGnucash

* A data-analysis application of Python's [Pandas module](https://pandas.pydata.org/) 
* To get started with Gnucash, see [this video](https://www.youtube.com/watch?v=aqAaScYVeRQ).

## The Problem

My bank offers statements in XLS format. Life was good when all I had to do is export them to CSV and import to Gnucash. But they suddenly decided to add commas in the amounts and negative signs for negative cashflows. I had to manually edit the excel sheets (for the bank account and credit card) before exporting them to CSV, a process that became too tedious that I was using this software less and less.

## The Solution

Two python scrips. the first one:

1. Uses the Pandas module to read existing XLS files in the directory and merge them into one statement, after removing the unnecessary last two lines.
2. Remove the comma for the thousands separator.
3. Executes a SED code I wrote earlier to replace the negative signs with debit and credit columns
4. Generates intermediate files, useful for error checking.
5. Renames the files to include a timestamp

This is done by `fcsv.py` . After a successful import, I would like to

1. Remove the intermediate files
2. Place the CSV, XLS, and PDF files in their respective folders

This is done by `cleanup.py`.

## Download

Here is a link to the [repository](https://github.com/brownsugr/XLStoCSVforGnucash).

👌
