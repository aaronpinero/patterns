# Breadcrumb Component

The Breadcrumb component builds on the default provided by Bootstrap. It uses a common breadcrumb pattern style where each item in the breadcrumb is shaped as an "arrow" pointing to the currently active item.

This implementation is different from others in that it does not depend on CSS pseudo-elements to make the arrow shaped pieces. Instead, CSS clip-path is used to shape each item in the breadcrumb trail as appropriate.

The styling for the breadcrumb does not require JavaScript. However, I want a specific behavior in the case where the screen is narrow. In order to implement this behavior, it is necessary to manipulate the DOM, so JavaScript is required. The script uses the Intersection Observer API and the Resize Observer API to trigger the collapse or expansion of the breadcrumb as needed, regardless of the width of the breadcrumb. No CSS media query is needed.

