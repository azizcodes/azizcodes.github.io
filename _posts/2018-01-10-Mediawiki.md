---
layout: post
title: "MediaWiki"
date: 2018-06-05
categories: jekyll update
---

Installing Mediawiki
--------------------

Here it is on MediaWiki 

[https://www.mediawiki.org/wiki/Manual:Installation_guide](https://www.mediawiki.org/wiki/Manual:Installation_guide).

I show the approach to install on [windows 10 with WSL enabled](https://docs.microsoft.com/en-us/windows/wsl/install-win10). The same approach can be used with Linux (Ubuntu). Use the below commands from the linux command line.

### Install requirements
Run this from the linux command line (activated with the command `wsl` on Windows 10)
```
sudo apt-get install php php-apcu php-intl php-mbstring php-xml php-mysql mariadb-server apache2
```
### Download
Download mediawiki  from here

[https://www.mediawiki.org/wiki/Download](https://www.mediawiki.org/wiki/Download)

unpack it
```
tar xvzf mediawiki-*.tar.gz
```
rename the mediawiki folder and put it under `/var/www/html/w/` using `cp`
```
mv mediawiki-* w
cp -r w /var/www/html
```
### Starting the Webserver
Now you can run the installation wizard after you run the apache service
```
service apache2 restart
```
Go to localhost on your browser. If it works ok, then the service is running

Now go to `localhost/w/`. You will see the mediawiki installation wizard.

### Connecting to Database
The wizard will run smoothly after you run the database server. 
I will use the Mariadb approach described here https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki

```
mysql -uroot
```

Then run the following commands

```
CREATE DATABASE wikidb;
CREATE USER 'wikiuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON wikidb.* TO 'wikiuser'@'localhost' WITH GRANT OPTION;
```
You will need this for the setup: `wikidb` is the name of the databse. `wikiuser` is going to be main user and `password` is his password. You will need this

<span style="font-family:times; color:red;">
Note: I had a problem on one of my computers that I installed mediawiki on because of the existence of another installation on Windows. I was able to access mysql on WSL after I instaled the one on Windows.
</span>

### Install Extensions
[Scribuntu](https://www.mediawiki.org/wiki/Extension:Scribunto), others.

### Importing Pages
Pages can be norma wikipedia pages, templates, modules, etc. This is how you import pages from Wikipedia. List the pages to export here [https://en.wikipedia.org/wiki/Special:Export](https://en.wikipedia.org/wiki/Special:Export).

Then on the local mediawiki installation, list the pages to import here [http://localhost/w/special:import](http://localhost/w/special:import).
