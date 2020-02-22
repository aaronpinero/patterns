---
title: Dependencies
label: Dependencies
order: 2
---

# Dependencies

**Bootstrap** has a number of dependencies which are included in this project. In addition, I have added dependencies to aid development or add important features.

* jQuery
* popper.js
* Bootstrap
* FontAwesome 5 (Free version)
* TYFY “In View” Module

## jQuery

Any JavaScript provided for new design patterns has been written using vanilla JavaScript. However, jQuery remains a requirement for Bootstrap and is included in this project.

## popper.js

Popper.js is required for a number of Boostrap components -- most notably dropdowns. 

## Bootstrap

Since I am relying on Bootstrap components it is necessary to include the Bootstrap JavaScript.

## FontAwesome

I have included FontAwesome 5 to make it easier to add icons. While I could have used TYFY icons or provided custom SVG icons, I selected FontAwesome because more people will be familiar with it. I am using the webfont version of the icons instead of the JavaScript because I prefer to work with CSS pseudo-elements.

## In View

This project makes use of the [In View](http://aaronpinero.net/tyfy/docs/inview.html) module from the TYFY framework. This module is based on code provided by Google for lazy loading images and performs the same function as the jQuery inview library.

Because In View can cause a slight flicker on elements that are initially in the browser's viewport, a CSS animation is applied to the body element. The animation transitions the opacity of the body from 0 to 1 over 100ms, covering up any unwanted flicker. This styling is in the library in a hidden pattern named ```body```.