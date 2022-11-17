---
layout: post
title: "Emacs keyboard macros"
date: 2018-08-26
categories: linux jekyll update
---

Consider the problem of converting a `.vtt` file to a printable table that contains the same info.

`.vtt` is a simple text format for writing subtitles to videos on the internet. After the header `WEBVITT`, it is three lines, one containing the number of the subtitle, the next one is the time range, and the third is the subtitle. The pattern repeats until the end of the file.

```
WEBVTT

1
00:00:28.960 --> 00:00:31.960
la la la 

2
00:00:32.240 --> 00:00:34.920
ha ha ha
```
`sed` is a good tool for such text substitutions, so is perl. However, this is much easier to do with an emacs keyboard macro. I wrote a sed loop before and felt really proud of myself after that, but I forgot how.

# keyboard macros

Refer to the mastering emacs blog for usage [repeating commands in emacs](https://www.masteringemacs.org/article/repeating-commands-emacs) and [here](https://www.masteringemacs.org/article/keyboard-macros-are-misunderstood). 

The steps to do this are as follows: 

1. `C-x (` starts recording the macros
2. `C-SPACE`then select the region
3. apply a regex substitution with `C-M-%`
4. convert the newline character `C-q C-j` to a tab `C-i`
5. you can end recording the macro here with a `C-)` or better, you can place the marker at the beginning of the next subtitle number and then end it
6. apply the macro at the beginning of each subtitle number with `C-x e`
7. now for doing it beautifully, you can repeat the previous command `C-x z` and just pressing `z` after that.

