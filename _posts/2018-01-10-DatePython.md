---
layout: post
title:  "Dates in Python"
date:   2018-01-13
categories: jekyll update python
---
# datetimetools
A collection of tools for date and time calculations. Here is a link to [the repository](https://github.com/azizcodes/datetimetools). For a quick reference to date and time in python, check [this link](http://www.pythonforbeginners.com/basics/python-datetime-time-examples/).

## Programs

### 1. deadlines.py
This script is to keep track of the number of days and business days between today and a future date. Takes input from a csv file 'deadlines.csv'.

Input: deadlines.csv
```
date                  description           notes
2018-02-11            trip
2018-05-29            championship          kick ass
```
Output:

```
$ python deadlines.py

3 days remaining until trip
= 2 business days, minus  holidays

110 days remaining until championship
= 79 business days, minus  holidays
... kick ass
```
[Code on GitHub](https://github.com/azizcodes/datetimetools/blob/master/deadlines.py)

### 2. daysdelta.py
Number of days between today and a future date. Takes input from keyboard.

```
$ python daysdelta.py
This program calculates number of days to a future date
For the future date, enter
year (yyyy): 2018
month (m): 8
Enter day (d): 1
175
```
[Code on GitHub](https://github.com/azizcodes/datetimetools/blob/master/daysdelta.py)

### 3. plusdays.py
Determines the future date after n days.

```
$ python plusdays.py 
Finds the future date after n days from today
n=?100
2018-05-18 12:47:35.102163
```
[Code on GitHub](https://github.com/azizcodes/datetimetools/blob/master/plusdays.py)

### 4. plusbusinessdays.py
Determines the future date after n business days.

```
$ python plusbusinessdays.py 
Finds the future date after n businessdays from today
n=?100
2018-06-28 12:48:19.891332
not counting holidays
```
[Code on GitHub](https://github.com/azizcodes/datetimetools/blob/master/plusbusinessdays.py)

### 5. datefixer.py
Imports CSV file, converts the dates in two columns from yyyy/mm/dd to mm/dd/yyyy.

[Code on GitHub](https://github.com/azizcodes/datetimetools/blob/master/datefixer.py)

:pizza:
