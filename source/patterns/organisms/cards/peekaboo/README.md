# Peekaboo Card

This pattern is a variation on the Bootstrap (Image Overlay Card)[]. This version of the card improves upon  the Image Overlay component in a few ways

* Responsiveness
* Readability
* Image Sizing

This pattern also makes more of the image visible by hiding the card text until the user hovers over the image. On hover, the text "peeks" up from the bottom of the card and the image darkens and blurs for improved readability.

## Limitations

The following text length limis are recommended:

* Title no more than 40 characters
* Text no more than 140 characters (an OG tweet).

## Responsiveness

This pattern addresses responsiveness by reverting to a basic card at small screen widths. This behavior will allow the image to be visible at small screen sizes and helps make sure that the text does not overflow the overlay.

## Readability

With the default component, it is very easy to create content where the text is not readable because of its placement over the image. This version provides background colors with suitable contrast to make sure the text is readable.

## Image Sizing

This pattern is styled for an image with a 16:10 aspect ratio. However, the styles can be changed to accommodate images of different aspects. The styles for the card image use object fitting that will limit the selected image to the specified aspect ratio.