---
title: In View Module
label: In View
order: 2
---

This project makes use of the [In View](http://aaronpinero.net/tyfy/docs/inview.html) module from the Tyfy framework. This module is based on code provided by Google for lazy loading images and performs the same function as the jQuery inview library.

Because In View can cause a slight flicker on elements that are initially in the browser's viewport, a CSS animation is applied to the body element. The animation transitions the opacity of the body from 0 to 1 over 100ms, covering up any unwanted flicker. This styling is in the library in a hidden pattern named ```body```.