# Slider

This slider pattern is based on work done by Heydon Pickering for his [Inclusive Components](https://inclusive-components.design/a-content-slider/) project. The goal is to create a version of the slider pattern (sometimes called a carousel) that is efficient (in terms of code) and accessible.

Pickering's example is 3 years old at the time of this writing and some of the code no longer works. It was necessary to modify or rebuild some of the code to work with the current web standards. I also added some functions and removed others.

## Features

* Accessible
* Responsive
* One, two, or three item configurations
* Start/end detection
* Button, scroll, and keyboard operation

## Notes

This pattern uses Bootstrap cards as the example carousel content. However, it should work for all kinds of elements.

## Alternatives

### Slick

[Slick](https://kenwheeler.github.io/slick/) is a feature-packed carousel option that unfortunately has some accessibility issues. This slider may have fewer options than Slick, but it also requires less code and is more accessible.

### Bootstrap

Bootstrap has a [carousel component](https://getbootstrap.com/docs/4.4/components/carousel/), but it is intended for only one item at a time. The slider presented here is more flexible.