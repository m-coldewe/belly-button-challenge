# Bellybutton Biodiversity 

## Overview
This project aims to build an interactive dashboard to explore the Belly Button Biodiversity data, which catalogs the microbes that colonize human navels. 

Utilizes Javascript and html, along with d3 and Plotly.

## Purpose
In order to create the interactive dashboard, the program uses a number of functions.  
- initialize(): grabs the data from the website and feeds specific data into the next two functions: optionChanged, and popDropdown
- optionChanged(): registers the initial subject ID and all subsequent ID choices, and pushes that information plus the relevant data sets to functions: popDemos, barChart, and bubbleChart
- popDropdown(): uses the ids from the dataset to populate the dropdown menu for user selection
- popDemos(): compares the provided data to the selected subjectID and shows the demographic information associated with the selected subjectID
- barChart(): graphs the sample data, for the top 10 samples, based on the selected subjectID as a horizontal bar chart
- bubbleChart(): graphs the sample data for the subject based on the selected subjectID as a bubble chart, using the individual bacterium as markers with the number of specimens of that bacterium used for the size

Functions popDemos, barChart, and bubbleChart all change when a new value is selected from the dropdown menu.

I had a lot of trouble, initially, understanding how to conceptualize the project as a series of functions and how the functions could communicate with each other when functions are designed to be self-contained. Tutor Kourt helped me understand both aspects. 

## Result
![composite](https://github.com/m-coldewe/belly-button-challenge/assets/152045367/4c281fae-54b6-4456-8198-543aad60c7c6)

## Summary
The ability to see the top 10 bacterial specimens alongside the total bacterial specimens per subject allows the user to see a visual representation of something that is generally too small to see and easy to overlook, bringing awareness to the need for the potential consequences of a lack of hygiene. 
