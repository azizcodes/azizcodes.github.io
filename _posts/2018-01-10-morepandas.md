---
layout: post
title: "pandas Reference Sheet"
date: 2018-01-22
categories: jekyll update python
---
# More Pandas

Reference page on most common commands of the pandas and matplotlib Python modules.

## Input
```python
import pandas as pd
from math import *
import numpy as np
import datetime
import matplotlib.pyplot as plt

# defining functions
def echo(expression):
    print(expression+'=') # printing output to stdout
    print(eval(expression))
    print('')

# defining ranges
r=range(0,370,30)

# defining lists
deg=[j for j in r]
rad=[j*pi/180 for j in r]
s=[sin(j) for j in rad]
c=[cos(j) for j in rad]
t=[tan(j) for j in rad]

# defining a pandas dataframe
x=pd.DataFrame([deg,rad,s,c,t]).T

# alternatively,

# define pandas series
f=lambda x:pd.Series(x) # convert list to series datatype
# then concatenate it into a dataframe
x1=pd.concat([f(deg),f(rad),f(s),f(c),f(t)],axis=1) # =x

x.columns=['deg','rad','sin','cos','tan']

y=x.iloc[:,1:]
y.index=x.deg

# let's look at the generated dataframes
echo('x')
echo('y')

# selecting a row using iloc
echo('x.iloc[1]')   #using the automatically generated index

# selecting a row using ix
echo('y.ix[30]')

# selecting a column using '.'
echo('x.sin')

# selecting an element
echo('x.sin[1]')   #using the automatically generated index
echo('y.sin[30]')  #using our custom index

# operations
echo('y.sin**2+y.cos**2')
echo('y.sin*y.cos')
echo('round(sum(y.sin*y.cos))')

# re-order rows with reindex
echo('y.reindex([90,60,30])')

# re-order columns
echo('pd.concat([y.rad,y.cos],axis=1)')

# let's add dates column
years=[2018]*12+[2019]
months=[j for j in range(1,13)]+[1]
days=[1]*13
dates=[datetime.datetime(years[j],months[j],days[j]) for j in range(0,13)]
echo('dates')

# define a dataframe using a dictionary
d=pd.DataFrame({'d':dates})

z=pd.concat([d,x.sin,x.cos],axis=1)
echo('z')

#plt.plot(y.rad,y.sin,'ro-',y.rad,y.cos,'b^-')
plt.plot_date(z.d,z.sin,'ro-')
plt.grid()


plt.show()

```
## Output

In addition to the following figure, this output is displayed on the screen

```
x=
      deg       rad           sin           cos           tan
0     0.0  0.000000  0.000000e+00  1.000000e+00  0.000000e+00
1    30.0  0.523599  5.000000e-01  8.660254e-01  5.773503e-01
2    60.0  1.047198  8.660254e-01  5.000000e-01  1.732051e+00
3    90.0  1.570796  1.000000e+00  6.123234e-17  1.633124e+16
4   120.0  2.094395  8.660254e-01 -5.000000e-01 -1.732051e+00
5   150.0  2.617994  5.000000e-01 -8.660254e-01 -5.773503e-01
6   180.0  3.141593  1.224647e-16 -1.000000e+00 -1.224647e-16
7   210.0  3.665191 -5.000000e-01 -8.660254e-01  5.773503e-01
8   240.0  4.188790 -8.660254e-01 -5.000000e-01  1.732051e+00
9   270.0  4.712389 -1.000000e+00 -1.836970e-16  5.443746e+15
10  300.0  5.235988 -8.660254e-01  5.000000e-01 -1.732051e+00
11  330.0  5.759587 -5.000000e-01  8.660254e-01 -5.773503e-01
12  360.0  6.283185 -2.449294e-16  1.000000e+00 -2.449294e-16

y=
            rad           sin           cos           tan
deg                                                      
0.0    0.000000  0.000000e+00  1.000000e+00  0.000000e+00
30.0   0.523599  5.000000e-01  8.660254e-01  5.773503e-01
60.0   1.047198  8.660254e-01  5.000000e-01  1.732051e+00
90.0   1.570796  1.000000e+00  6.123234e-17  1.633124e+16
120.0  2.094395  8.660254e-01 -5.000000e-01 -1.732051e+00
150.0  2.617994  5.000000e-01 -8.660254e-01 -5.773503e-01
180.0  3.141593  1.224647e-16 -1.000000e+00 -1.224647e-16
210.0  3.665191 -5.000000e-01 -8.660254e-01  5.773503e-01
240.0  4.188790 -8.660254e-01 -5.000000e-01  1.732051e+00
270.0  4.712389 -1.000000e+00 -1.836970e-16  5.443746e+15
300.0  5.235988 -8.660254e-01  5.000000e-01 -1.732051e+00
330.0  5.759587 -5.000000e-01  8.660254e-01 -5.773503e-01
360.0  6.283185 -2.449294e-16  1.000000e+00 -2.449294e-16

x.iloc[1]=
deg    30.000000
rad     0.523599
sin     0.500000
cos     0.866025
tan     0.577350
Name: 1, dtype: float64

y.ix[30]=
rad    0.523599
sin    0.500000
cos    0.866025
tan    0.577350
Name: 30.0, dtype: float64

x.sin=
0     0.000000e+00
1     5.000000e-01
2     8.660254e-01
3     1.000000e+00
4     8.660254e-01
5     5.000000e-01
6     1.224647e-16
7    -5.000000e-01
8    -8.660254e-01
9    -1.000000e+00
10   -8.660254e-01
11   -5.000000e-01
12   -2.449294e-16
Name: sin, dtype: float64

x.sin[1]=
0.5

y.sin[30]=
0.5

y.sin**2+y.cos**2=
deg
0.0      1.0
30.0     1.0
60.0     1.0
90.0     1.0
120.0    1.0
150.0    1.0
180.0    1.0
210.0    1.0
240.0    1.0
270.0    1.0
300.0    1.0
330.0    1.0
360.0    1.0
dtype: float64

y.sin*y.cos=
deg
0.0      0.000000e+00
30.0     4.330127e-01
60.0     4.330127e-01
90.0     6.123234e-17
120.0   -4.330127e-01
150.0   -4.330127e-01
180.0   -1.224647e-16
210.0    4.330127e-01
240.0    4.330127e-01
270.0    1.836970e-16
300.0   -4.330127e-01
330.0   -4.330127e-01
360.0   -2.449294e-16
dtype: float64

round(sum(y.sin*y.cos))=
0.0

y.reindex([90,60,30])=
          rad       sin           cos           tan
deg                                                
90   1.570796  1.000000  6.123234e-17  1.633124e+16
60   1.047198  0.866025  5.000000e-01  1.732051e+00
30   0.523599  0.500000  8.660254e-01  5.773503e-01

pd.concat([y.rad,y.cos],axis=1)=
            rad           cos
deg                          
0.0    0.000000  1.000000e+00
30.0   0.523599  8.660254e-01
60.0   1.047198  5.000000e-01
90.0   1.570796  6.123234e-17
120.0  2.094395 -5.000000e-01
150.0  2.617994 -8.660254e-01
180.0  3.141593 -1.000000e+00
210.0  3.665191 -8.660254e-01
240.0  4.188790 -5.000000e-01
270.0  4.712389 -1.836970e-16
300.0  5.235988  5.000000e-01
330.0  5.759587  8.660254e-01
360.0  6.283185  1.000000e+00

dates=
[datetime.datetime(2018, 1, 1, 0, 0), datetime.datetime(2018, 2, 1, 0, 0), datetime.datetime(2018, 3, 1, 0, 0), datetime.datetime(2018, 4, 1, 0, 0), datetime.datetime(2018, 5, 1, 0, 0), datetime.datetime(2018, 6, 1, 0, 0), datetime.datetime(2018, 7, 1, 0, 0), datetime.datetime(2018, 8, 1, 0, 0), datetime.datetime(2018, 9, 1, 0, 0), datetime.datetime(2018, 10, 1, 0, 0), datetime.datetime(2018, 11, 1, 0, 0), datetime.datetime(2018, 12, 1, 0, 0), datetime.datetime(2019, 1, 1, 0, 0)]

z=
            d           sin           cos
0  2018-01-01  0.000000e+00  1.000000e+00
1  2018-02-01  5.000000e-01  8.660254e-01
2  2018-03-01  8.660254e-01  5.000000e-01
3  2018-04-01  1.000000e+00  6.123234e-17
4  2018-05-01  8.660254e-01 -5.000000e-01
5  2018-06-01  5.000000e-01 -8.660254e-01
6  2018-07-01  1.224647e-16 -1.000000e+00
7  2018-08-01 -5.000000e-01 -8.660254e-01
8  2018-09-01 -8.660254e-01 -5.000000e-01
9  2018-10-01 -1.000000e+00 -1.836970e-16
10 2018-11-01 -8.660254e-01  5.000000e-01
11 2018-12-01 -5.000000e-01  8.660254e-01
12 2019-01-01 -2.449294e-16  1.000000e+00

```
