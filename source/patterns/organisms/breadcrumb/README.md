# Breadcrumb

## Purpose

The Breadcrumb component builds on the default provided by Bootstrap. It uses a common breadcrumb pattern style where each item in the breadcrumb is shaped as an "arrow" pointing to the currently active item.

This implementation is different from others in that it does not depend on CSS pseudo-elements to make the arrow shaped pieces. Instead, CSS clip-path is used to shape each item in the breadcrumb trail as appropriate. 

## Animated Variant

Animation is applied by adding the ```make-inview``` class to the individual breadcrumb items. Animation will trigger when the breadcrumb moves into the viewport.

## Responsive Behavior

The Intersection Observer API and the Resize Observer API are used to trigger collapse or expansion of the breadcrumb as needed, regardless of the width of the breadcrumb. No CSS media query is needed.

When contracted, the text of first breadcrumb item becomes the "home" icon; the middle breadcrumb items collaps into a single dropdown trigger. Clicking on the dropdown trigger displays the full name of each item in the middle of the breadcrumb trail.

