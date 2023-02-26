---
layout: post
title: "Pandas Plots"
date: 2018-08-28
categories: jekyll update
---

An example of data analysis and plotting using Pandas, for your reference. See [this link](https://github.com/azizcodes/azizcodes.github.io/blob/master/assets/MoE_data.ipynb) for the results.

``` python
import pandas as pd
import matplotlib.pyplot as plt

class Plots:
    def __init__(self):
        self.df_crude_prod=pd.read_excel(crude_prod).loc[:0]
        self.df_e_consumption=pd.read_excel(e_consumption).loc[:199]
        self.df_natgas_prod=pd.read_excel(nat_prod)
        
    def plot_e_consumption(self):
        yearly=self.df_e_consumption[['Year','Electricity consumption (GWh)']].groupby('Year').sum()
        yearly.plot(title='Total Energy Consumption')
        plt.show()
        return yearly

    def plot_nat_gas(self):
        df_natgas_prod=self.df_natgas_prod.drop(['Natural gas marketed production\n(million standard cu m)'],axis=1).T
        df_natgas_prod.columns=['natgas']
        df_natgas_prod.plot(title='Natural Gas Production')
        plt.show()

    def stacked_bar_e_consumption(self):
        summary=self.df_e_consumption.groupby(['Year','consumbiion category']).sum()
        e=summary.reset_index()
        e.columns=['year','category','consumption']
        e.year=e.year.apply(lambda x:int(x))

        commercial=e[e['category']=='Commercial'].set_index('year')
        commercial.drop('category',axis=1,inplace=True)
        commercial.columns=['commercial']

        government=e[e['category']=='Government'].set_index('year')
        government.drop('category',axis=1,inplace=True)
        government.columns=['government']

        industrial=e[e['category']=='Industrial'].set_index('year')
        industrial.drop('category',axis=1,inplace=True)
        industrial.columns=['industrial']

        residential=e[e['category']=='Residential'].set_index('year')
        residential.drop('category',axis=1,inplace=True)
        residential.columns=['residential']

        others=e[e['category']=='Others'].set_index('year')
        others.drop('category',axis=1,inplace=True)
        others.columns=['others']

        bars=pd.concat([residential,industrial,commercial,government,others],axis=1)
        ax=bars.loc[2011:2020].plot.bar(stacked=True,rot=0,title='Total Energy Consumption')
        ax.set(ylabel='GWh')
        plt.show()
        return bars

    def twinx_oil_production_e_consumption(self):
        df_crud_prod=self.df_crude_prod.drop(['Daily crude oil production (average)(1,000 b)\nMBD'],axis=1).T
        df_crud_prod.columns=['production']

        g=self.df_e_consumption[['Year','Electricity consumption (GWh)']].groupby('Year').sum()
        gg=df_crud_prod
        ggg=pd.concat([g,gg],axis=1)
        ggg.index=[int(k) for k in ggg.index]
        g4=ggg.loc[2011:2020]
        g4.columns=['consumption','production']

        color1= 'tab:red'
        ax1=g4['consumption'].plot(color=color1)
        ax1.legend(['Electricity Consumption'])

        ax2 = ax1.twinx()

        color2= 'tab:green'
        ax2=g4['production'].plot(color=color2)
        ax2.legend(['Oil Production'])
        plt.show()
        return g4

    def regions_consumption_pie(self):
        df_e_consumption_2011=self.df_e_consumption[df_e_consumption['Year']==2011]
        by_region_2011=df_e_consumption_2011[['Region','Electricity consumption (GWh)']].groupby(['Region']).sum()
        ax=by_region_2011['Electricity consumption (GWh)'].plot.pie(title='E consumption by region (GWh), 2011')
        ax.set(ylabel='')
        plt.show()
        return by_region_2011
        
data=[
    'crude-oil-production.xlsx',
    'electricity-consumption-2011-2020.xlsx',
    'natural-gas-production.xlsx']

# data files
crude_prod=data[0]
e_consumption=data[1]
nat_prod=data[2]
```

