---
layout: post   
title:  "Python Basics"
date: 2018-01-14
categories: jekyll update python
---
# Example 1: Printing Two Columns
You want to convert from km/hr to mph for 0-250 km/hr. Here is what you input:

```python
# method 1
r=range(0,260,10)
km=[j for j in r] #list 1
mi=[j/1.6 for j in r] #list 2

print('km=')
print(km)
print('mi=')
print(mi)
print('\n\n')
for j in range(len(km)):
    print('{:6.2f} km/hr = {:6.2f} mph'.format(km[j],mi[j]))

# method 2
import pandas as pd

z=pd.concat([pd.Series(km),pd.Series(mi)],axis=1)
z.columns=['km/hr','mph']
print('\n\n')
print(z)
```
And here is the output:
```
km=
[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]
mi=
[0.0, 6.25, 12.5, 18.75, 25.0, 31.25, 37.5, 43.75, 50.0, 56.25, 62.5, 68.75, 75.0, 81.25, 87.5, 93.75, 100.0, 106.25, 112.5, 118.75, 125.0, 131.25, 137.5, 143.75, 150.0, 156.25]



  0.00 km/hr =   0.00 mph
 10.00 km/hr =   6.25 mph
 20.00 km/hr =  12.50 mph
 30.00 km/hr =  18.75 mph
 40.00 km/hr =  25.00 mph
 50.00 km/hr =  31.25 mph
 60.00 km/hr =  37.50 mph
 70.00 km/hr =  43.75 mph
 80.00 km/hr =  50.00 mph
 90.00 km/hr =  56.25 mph
100.00 km/hr =  62.50 mph
110.00 km/hr =  68.75 mph
120.00 km/hr =  75.00 mph
130.00 km/hr =  81.25 mph
140.00 km/hr =  87.50 mph
150.00 km/hr =  93.75 mph
160.00 km/hr = 100.00 mph
170.00 km/hr = 106.25 mph
180.00 km/hr = 112.50 mph
190.00 km/hr = 118.75 mph
200.00 km/hr = 125.00 mph
210.00 km/hr = 131.25 mph
220.00 km/hr = 137.50 mph
230.00 km/hr = 143.75 mph
240.00 km/hr = 150.00 mph
250.00 km/hr = 156.25 mph



    km/hr     mph
0       0    0.00
1      10    6.25
2      20   12.50
3      30   18.75
4      40   25.00
5      50   31.25
6      60   37.50
7      70   43.75
8      80   50.00
9      90   56.25
10    100   62.50
11    110   68.75
12    120   75.00
13    130   81.25
14    140   87.50
15    150   93.75
16    160  100.00
17    170  106.25
18    180  112.50
19    190  118.75
20    200  125.00
21    210  131.25
22    220  137.50
23    230  143.75
24    240  150.00
25    250  156.25
```

# Example 2: Distributing Salaries

An illustration of some Python techniques and a command reference for frequently used functions in the pandas module.

Code on GitHub: [change.py](https://github.com/azizcodes/change/blob/master/change.py), [change2.py](https://github.com/azizcodes/change/blob/master/change2.py).

## The Problem
You are the head of a small company and you want to bring just enough cash to pay your employees. Here are the employees' salaries

```
ahmed, 4067
norah, 2050
sinjab, 789
```

What is the smallest amount of change you can bring?

## The Solution
The solution is straightforward using simple math. In Python, floor division is `//` and modulo (remainder) is `%`. 

```
Get SAR 6906, divided as follows:
13 x500
2 x100
3 x50
4 x10
2 x5
6 x1

t
        ahmed  norah  sinjab   n     s
500         8      4       1  13  6500
100         0      0       2   2   200
50          1      1       1   3   150
10          1      0       3   4    40
5           1      0       1   2    10
1           2      0       4   6     6
totals   4067   2050     789  30  6906
```

The above is part of the output of `python change.py` and `python change2.py`, two scripts I wrote to solve this problem.

### change.py
* Using the `csv` module for input and output 
* Using NumPy for array calculations
* List comprehension
* Using `print()` and formatting

#### Requirements:
* NumPy. It can be installed with `pip numpy`
* An input file, 'salaries.csv' (included in the repository).

### change2.py
* Pandas
1. Making a dataframe from a dictionary
2. Changing a column's name
3. Changing columns' order
4. Printing output
5. Changing the index
6. Adding a column (or two) to a dataframe
7. Adding a row to a dataframe
8. Importing a csv using Pandas
9. Creating columns by `.apply()` and 'anonymous functions'
10. Adding columns with `pd.concat()`
* Tabview
  * use 'hjkl' to move
  * press 'q' to exit

#### Requirements:
* Pandas. It can be installed by `pip pandas`
* Tabview, a tool for viewing csv files. It can be installed using `pip tabview`.
* `change.py` should be in the same directory
