---
layout: post
title: "Python: class on classes"
date: 2018-08-27
categories: jekyll update
---

Python is a very flexible language while also opinionated on how you should write your code. I actually don't have a reference for the below but it's how I see most people write their code, so it must be written somewhere. 

A concept that might be new to some is that of a *class*. It sounded redundant to me when I first learned it because I did a lot of sophisticated programming without ever needing it. And actually,  I still believe that you can have a totally fulfilling Python life without it, achieving what you want with scripts and functions. That said, I do like the choice of running my code *both* as a script and as python modules. This is especially the case with longer code. 

My process of writing code is simple. 1) Open a file and make it executable. 2) Write some Python in it. 3) Then go to the interpreter to try ideas. If they work, put them in the text file. 4) As the code grows, you'll find that it is easier to separate it into functions, especially for debugging. 5) Group the functions together inside classes. 6) I don't use an IDE, emacs is sufficient for that, and when I am on my phone I use Vim (I do this a lot because inspiration to work on programming often comes when I am in public). I only use Jupyter for visualizing data, it's faster with that.

## Python Classes

The below code should be self explanatory

A class with no input

``` python
#!/bin/env python3
'''prints the result of a certain operation
  import ops
  a=ops.Operations() # try a.x, a.exp, and a.print_output()
'''
from math import exp

class Operations:
    def __init__(self):
        self.x=[k for k in range(10)]
        self.exp=[exp(k) for k in self.x]

    def print_output(self):
        '''prints outputs'''
        for k in zip(self.x,self.exp):
            print(k[0],k[1])
   
if __name__=="__main__":
    Operations().print_output()
else:
    print('imported..')
    print(__doc__)
```

With input

``` python
#!/bin/env python3
'''prints the square and the cube of your input
This program can be used as a script, in which it asks the user for the number to be squared and cubed, or interactively as a python module, as follows:
  import powers
  p=power.Powers(3)  
  p.print_output()
'''
class Powers:
    def __init__(self,x):
        self.x=x
        self.xsquare=self.x**2
        self.xcube=self.x**3
    def print_output(self):
        '''prints outputs'''
        print(self.x)
        print(self.xsquare)
        print(self.xcube)
    def help(self):
        '''prints help'''
        print(__doc__)

if __name__=="__main__":
    x=float(input('input > '))
    Powers(x).print_output()
else:
    print('imported..')
    print(__doc__)
```
