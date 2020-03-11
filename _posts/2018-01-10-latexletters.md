---
layout: post
title:  "LaTeX Letters"
date:   2018-05-10
categories: jekyll update
---

This post is about doing the simple things in LaTeX.

* Installation on Linux
* Writing a letter.
* Finding a font.
* Finding information

I find the instructions to be a little poorly written. So here are the azizcodes instructions:

So here they are in English if you have Ubuntu:
* Install Tex-Live. Yes, not ProTeXt. It's over 3 GB and it didn't work on my Windows 10, which suggests it's not updated as well as Tex-Live.
* To install Tex-Live, `sudo apt-get tex-live`
* You will find that it installed LyX which is good but I don't like it as much for short documents like letters. TeXworks is great for that. Install it with `sudo apt-get install texworks
`.
* To view the documentation, you need to install `apt-get install perl-tk` if you don't have it.

## Templates
Two templates are included in TeXworks. One for articles and the other for letters. You can change the contents and press the green button to see the output in pdf. Tip: save the `.tex` in it's own folder because it generate many intermediate files that would clutter your computer if you don't.

## Fonts
* [From WikiBooks](https://en.wikibooks.org/wiki/LaTeX/Fonts)
* [Check the font catalogue](http://www.tug.dk/FontCatalogue/)

From the font catalogue, I selected this font: [EB Garamond](http://www.tug.dk/FontCatalogue/ebgaramond/). which can be included this way

```
\usepackage[cmintegrals,cmbraces]{newtxmath}
\usepackage{ebgaramond-maths}
\usepackage[T1]{fontenc}
```

## Input
``` latex
\documentclass[a4paper,12pt]{letter}

% Fonts
% Get them from here http://www.tug.dk/FontCatalogue/
\usepackage[cmintegrals,cmbraces]{newtxmath}
\usepackage{ebgaramond-maths}
\usepackage[T1]{fontenc}

% Some of the article customisations are relevant for this class

\name{} % To be used for the return address on the envelope
\signature{} % Goes after the closing (ie at the end of the letter, with space for a signature)
% Alternatively, these may be set on an individual basis within each letter environment.
%\makelabels % this command prints envelope labels on the final page of the document

\begin{document}
\begin{letter}{}
%\fontfamily{ptm}\selectfont

\opening{Dear Candidate,} % eg Hello.

This letter is to inform you that you have been admitted to the program. 

We looked at your qualifications and were astonished by your level of competence and achievement that we thought we have to see it for ourselves. Seriously, wow.

We were also impressed by your patience, courage and determination to overcome such difficult circumstances. We were totally moved by your letter and so deeply touched we were in tears. 

Please consider choosing us, we are sure if you applied anywhere else they would pick you. It is our honor, we are dying to see you.

\closing{Sincerly,} % eg Regards,

%\cc{} % people this letter is cc-ed to
%\encl{} % list of anything enclosed
%\ps{} % any post scriptums. ``PS'' labels must be put in manually

\end{letter}
\end{document}
```
## Output
The output is shown below

<!-- ![](/assets/letterlatex.svg) -->

<div style="width: 1200px; overflow: hidden;  margin: -300px 0 0 -100px;">
    <img src="/assets/letterlatex.svg">
</div>

