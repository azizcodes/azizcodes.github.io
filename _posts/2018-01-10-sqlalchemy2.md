---
layout: post
title: "WTForms"
date: 2018-06-02	
categories: jekyll update
---

Many thanks to [Pretty Printed](https://www.youtube.com/channel/UC-QDfvrRIDB6F0bIO4I4HkQ) from YouTube.

This post is about WTForms, check out their [crash course](https://wtforms.readthedocs.io/en/stable/crash_course.html). As I am designing this app to work on the phone, I wanted better usability with date fields:  I wanted them to defualt to the current date and to select them from a calendar instead of entering strings manually.

Let's try that with a simpler (but very similar) example than the previous [web app]({% post_url 2018-01-10-sqlalchemy1 %})
. Specifically, this form is going to be recording the following
* log_name
* notes
* date

## Here is How

### Define the Class
In addition the imports you usually would need for web apps, as [before]({% post_url 2018-01-10-sqlalchemy1 %})
``` python
import platform
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
```
import the following from wtforms and flask_wtf

```python
from flask_wtf import Form
from wtforms import StringField
from wtforms.fields.html5 import DateField
```
Now, for the database model,
``` python
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///records.sqlite3'
app.config['SECRET_KEY'] = "random string"
db = SQLAlchemy(app)

class records(db.Model):
    id=db.Column('record_id', db.Integer, primary_key = True)
    log_name=db.Column(db.String(10))
    notes=db.Column(db.String(100))
    date=db.Column(db.String(100))

    def __init__(self, log_name, notes,date):
        self.log_name=log_name
        self.notes=notes
        self.date=date
```
define the following class for the form
``` python
class TheForm(Form):
	username=StringField('username')
	details=StringField('details')
	entrydate=DateField('entrydate',format='%Y-%m-%d')	
```

### Create an HTML Form
The HTML form (the backslashes below are for display purposes, remove them in your code)
``` html
<!DOCTYPE html>
<html>
<head>
	<title>bform</title>
</head>
<body>
	<form method="post">
		<h3>log_name</h3>
			{\{form.username}\}
		<h3>notes</h3>
			{\{form.details}\}
		<h3>date</h3>
			{\{form.entrydate}\}
		<input type="submit" value="Submit" />
	</form>
</body>
</html>
```
By submitting the form, the user will send the data to the app through an HTTP request.

### Process the Data from the Request
Add the route
``` python
@app.route('/bform', methods = ['GET','POST'])
def bform():
	if request.method == 'POST':
		record = records(request.form['username'], request.form['details'], request.form['entrydate'])
		db.session.add(record)
		db.session.commit()
		flash('Record was successfully added')
		return redirect(url_for('show_all'))
	form=TheForm()
	return render_template('bform.html',form=form)
```
and you are done!