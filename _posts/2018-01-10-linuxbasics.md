---
layout: post
title: "Linux Command Line Basics"
date: 2018-01-01
categories: jekyll update linux
---
# Linux Command Line Basics

This is a very fast introduction to the Linux Command Line. To get more help on these commands, either type the command with no files to operate on or type the `command --help`. To go deeper into this subject, check out the [resources]() page. It's worth mentioning that everything here applies to the Mac terminal (and everything Unix-based) as well.

## 1 File Navigation

### 1.1 Display Files in a Directory

`ls` displays the contents of a directory. To see other information like file ownership and permissions and hidden files, type

```
ls -al
```

### 1.2 Change Directory

```
cd DIRECTORY
```

## 2 File Operations

### 2.1 Copy

```
cp SOURCE DESTINATION
```

### 2.2 Move (==Rename)

Syntax:
```
mv SOURCE DESTINATION
```
This command is equivelant to cut and paste, as well as file rename.

### 2.3 Delete

*Caution: Make sure you know what what you are doing here, this command is ireversible!* 

```
rm FILE
```
For directories, use option -r

```
rm -r DIRECTORY
```

### 2.4 Wildcards

For example, to remove all files with .pdf extention:
```
rm *.pdf
```
[Here is more info on wildcards](http://www.linfo.org/wildcard.html).

## 3 File Permissions and Ownership
As mentioned before, `ls -al` displays the file permissions and ownership.

* `chown` command changes the ownerships. [More details](https://www.computerhope.com/unix/uchown.htm)
* `chmod`  command changes read/write/execute permissions. [More details](https://www.computerhope.com/unix/uchmod.htm)

Many of the commands above won't execute without the proper user privilege. To force a command to execute, use `sudo` (you will be asked for a password)

```
sudo COMMAND
```

## 4 File Transfer
I covered `ssh`, `scp`,and `rsync` [before]({% post_url 2018-01-10-SSH %}).

## 5 Redirection
Before we go into redirection, let's define two commands that print output to the screen: `echo` and `cat`.

### Echo
```
echo "this comment" # prints "this comment" to stdout (the screen)
```
### Concatenate
Suppose the file file.txt contains the following:

```
aziz is awesome
this is a beautiful blog
```
The `cat` command stands for *concatenate*, which just types the contents of a file to stdout.

### vi (or other text editors)
vi is a ubiquitous text-editor that's usually preinstalled on most unix-like system. You can use that to create and edit files from the command line.

Back to redirection, suppose you want to redirect this output to a file or another command, you can use `|, >,<,>>,<<`. See some examples below.

### Examples

``` bash
# these are the some ways you can use redirection

# piping
cat file.txt|grep aziz # displays the line that has the word 'aziz' using grep. This sign | is called a pipe, because redirects the output of the first command to the second.

# creating file
cat file.txt > file2.txt # (use the single > with caution) writes the contents of file.txt to file2.txt

# adding to a file
cat file.txt >> file2.txt # appends the output from the first command to file.txt
# Remember: don't cat a file and redirect it to itself.

echo "this useful comment" >> file2.txt # appends "this useful comment" to file2.txt

cat << EOF # you can think of this as a multi-line echo command
```

### SED
The `grep` command above performs a search through text. To do a lot more functions like this, e.g. find and replace, see [this website](http://www.grymoire.com/Unix/Sed.html#uh-0).
