function Count(obj){
  
  // get the number, assign it to an attribute
  var number = obj.innerText;
  obj.setAttribute('data-number',number)
  
  // clear the HTML element
  obj.innerText = "";
  
  // create an array from the text, prepare to identify which characters in the string are numbers
  var numChars = number.split("")
  var numArray = [];
  var setOfNumbers = [1,2,3,4,5,6,7,8,9];

  // for each number, create the animation elements
  for(var i=0; i<numChars.length; i++) { 
    var thisnum = parseInt(numChars[i], 10);
    if (setOfNumbers.includes(thisnum)) {
      var new_digit = document.createElement('span');
      new_digit.className = "digit-con";
      var new_digit_code = '<span class="digit'+numArray.length+'">';
      for (var j=0;j<thisnum;j++) {
        new_digit_code += '<span>'+j+'</span>';
      }
      new_digit_code += '<span class="targetnum">'+thisnum+'</span></span>';
      new_digit.innerHTML = new_digit_code;
      
      // add the digit
      obj.appendChild(new_digit);

      // record the number
      numArray[numArray.length] = thisnum;
    }
    else {
      var new_character = document.createElement('span');
      new_character.innerText = numChars[i];
      obj.appendChild(new_character);
    }	
  }

  // determine the height of each number for the animation
  var increment = obj.getElementsByClassName('digit-con').item(0).offsetHeight;
  var speed = 1500;
  
  // animate each number
  for(var i=0; i<numArray.length; i++) {
    var dig = obj.getElementsByClassName('digit'+i).item(0);
    dig.classList.add('count-transition');
    dig.addEventListener('transitionend', function() {
      var nums = this.getElementsByTagName('span');
      for (var y=nums.length - 2; y>=0;y--) {
        var num = nums[y];
        num.parentNode.removeChild(num);
      }
      this.classList.remove('count-transition');
      this.removeAttribute('style');
    });
    dig.setAttribute('style','top:-'+(increment * numArray[i])+'px');

    // dig.animate({top: -(increment * numArray[i])}, speed,function(){
    //   // remove inline style and all numbers except the target
    //   $(this).removeAttr("style").find("span:not(.targetnum)").remove();
    // });
  }
}

// accessibility check
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// apply an intersection observer to all elements with the class .make-inview
document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window && mediaQuery.matches === false) { // if available and if allowed

    // collect items that will be observed
    var counter_items = [].slice.call(document.querySelectorAll(".make-counter"));

    // options for the observer
    var counter_inview_options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    // callback for the observer
    var counter_observer_callback = function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let counter_item = entry.target;
          Count(counter_item);
          counter_observer.unobserve(counter_item);
        }
      });
    };
  
    // define the observer
    let counter_observer = new IntersectionObserver(counter_observer_callback,counter_inview_options);

    // apply the observer to the items
    counter_items.forEach(function(counter_item) {
      counter_observer.observe(counter_item);
    });
  }
  else {
    console.log("Warning: intersection observer not available, or reduce motion is on")
  }
});