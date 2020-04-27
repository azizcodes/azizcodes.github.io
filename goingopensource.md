---
layout: page
title: Going Open-Source
permalink: /goingopensource/
---

Below is my recommended list of open source software. I talk about some of these programs throughout the blog but I thought of having everything in one page for quick access. For further reading and documentation for some of these programs, see my [resources page](/resources/)

Replacing Microsoft Office,
* Word 🡪 Office Libre [Writer](https://www.libreoffice.org/discover/writer/). Or write in markdown and convert it to HTML, TeX, or pdf using [pandoc](https://pandoc.org/) (requires [pdflatex](http://www.tug.org/applications/pdftex/))
* Excel 🡪 [Calc](https://www.libreoffice.org/discover/calc/), [Gnumeric](http://gnumeric.org/) is pretty good too
* Powerpoint 🡪 [Impress](https://www.libreoffice.org/discover/impress/). [Revealjs](https://revealjs.com/#/)
* Access 🡪 Not as easy but you can use [SQLite](https://sqlite.org/index.html) and [Postgres](https://www.postgresql.org/)
* For mobile phones, there is a an Office Libre that enables you to view them
* PDF Reader 🡪 [Firefox](https://www.mozilla.org/en-US/firefox/new/)! Use anything by Mozilla. Set it as the default program to open pdfs
* Notepad 🡪 [Sublime](https://www.sublimetext.com/), [Vim](https://www.vim.org/)
* Mail 🡪 use a web client, like [Protonmail](https://protonmail.com/)
* (Very) long Documents 🡪 [LyX](https://www.lyx.org/)

Doing Computations,
* Matlab 🡪 Python (see the blog). Just download [Anaconda](https://www.anaconda.com/) and be a "data scientist"

Plotting,
* Excel 🡪 Javascript's [D3 Library](https://d3js.org/) (see the blog). Note: steep learning curve due to less available documentation. Go with Python for ease of use

OS,
* Windows, Mac 🡪 [Ubuntu](https://ubuntu.com/) and its flavors like [Lubuntu](https://lubuntu.me/)

Photos,
* Vector 🡪 [Inkscape](https://inkscape.org/)
* Raster 🡪 [Gimp](https://www.gimp.org/)
* Conversion 🡪 [Imagemagick](https://imagemagick.org/index.php)
* Organization 🡪 [DigiKam](https://www.digikam.org/)

Torrents,
* μTorrent 🡪 [Transmission](https://transmissionbt.com/)

Wikis,
* () 🡪 [Zim](https://zim-wiki.org/)
* () 🡪 [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki)

Blogging,
* () 🡪 [Wordpress](https://wordpress.org/)
* () 🡪 [Jekyll](https://jekyllrb.com/)


The days of the dominance of Microsoft Office *should* have been over a long time ago. The reason it didn't, I think, is because most people don't realize the alternative is there (I didn't!) and can be just as good or even better. Or business users, because of some chance someone will send them a document that won't open correctly. 

The latter can actually be a problem. There is still a chance you'd have some rendering issues with software in this page, but this is only if the person who made the document used some advanced features *they* shouldn't be using anyway without saving the file as a PDF. These problems can even arise from using different versions of Word, too. Anyway, it's the only reason I haven't wiped out Windows from my work computer entirely. That, and Outlook, which I haven't found a real competitor for in the open source world.

WSL? The Windows Subsystem for Linux is a step in the right direction because you can download all the command line software available for Linux using a package manager like `apt`. Macs have had this advantage on Windows for a long time. However, you would only be able to run programs from the command line (to my knowledge), so Macs still have an advantage.

What's even better is that you teach yourself to do everything in text, and learn the Unix command line, and maybe some web technology.

> This is the Unix philosophy: Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.
>
> — Doug McIlroy on Unix programming
