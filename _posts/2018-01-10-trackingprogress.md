---
layout: post   
title:  "Tracking Progress"
date: 2018-01-24
categories: jekyll update python
---
# Tracking Progress by CSVs
This program prompts the user for input and stores data into a CSV, and writes a date of the record. I made two versions, one for food and one for exercise, but the idea can be generalized to anything.

![food]({{ "/assets/food.png" | absolute_url }})

![exercises]({{ "/assets/exercises.png" | absolute_url }})

## Food
```python
import datetime

def print_food():
    for j in food:
        print('today: {}, breakfast: {}, lunch: {}, dinner: {}, snacks: {}, stomach: {}'.format(today,breakfast[j],lunch[j],dinner[j],snacks[j],stomach[j]))


# input
ans1=input("input food data? type 'yes' to do this..")

breakfast=[]
lunch=[]
dinner=[]
snacks=[]
stomach=[]
if ans1=='yes':
    print('food:\n')
    breakfast.append(input('breakfast?'))
    lunch.append(input('lunch?'))
    dinner.append(input('dinner?'))
    snacks.append(input('snacks?'))
    stomach.append(input('stomach?'))
    food=range(0,max([len(breakfast),len(lunch),len(dinner),len(snacks),len(stomach)]))
else:
    print('bye')
    exit()
# processing
today=datetime.datetime.today() # strftime
today=datetime.datetime.strftime(today,'%Y-%m-%d')
print_food()

ans2=input("write to log? type 'yes' to do this")

# writing output to file
if ans2=='yes':
    with open('food.csv','a') as f:
        for j in food:
            f.write('{},{},{},{},{},{}\n'.format(today,breakfast[j],lunch[j],dinner[j],snacks[j],stomach[j]))
```

## Exercise

```python
import datetime

def print_exercise():
    for j in range(len(exercise)):
        print('today: {}, exercise: {}, sets: {}, reps: {}, kilos: {}'.format(today,exercise[j],sets[j],reps[j],kilos[j]))

# input

ans1=input("input exercises? type 'yes' to do this..")


exercise=[]
sets=[]
reps=[]
kilos=[]
if ans1=='yes':
    ans2='yes'
    while ans2=='yes':
        print('exercises:\n')
        exercise.append(input('exercise name?'))
        sets.append(input('number of sets?'))
        reps.append(input('number of reps?'))
        kilos.append(input('how many kilos?'))
        ans2=input('more entries?')
else:
    print('bye')
    exit()
    
# processing
today=datetime.datetime.today() # strftime
today=datetime.datetime.strftime(today,'%Y-%m-%d')
print_exercise()
ans3=input("write to log? type 'yes' to do this")
    
# writing output to file
if ans3=='yes':
    with open('exercise.csv','a') as f:
        for j in range(len(exercise)):
            f.write('{},{},{},{},{}\n'.format(today,exercise[j],sets[j],reps[j],kilos[j]))     
```
