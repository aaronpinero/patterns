// this script takes information from the HTML to make a chart.
// there can be up to 5 items. Each .datum value must be
// a string that can be parsed into an integer.

var dataNodes = document.querySelectorAll(".donutchart .datum");
var slices = new Array();
var data = new Array();
var total = 0;

// create the svg for the chart
// the size of the svg doesn't really matter as long as it's a square
// this is because we are using percentages for everything
var chart = document.createElementNS('http://www.w3.org/2000/svg','svg');
chart.setAttribute('class','chart');
chart.setAttribute('viewbox','0 0 100 100');
chart.setAttribute('preserveAspectRatio','xMidYMid meet');
chart.setAttribute('width',100);
chart.setAttribute('height',100);

// convert the text of each .datum element to an integer
// also get a total
// also, for each .datum, add a slice element to the chart
for (var i=0; i<dataNodes.length; i++) {
  data[i] = parseInt(dataNodes[i].innerText);
  total += data[i];
  slices[i] = document.createElementNS('http://www.w3.org/2000/svg','circle');
  slices[i].className = "slice";
  slices[i].setAttribute('r','50%');
  slices[i].setAttribute('cx','50%');
  slices[i].setAttribute('cy','50%');
  chart.append(slices[i]);
}

// insert the chart
document.querySelector('.donutchart table').before(chart);

// normalize each value using the total to get the percentage
// of the whole represented by each .datum
for (var i=0; i<data.length; i++) {
  data[i] = data[i]/total;
}

// delay drawing the chart for a moment so the CSS transition will make it look fancy
setTimeout(drawDonutChart,1);

// using the dash length and dash offset trick
// create each slice of the chart
// we are doing everything here in percentages so the chart size will scale nicely
function drawDonutChart() {
  var offset = 0;
  for (var i=0; i<data.length; i++) {
    // start in the middle
    var j = Math.round(data.length/2) - 1 + i;
    j = (j > (data.length - 1)) ? j - data.length : j;

    // slice as percent of circumference
    var sliceLength = data[j] * 314.159;
    slices[j].style.strokeDasharray = sliceLength + '% 314.159%';
    slices[j].style.strokeDashoffset = offset + '%';
    offset -= sliceLength;
  }
}

// references:
// https://css-tricks.com/how-to-make-charts-with-svg/
// https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/
// https://math.stackexchange.com/questions/260096/find-the-coordinates-of-a-point-on-a-circle
// https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio

