# Donut Chart

## Overview

The donut chart pattern is a stylistic variation on a pie chart. The chart shows a small number of data points as percentage of a whole. The chart is build on values in the HTML that are indicated by a specific class name. This makes the chart data quickly editable and very accessible.

## Limitations

* data values will be parsed as integers for the purpose of calculating the chart slice size
* data is normalized based on the sum of all the integers parsed
* the CSS supports no more than 5 data points

## Class Names

Below are custom class names for implementation of the donut chart. The pattern uses additional classes from Bootstrap for styling.

Name | Usage
------------ | -------------
.donutchart | apply to the block level container for the chart and data 
.datum | apply to each span that wraps (represents) a data point for the chart
.make-inview | apply to the block level container if you want the chart to animate in

## HTML structure

Because data is being presented, I recommend using a table. 

    <div class="donutchart">
      <table class="table table-borderless table-sm w-auto">
        <thead class="sr-only">
          <tr>
            <th scope="col">[value column head]</th>
            <th scope="col">[label column head]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle"><span class="datum d-block text-center px-2 py-1 rounded">[value]</span</td>
            <td class="align-middle">[label]</td>
          </tr>
          [...]
        </tbody>  
      </table>
    </div>

This structure allows the data to be presented effectively even if the chart does not render (either because of lack of JavaScript or CSS support). The chart visual is added to the DOM as an SVG using JavaScript.

## References

The following articles were used as references for this pattern:

* https://css-tricks.com/how-to-make-charts-with-svg/
* https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/
* https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
* https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio