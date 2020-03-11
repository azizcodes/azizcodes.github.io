---
layout: post
title: "Plotly Maps"
date: 2018-05-17
categories: jekyll update
---

Hover over the map, scroll to zoom in and out, double click to reset the view.

This map is based off the one in the [Plotly Documentation](https://plot.ly/python/choropleth-maps/)

<iframe src="/assets/world.html" width='800px' height='600px'></iframe>

``` python
import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
from io import StringIO

pyo.init_notebook_mode()

def chpleth(countries,color,name):
    '''A function for highlighting  countries, quickly'''
    values=[1]*len(countries)
    notes=['']*len(countries)
    return go.Choropleth(
        name=name,
        hoverinfo='location+name',
        showscale=False,
        locations = countries,
        z = values,
        text = notes,
        colorscale = [
            [0, color],
            [1, "rgb(220, 220, 220)"]
        ],
        autocolorscale = False,
        reversescale = True,
        marker = go.choropleth.Marker(
            line = go.choropleth.marker.Line(
                color = 'rgb(180,180,180)',
                width = 0.5
            )))

# Input

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_world_gdp_with_codes.csv')

## Group3
countries3=df['CODE']
color3='rgb(220, 220, 220)'
name='Other Countries'
go_choropleth3=chpleth(countries3,color3,name)

## Group1
countries1=['MAR','FRA','EGY','SAU']
color1='#3a7fbc'
name='Visited Countriess'
go_choropleth1=chpleth(countries1,color1,name)

## Group2
countries2=['IRN','KGZ','ITA']
color2='red'
name='Planned Countries'
go_choropleth2=chpleth(countries2,color2,name)

## Group 4: Cities
s='''
city,lat,lon,notes
Marrakech,31.61667,-8,The old capital of Morocco
London,51.50722,-0.1275,The capital of Britain
Riyadh,24.774265,46.738586,The capital of Saudi Arabia
'''

df1=pd.read_csv(StringIO(s),keep_default_na=False)

# Plotly

data = [go_choropleth3,go_choropleth1,go_choropleth2,
        go.Scattergeo(
            hoverinfo='name+text',
            showlegend=True,
            name='branch locations',
            lon = df1['lon'],
            lat = df1['lat'],
            text = df1['city']+'<br>'+df1['notes'].astype(str),
            mode = 'markers',
            marker = dict( 
                size = 8, 
                opacity = 0.8,
                reversescale = True,
                autocolorscale = False,
                symbol = 'circle',
                line = dict(
                    width=1,
                    color='rgba(102, 102, 102)'
                ),
            ))
       ]

layout = go.Layout(
    legend=dict(orientation="h",x=0,y=-.01),
    autosize=True,
#     width=500,
#     height=500,
    margin=go.layout.Margin(
        l=10,
        r=10,
        b=5,
        t=30,
        pad=2
    ),
    title = go.layout.Title(
        text = 'Map 2019'
    ),
    geo = go.layout.Geo(
        scope='world',
        resolution=50,
        center={'lat':40,'lon':22},
        showframe = False,
        showcoastlines = False,
        projection = go.layout.geo.Projection(
            type = 'equirectangular',
            scale=3
        )
    )
)

fig = go.Figure(data = data, layout = layout)
pyo.plot(fig, filename = 'world.html')
```