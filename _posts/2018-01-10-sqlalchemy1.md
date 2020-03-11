---
layout: post
title: "SQLAlchemy, Web Apps"
date: 2018-06-01
categories: jekyll update
---
## Web App 1
A major update for [my first flask app]() is in [this repoistory](https://github.com/azizcodes/webapptemplate) which I am going to clean up (the name of the database, include dummy data) later. For now here are some lessons learned.

## Flask
Here is a description of the most important functions
* `Flask` starts an instant of Flask with `app = Flask(__name__)` (see below)
* `render_template` renders an HTML template
* `request` gets various parts of the HTTP request, such as the url and the form variables 
* `redirect` an HTTP redirect
* `url_for` gets the url for the route functions
* `flash` shows flash messages

Below are some usage examples.

### Initializing a Database
The following assumes there is an existent sqlite database called `records.sqlite3`.
``` python
from flask import Flask
from sqlalchemy.sql import extract
import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///records.sqlite3'
app.config['SECRET_KEY']="random string"
db=SQLAlchemy(app)
```
### Queries with SQLAlchemy
``` python
# import all records in the database
result1=records.query.all() 
# import all distinct records of student.trip
result2=db.session.query(records.trip).distinct() 
# import all records from student.frm field filtered by year
xyear=2019
result3=db.session.query(records).filter(extract('year',records.frm)==xyear).all()
```
### Queries with SQL in Pandas
``` python
string=f"SELECT * FROM students WHERE trip={repr(trip)}"
conn = db.engine.connect().connection
df=pd.read_sql(string,conn)
```
## Including Dash in a Flask App
Suppose you have a simple Dash app such as the following (from the Dash website)
``` python
dash_app =Dash(__name__, server=app,url_base_pathname='/pathname/')
dash_app.layout = html.Div(children=[
  html.H1(children='Hello Dash'),
  html.Div(children='''
      Dash: A web application framework for Python.
  '''),
  dcc.Graph(
      id='example-graph',
      figure={
          'data': [
              {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'SF'},
              {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': u'Montréal'},
          ],
          'layout': {
              'title': 'Dash Data Visualization'
          }
      }
  )
])
```
Where `app` is the Flask instance we initialized above. You can direct routes to this app like this
``` python
@app.route('/plotly_dashboard') 
def render_dashboard():
    return redirect('/pathname')
```
To get real data for this Dash app, use queries such as before, e.g.
``` python
result1=records.query.all() 
```
returns a list from which all the data can be extracted.