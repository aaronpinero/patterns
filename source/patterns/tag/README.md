# Tag Component

This component is similar to the badge from Bootstrap. However, the text size is larger for improved accessibility. The component is intended for display of a tag (taxonomy term) associated with a content node.

## Variations

### Color

The tag component has light and dark variants for use on dark or light backgrounds. The colors are applied using color utility classes from Bootstrap.

### Animation

The tag component has regular and animated variants. When animated, the Interaction Observer API is used to initiate the animation when the component comes into the viewport. The animation is a combination of a CSS transition of opacity and a CSS animation using clip-path.

Animation is triggered by the addition of the ```make-inview``` class.

