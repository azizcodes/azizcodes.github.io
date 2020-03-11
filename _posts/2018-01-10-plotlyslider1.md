---
layout: post
title: "Plotly Slider"
date: 2018-05-18
categories: jekyll update
---


<iframe src="/assets/plotlyslider.html" width='600px' height='600px'></iframe>

Thanks to [this source](https://community.plot.ly/t/multiple-traces-with-a-single-slider-in-plotly/16356/2), I can draw interactive plots with Plotly (check the slider).

But why make sliders in Plotly and not Dash? Dash is all about interactive plots, and its simpler syntax than this. However, this approach doesn't require a webserver and can therefore be deployed faster. 

``` python
import numpy as np
import plotly.graph_objs as go
from plotly.offline import init_notebook_mode, iplot, plot
init_notebook_mode()

#
num_steps = 3
x=np.arange(0,5,.1)

trace_list1 = [
    go.Scatter(x=x,y=1*x, visible=True, line={'color': 'red'}, name='y=1*x',mode='markers+lines'),
    go.Scatter(x=x,y=2*x, visible=False, line={'color': 'red'}, name='y=2*x',mode='markers+lines' ),
    go.Scatter(x=x,y=3*x, visible=False, line={'color': 'red'}, name='y=3*x',mode='markers+lines')
]

trace_list2 = [
    go.Scatter(x=x,y=0*x+4, visible=True, line={'color': 'blue'}, name='y=4'),
    go.Scatter(x=x,y=0*x+4, visible=False, line={'color': 'blue'}, name='y=4'),
    go.Scatter(x=x,y=0*x+4, visible=False, line={'color': 'blue'}, name='y=4')
]

fig = go.Figure(data=trace_list1+trace_list2)

# 
steps = []
for i in range(num_steps):
    # Hide all traces
    step = dict(
        method = 'restyle',  
        args = ['visible', [False] * len(fig.data)],
    )
    # Enable the two traces we want to see
    step['args'][1][i] = True
    step['args'][1][i+num_steps] = True
    
    # Add step to step list
    steps.append(step)

sliders = [dict(
    steps = steps,
)]

fig.layout.sliders = sliders
fig.layout.title='title'
fig.layout.yaxis=dict(range=[0, 5])
plot(fig)
```