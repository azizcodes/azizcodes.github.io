---
layout: post
title:  "Organizing Thoughts #1"
date:   2018-01-02
categories: jekyll update linux
---

# Mapping Keyboard Keys in Vim

Using text files for organizing thoughts using certain features of the [Vim](http://www.vim.org/) text-editor. For downloads, go on [this Github repository](http://github.com/azizcodes/vim).

## Introduction

In the past I have used (and I recommend):

* [TiddlyWiki](https://tiddlywiki.com/)
* [WordPress](https://wordpress.org/)
* [Zim](http://zim-wiki.org/)


A quick comparison, I have used *TiddlyWiki* for a long time. It's simple and designed to be contained in one HTML page.

*WordPress* (on localhost) is more flexible, and it can add plugins and themes. My favorite feature is that put the posts in categories (great for organizing projects). However, it's kind of a hassle to install it ([here is how](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-on-ubuntu-14-04#step-five-%E2%80%94-complete-installation-through-the-web-interface) from DigitalOcean, a great place for tutorial btw).

*Zim* is my new favorite. It is the closest thing to a digital notebook. My favorite feature is that it has most of the features of WordPress, it's faster, and exports to different formats including Latex, Markdown, and HTML. It is easy to install. Nowadays I use it at work to keep meeting notes, among other things.

## Usage

When I was using Windows *Notepad*, I was writing files such as this

![notepad]({{ "/assets/notepad.PNG" | absolute_url }})
*Notepad (Windows)*

The date and time were generated by typing `F5`. Now that I am a Linux user, I was looking for a way to do the same thing using Vim, but I wanted to add more buttons to help me organize tasks. For example

```
F2 = #Done!
F3 = #Task
F4 = #Project
F5 prints the current date and time
F6 prints a horizontal line
F7 = #Work
```
The way to do this is through modifying the .vimrc file.

### Modifying .vimrc

In the home directory in the terminal, type

```
vi .vimrc
```
and copy the contents of [this page](http://raw.githubusercontent.com/azizcodes/vim/master/.vimrc) to it, and save your changes.

![sed]({{ "/assets/sedvimrc.png" | absolute_url }})
*.vimrc file*

What about filtering all lines that has tags like `#Task` and `#Projecti`?

### Tasks And Projects

Now that these tasks and projects have these tags, I can go through them quickly using Vim's search function. Or, I can use SED to get me all the lines marked with `#Task` or `#Project`. Like this (see below section for creating aliases):

```
alias list_t='sed -n '/#Task/p' journal.txt'
alias list_p='sed -n '/#Project/p' journal.txt'
```
As I started to use this system more, and forget to delete the tasks I finish or mark them with `#Done!`, the task list got very long and making decisions became more time-consuming. I solved this problem by splitting the things that I want to do into tasks and projects, then classifying them by order of importance. Like this

```
#TaskH (or #ProjectH) - immediate tasks or projects that I am definitely gonna do.
#TaskM (or #ProjectM) -tasks and projects I am definitely gonna do but are not urgent.
#TaskL (or #ProjectL) - tasks and projects I wanna do if I have the time for them.
```

Then, to be able to search for these task, type in the terminal:

```
list_t # to list all the tasks
list_p # to list all the projects
list_d # to list all the things marked as #Done!
```
![list_t]({{ "/assets/list_t_termux.png" | absolute_url }})
*Listing tasks in Termux*

This was accomplished by creating aliases (see the process below). Similarly, these commands show only tasks marked as H, M, or L importance: 

```
list_tH # lists HIGH importance tasks
list_tM # lists MEDIUM importance tasks
list_tL # lists LOW importance tasks
```
### Creating Aliases

You do this by modifying the .bashrc. In the home directory, type

```
vi /etc/bash.bashrc
```
And add your commands ([here are mine](https://raw.githubusercontent.com/azizcodes/vim/master/bash.bashrc), including additional functions). You will need to restart for the changes to take effect.

See how to do this on [Termux]({% post_url 2018-01-10-Termux %}).
 
