---
layout: post
title: "Object-Oriented Programming"
date: 2018-01-24
categories: jekyll update python
---
# OOP: Object-Oriented Programming 
Re-doing an earlier example (see Example 2 in [this post]({% post_url 2018-01-10-distributingsalaries %})), the OOP way.

## Input

```python
import csv

# object oriented
class Cash:
    '''description'''
    def __init__(self, name, salary): 
        self.name=name
        self.salary=salary
        self.n500=salary//500
        self.n100=salary%500//100
        self.n50=salary%500%100//50
        self.n10=salary%500%100%50//10
        self.n5=salary%500%100%50%10//5
        self.n1=salary%500%100%50%10%5//1

    def isheoverpaid(self):
        if self.salary>1000:
            print('this person is over paid')
        else:
            print('no')

    def report(self):
        print('\nEmployee name: {}'.format(self.name))
        print('Employee salary: {}'.format(self.salary))
        print('Salary breakdown:')
        print('{} x500'.format(self.n500))
        print('{} x100'.format(self.n100))
        print('{} x50'.format(self.n50))
        print('{} x10'.format(self.n10))
        print('{} x5'.format(self.n5))
        print('{} x1'.format(self.n1))
        print('Is [s]he over paid?')
        self.isheoverpaid()


def printall():
        for j in range(len(emp)):
            emp[j].report()

# input
with open('salaries.csv') as csvfile:
    v=csv.reader(csvfile)
    names=[]
    salaries=[]
    for x in v:
        name=x[0]
        salary=x[1]
        names.append(name)
        salaries.append(salary)

# processing
salaries=[int(k) for k in salaries]

total_names=len(names)
total_salaries=sum(salaries)

# Cash class
emp=[]
for j in range(len(names)):
    emp.append(Cash(names[j],salaries[j]))

total_n500=sum([emp[j].n500 for j in range(len(emp))])
total_n100=sum([emp[j].n100 for j in range(len(emp))])
total_n50=sum([emp[j].n50 for j in range(len(emp))])
total_n10=sum([emp[j].n10 for j in range(len(emp))])
total_n5=sum([emp[j].n5 for j in range(len(emp))])
total_n1=sum([emp[j].n1 for j in range(len(emp))])

# output
print('\nTotal employees: {}'.format(total_names))
print('Total salaries: {}'.format(total_salaries))
print('\nYou need to get:')
print('{} x500'.format(total_n500))
print('{} x100'.format(total_n100))
print('{} x50'.format(total_n50))
print('{} x10'.format(total_n10))
print('{} x5'.format(total_n5))
print('{} x1'.format(total_n1))
```
## Output
```
Python 3.6.4 (default, Jan  7 2018, 03:53:53) 
[GCC 4.2.1 Compatible Android Clang 5.0.300080 ] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from change3 import*

Total employees: 3
Total salaries: 6906

You need to get:
13 x500
2 x100
3 x50
4 x10
2 x5
6 x1
>>> dir()
['Cash', '__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'csv', 'csvfile', 'emp', 'j', 'name', 'names', 'printall', 'salaries', 'salary', 'total_n1', 'total_n10', 'total_n100', 'total_n5', 'total_n50', 'total_n500', 'total_names', 'total_salaries', 'v', 'x']
>>> emp
[<change3.Cash object at 0xa9506b50>, <change3.Cash object at 0xa9506b90>, <change3.Cash object at 0xa9506bf0>]
>>> emp[0]
<change3.Cash object at 0xa9506b50>
>>> dir(emp)
['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
>>> dir(emp[0])
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'isheoverpaid', 'n1', 'n10', 'n100', 'n5', 'n50', 'n500', 'name', 'report', 'salary']
>>> emp[0].report()

Employee name: ahmed
Employee salary: 4067
Salary breakdown:
8 x500
0 x100
1 x50
1 x10
1 x5
2 x1
Is [s]he over paid?
this person is over paid
>>> emp[0].salary
4067
>>> emp[0].name
'ahmed'
>>> printall
<function printall at 0xa9701b28>
>>> printall()

Employee name: ahmed
Employee salary: 4067
Salary breakdown:
8 x500
0 x100
1 x50
1 x10
1 x5
2 x1
Is [s]he over paid?
this person is over paid

Employee name: norah
Employee salary: 2050
Salary breakdown:
4 x500
0 x100
1 x50
0 x10
0 x5
0 x1
Is [s]he over paid?
this person is over paid

Employee name: sinjab
Employee salary: 789
Salary breakdown:
1 x500
2 x100
1 x50
3 x10
1 x5
4 x1
Is [s]he over paid?
no
>>>
```

