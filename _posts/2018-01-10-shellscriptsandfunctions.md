---
layout: post
title:  "Shell Scripts (and Functions)"
date:   2018-03-14
categories: jekyll update
---

![gif]({{ "/assets/gif1.gif" | absolute_url }})

## Shell Scripts Basics

A shell script is a file containing a list of shell commands. The shebang `#!/bin/bash` tells your computer to use the shell interpreter.

To run a shell script, you first need to make the file executable using `chmod`

```
chmod 700 file # 700 is executable for the user only
```
Then you can either run it directly using 
```
./file
```
or add it to the path.

## Shortcuts
If you want the script to run from anywhere in the terminal (very convenient), you either have to add the current folder to the path, or add it to a folder that's in the path. Some users put it in `~/bin`. To do this, type the following in the termianal

```
$ cd ~
$ mkdir bin
```
Change the permission 

```
$ chmod 700 -R bin
```
Make the changes available for the next sessions

```
$ export PATH="~/bin/:$PATH" >> .bash_profile
```

## Note
It's worth noting that python scripts can work the same way. By adding a shebang `#!/bin/python` at the beginning of the file, you don't need the `.py` extension and you can run scripts directly. So now instead of

```
python whatever.py
```
you can just type

```
whatever
```

where `whatever` is a python script that has `#!/bin/python` as the first line. And placed in a folder that's part of the path (such as `bin` above).

## A simple Application

Suppose you are searching for jobs. You can write a short command that opens a linkedin page, a bayt.com page, and the document where you keep your notes. To do this, `cd` to the `~/bin` folder in the terminal and paste this

```
cat << EOF > jobsearch2
#!/bin/bash 
open linkedin.com
open bayt.com
open ~/Documents/jobsearch.txt
EOF
```
Make it executable

```
chmod 700 jobsearch2
```

Then execute this command from anywhere

```
jobsearch2
```
The above gif is a demonstration of how this works.



## Shell Functions
While on the topic of shortcuts, I need to mention _shell functions_. I talked about [before]({% post_url 2018-01-10-OrganizingThoughts %}). Just like shell scripts and functions, they are shortcuts. However, aliases are one-liners. Scripts need setting file permissions and maybe for non-frequent use. Shell functions are something in the middle between a script and an alias. They are for frequent use but can be longer than an alias.

The syntax is as follows

``` bash
name(){
	shell commands
}
```
where `name` is the name of the shell function.

For example, here is a function that modifies my prompt script `$PS1` into whatever I want to call it, or just display the current time when called with the number of arguments not equal to 1

``` bash
showtime(){
        PS1="\[\033[0;33m\]\@\$\[\033[0m\] "

        if [ $# -eq 1 ]; then
                PS1=$1'\$ '
                PS1="\[\033[0;33m\]$1\$\[\033[0m\] "
        fi
}
```

بس خلاص
