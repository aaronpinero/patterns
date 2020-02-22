document.addEventListener("DOMContentLoaded", function() {

  // this script takes information from the HTML to make charts.
  // there can be up to 5 slices in each chart.
  // each data value must be a string that can be parsed into an integer.

  var dials = document.querySelectorAll(".infodial");

  Array.prototype.forEach.call(dials, function (dialnode) {
    var dialCurrent = dialnode.getAttribute('data-value');
    var dialTotal = dialnode.getAttribute('data-total');
      
    // create the svg for the chart
    // the size of the svg doesn't really matter as long as it's a square
    // this is because we are using percentages for everything
    var dial = document.createElementNS('http://www.w3.org/2000/svg','svg');
    dial.setAttribute('class','chart');
    dial.setAttribute('viewbox','0 0 100 100');
    dial.setAttribute('preserveAspectRatio','xMidYMid meet');
    dial.setAttribute('width',100);
    dial.setAttribute('height',100);

    // create the info dial ring
    var dialDial = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dialDial.classList.add("dial");
    dialDial.setAttribute('r','50%');
    dialDial.setAttribute('cx','50%');
    dialDial.setAttribute('cy','50%');
    dial.append(dialDial);

    // create the display of current value
    var dialReading = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dialReading.classList.add("reading");
    dialReading.setAttribute('r','50%');
    dialReading.setAttribute('cx','50%');
    dialReading.setAttribute('cy','50%');
    dial.append(dialReading);

    // insert the chart
    dialnode.querySelector('.infodialtext').before(dial);
    
    // display the current value
    var currentValueLength = (dialCurrent / dialTotal) * 314.159;
    dialReading.style.strokeDasharray = currentValueLength + '% 314.159%';
    dialReading.style.strokeDashoffset = '0%';
  });
});