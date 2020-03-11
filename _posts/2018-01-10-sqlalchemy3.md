---
layout: post
title: "Databases in Python"
date: 2018-06-03
categories: jekyll update
---

This post is about manipulating SQL databases. 

Why a database instead of a text file? I have been recently confronted with the problem of storing information like multiline texts in a file. Is there a way for this to work with CSV files? Idk, but with databases this can be done easily as you will see below[^1].

# sqlite3 Module

``` python
import sqlite3
import pandas as pd
```
## Creating a Database
Using Python's [sqlite3 module](https://docs.python.org/3.7/library/sqlite3.html)
``` python
conn=sqlite3.connect('example.db')
c=conn.cursor()
```
Now SQL commands can be performed, such as
``` python
c.execute('CREATE TABLE contacts (email1, email2, primarycontact)')
```
## Inserting values
``` python
for i in range(5):
    c.execute("INSERT INTO contacts VALUES ('zyx@xyz','cba@abc','Dr. D')")

conn.commit()
conn.close()
```
great. Now let's see if we can include a multiline text

``` python
s='''
this 
multi
line
string
'''
t=('wvu@uvw','gfe@gfe',s)
c.execute('INSERT INTO contacts VALUES (?,?,?)', t)
conn.commit()
conn.close()
```
## Reading the contents of the Database

``` python
pd.read_sql('SELECT * FROM contacts',conn)
```

# sqlalchemy Module

## Creating a Database

``` python
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, create_engine
metadata = MetaData()
users = Table('users', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('fullname', String),
)
addresses = Table('addresses', metadata,
  Column('id', Integer, primary_key=True),
  Column('user_id', None, ForeignKey('users.id')),
  Column('email_address', String, nullable=False)
 )

engine = create_engine('sqlite:///example2.db')
metadata.create_all(engine)
connection = engine.connect()
```

## Reading the contents of the Database
Following SQLAlchemy's [basic tutorial](https://docs.sqlalchemy.org/en/13/core/tutorial.html)
``` python
users=pd.read_sql_table('users', connection)
```

## Inserting values
``` python
ins = users.insert()
# str(ins)
ins = users.insert().values(name='Jack', fullname='Jack Jones')
# ins.compile().params 
result = connection.execute(ins)
```

&#9632;

---
[^1]: Now i know that I could have used characters such as '\n' in pandas.