---
layout: post
title:  "Executing Python Scripts"
date:   2018-04-01
categories: jekyll update python
---
(poorly written, revise)

## which Interpreter?

This simple program shows how many days remain until a future date.

Simply add this script to `~/bin` (or another folder in your path) and make it executable.

``` python
#!/Users/fy/anaconda3/bin/python
# daysleft: a program to show how many days are left until a future date

import datetime

# input
event='The Exam'
future_date=datetime.date(2019,3,28)

#
today=datetime.date.today()
days_left=future_date-today

print(f'Today is {today}')
print(f'{days_left.days} days are left until {event} on {future_date}')
```
Note: The first line is the output of

``` bash
azizcodes$ which python
/Users/fy/anaconda3/bin/python
```
Executing,

``` bash
azizcodes$ daysleft
Today is 2019-03-18
10 days are left until The Exam on 2019-03-28
```
which is shorter than writing `python script.py` each time.

### A More Flexible Way

A more flexible way of specifying the interpreter is using `#!/usr/bin/env python`. From [Stackoverflow](https://stackoverflow.com/questions/5709616/whats-the-difference-between-these-two-python-shebangs)

> #!/usr/bin/python is hardcoded to always run /usr/bin/python, while #!/usr/bin/env python will run whichever python would be default in your current environment (it will take in account for example $PATH, you can check which python interpreter will be used with which python). The second way ( #!/usr/bin/env python ) is preferred , as it's not dependent on particular installation. It will work for example with virtualenv setups or systems where there is no /usr/bin/python, but only e.g. /usr/local/bin/python.

## Calling Python from with Bash

Here is an example. Call this file `python_from_bash`.

``` bash
#!/bin/bash

python_code(){
cat << EOF
# script.py
import datetime
event='The Exam'
future_date=datetime.date(2019,3,28)
today=datetime.date.today()
days_left=future_date-today
print(f'Today is {today}')
print(f'{days_left.days} days are left until {event} on {future_date}')
EOF
}

python -c "$(python_code)"
```
Now run

``` bash
azizcodes$ python_from_bash
```
and it should execute. This has the advantage of having a whole program contained in one file, if that's what you want. Ofcourse, you can run the following just as easily

```
#!/bin/bash

python script.py
```

## Speaking of Executing Strings..

```
bash -c string
```
This command  executes `string`. This opens the possibility of getting a string through `curl` and executing it on the fly, such is done by [Homebrew](https://brew.sh/) (with Ruby, though, but same idea)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

which can be an easy and transparent way of installing scripts. Unfortunately, as famous Homebrew is, I haven't seen people use this trick. But I am gonna change that, because it's too elegant! 

# A Start-Up Script
Here is a small project: I have my preferences saved in my `.bash_profile` but I have many devices. It would be nice if I can have one folder of user scripts synchronized across all of them. By downloading a git file (and pulling the updated version, if it is already there) and then copying the scripts to the `~/bin/` folder and making them executable.

All in one command:

```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/azizcodes/myscripts/master/download)" 
```
which executes [this script](https://github.com/azizcodes/myscripts/blob/master/download).

This command will do the following
*  Download the following files to `~/projects/myscripts` (or update that folder if it exists, through a `git pull`) 
  * README 
  * `bin_info`, run this command to show usage instructions
  * `add_profile`, run this command to copy the `.bash_profile`
  * `bashprofile`, for your reference, a list of shell function
  * `download`, for your reference, the script to download `myscripts`
* Copies the scripts to `~/bin`
* Make them executable

## Workflow
* To upload, make changes and push them to the shared repository from the device
* To download, just execute the above  command

*PS: I know I can just simply clone `~/bin` from a git repository and keep it synchronized, which is probably a lot easier. But I wanted to test and illustrate this method.*
