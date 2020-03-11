---
layout: post
title:  "Replace Matlab with Python"
date:   2018-01-14
categories: jekyll update python
---

# Python as a Replacement of Matlab


## Requirements

### Numpy

Python is pre-installed on Linux and Mac. 

From the terminal:
```
$ pip install numpy
```

*Note: Sometimes you'll have to specify pip3 if you have more than one version of Python installed.*

### Scipy

```
$ pip install scipy
```

### Matplotlib

```
$ pip install matplotlib
```
### If you are (forced to) use Windows

First, you will need to download Python from [here](https://www.python.org/downloads/) and install it. Then download the packages (numpy, scipy, and matplotlib) above from [this website](https://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy). There are several versions of each so make sure you select the one that corresponds with the installed version of Python (see below).  

For installing the packages, pip (a tool for installing Python’s packages) must be 9 or above. If it’s not, in the command prompt, (after installing Python) enter
 
```
C:\Python34>python -m pip install --upgrade pip
Downloading/unpacking pip from https://pypi.python.org/packages/b6/ac/7015eb97dc
749283ffdec1c3a88ddb8ae03b8fad0f0e611408f196358da3/pip-9.0.1-py2.py3-none-any.wh
l#md5=297dbd16ef53bcef0447d245815f5144
Installing collected packages: pip
  Found existing installation: pip 1.5.6
    Uninstalling pip:
      Successfully uninstalled pip
Successfully installed pip
Cleaning up...
 
C:\Python34>python -m pip --version
pip 9.0.1 from C:\Python34\lib\site-packages (python 3.4) #should be pip 9 or above
 
C:\Python34>python -m pip install "C:\Path\to\Downloads\numpy-1.13.3+mkl-
cp34-cp34m-win_amd64.whl"                                 #cp34 corresponds to my python version 3.4
Processing c:\Path\to\downloads\numpy-1.13.3+mkl-cp34-cp34m-win_amd64.whl
 
Installing collected packages: numpy
Successfully installed numpy-1.13.3+mkl
```
 
Do the same for the downloaded packages of scipy and matplotlib. Note that numpy is a prerequisite for scipy, so install it first.
 
For using matplotlib, refer to
[http://matplotlib.org/tutorials/index.html](http://matplotlib.org/tutorials/index.html)

For a quickstart on numpy and scipy,
[https://docs.scipy.org/doc/numpy/user/quickstart.html](https://docs.scipy.org/doc/numpy/user/quickstart.html)

For a Python tutorial,
[https://docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/)

## Examples

### 1 Scientific Calculator
The `math` module contains the basic mathematical functions. You can use it this way

```python
$ python
Python 3.6.4 (default, Jan  7 2018, 03:53:53)
[GCC 4.2.1 Compatible Android Clang 5.0.300080 ] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import math
>>> math.e
2.7182818284590451
```
Typing mathematical functions this way can be annoying. You can import functions individually like this 

```python
>>> from math import e
>>> e
2.7182818284590451
>>>
```
Or, you can import all functions in the module

```python
>>> log(e)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'log' is not defined
>>> from math import *
>>> log(e)
1.0
```
Instead of importing the whole module, I created a script that imports functions usually found on scientific calculators, in addition to the numpy and matplotlib modules, which I frequently use.

To do this, open a new file `aziz.py` (for example) and write the following: 

```python
from math import sin
from math import cos
from math import tan
from math import asin
from math import acos
from math import atan
from math import log
from math import log10
from math import pi
from math import e
import numpy as np #we will worry about numpy and matplotlib later
#import scipy
import matplotlib.pyplot as plt
```
Now go to the directory containing `aziz.py` in the terminal and type
```python
$ python
Python 3.6.4 (default, Jan  7 2018, 03:53:53)
[GCC 4.2.1 Compatible Android Clang 5.0.300080 ] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from aziz import *
>>> sin(pi/2)
1.0
>>> log(2)
0.69314718055994529
>>> np.array([[1,2,3]])
array([[1, 2, 3]])

```
*Note: for this to work numpy and matplotlib need to be installed. If you haven't installed them yet, just comment them out with #.*

### 2 Loops: Approximating the Exponential Function
This example illustrates how to calculate the exponential function using a for-loop in Python.

In `series.py` type:
```python
import math
def expo(x,m):
        """
        My first script, calculates y=e^x by iteration
        """
        y=0;y0=math.exp(x)
        for n in range(0,m):
            yn=x**n/math.factorial(n)
            y=y+yn
            print("%d %3.9f %3.9f" % (n,y,(y0-y)/y0))
```
This defines a function `expo(x,m)` that approximates the exponential function by adding the first m terms from the infinite series. 

Before we try it, let's add an if statement.

### 3 IF Statements
Add the following to `series.py`:

```python
def relationship(x,y): #notice the syntax! A colon, 4-space indentation, Python is strict with this stuff
    """
    x = bigger
    y = smaller
    """
    if x>y:
        print("we are good")
    else:
        print("THIS IS WRONG!!")
```
Next, let's try our functions. In the terminal, go to where `series.py` is located and type the following

```python
$ python
Python 3.6.4 (default, Jan  7 2018, 03:53:53)
[GCC 4.2.1 Compatible Android Clang 5.0.300080 ] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from series import expo #imports only the `expo` function from the `series` module
>>>
>>> expo(1,4) #iteration, value, rel. error
0 1.000000000 0.632120559
1 2.000000000 0.264241118
2 2.500000000 0.080301397
3 2.666666667 0.018988157
>>>
>>> dir() #displays directory contents
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'expo']
>>>
>>> import series as s #shorthand for series
>>>
>>> dir(s) #displays module contents
['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'expo', 'math', 'relationship']
>>>
>>> help(s.relationship) #displays whatever is in the docstring, press q to quit
>>>
>>> s.relationship(100,5)
we are good
>>>
>>> s.relationship(7,7.1)
THIS IS WRONG!!
>>>
>>> s #Getting suggestions: press tab key twice
s              slice(         str(
set(           sorted(        sum(
setattr(       staticmethod(  super(
>>> s. #press tab key twice
s.expo(          s.math           s.relationship(
>>>
```

## Plotting


### Simple x-y Plots
Create this script and call it something like `myplot.py`.

```python
"""
This code is for x-y plots. 
Change the function as required.\n
matplotlib is installed with python3 on this computer.
"""
import matplotlib.pyplot as plt
import numpy as np


a = np.linspace(0,10,100) #range (specified similar to Matlab's linspace function) 


b = np.exp(-a)  #function          

plt.plot(a,b)
plt.xlabel('xlabel')
plt.ylabel('ylabel')
plt.show()
```
Now run it from the shell

```python
$ python myplot.py
```

### Other Plots
Go on [matlplotlib website](https://matplotlib.org/gallery/index.html) and copy an example similar to your case.
