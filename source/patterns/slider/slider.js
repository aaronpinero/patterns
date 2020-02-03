document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
    // find all the sliders
    var sliders = [].slice.call(document.querySelectorAll(".slider"));

    // function to scroll to a certain slide
    var scrollIt = function scrollIt(slider,slideToShow) {
      console.log("called Scrollit");
      var slides = slider.querySelectorAll('li');
      var sliderPort = slider.querySelector('.slider-port');
      var scrollPos = slideToShow.offsetLeft;
      sliderPort.scrollLeft = scrollPos;
      setTimeout(function(){ sliderPort.scrollLeft = scrollPos; },50);
    };

    // function to show a slide
    var showSlide = function showSlide(slider,direction) {
      var sliderPort = slider.querySelector('.slider-port');
      var slides = slider.querySelectorAll('li');
      var visible = slider.querySelectorAll('.visible');
      var max_visible = Math.round(sliderPort.offsetWidth / slides[0].offsetWidth);
      var i = direction === 'previous' ? 0 : 1;

      // if more than one is visible, scroll to the last visible
      if (visible.length > max_visible) {
        // if next
        if (direction) {
          scrollIt(slider,visible[visible.length - 1]);
        }
        // if previous
        else {
          scrollIt(slider,visible[0])
        }
      }
      else {
        var newSlide = i === 0 ? visible[0].previousElementSibling : visible[visible.length - 1].nextElementSibling;
        if (newSlide) {
          scrollIt(slider,newSlide);
        }
      }
    };

    // do for each slider
    sliders.forEach(function(slider) {
      // find all the slides
      var slides = slider.querySelectorAll('li');

      // set the default tab index such that the slide links cannot be focused
      Array.prototype.forEach.call(slides, function (slide) {
        slide.querySelector('a').setAttribute('tabindex', '-1');
      });

      // settings for intersection observer
      var observerSettings = {
        root: slider,
        rootMargin: '0px'
      };

      var observerCallback = function callback(slides, observer) {
        Array.prototype.forEach.call(slides, function (entry) {
          entry.target.classList.remove('visible');
          var link = entry.target.querySelector('a');
          link.setAttribute('tabindex', '-1');
          if (!entry.intersectionRatio > 0) {
            return;
          }
          entry.target.classList.add('visible');
          link.removeAttribute('tabindex', '-1');
        });
      };

      var slide_observer = new IntersectionObserver(observerCallback, observerSettings);
      Array.prototype.forEach.call(slides, function(slide) {
        return slide_observer.observe(slide);
      });

      // add controls
      var controls = document.createElement('ul');
      controls.setAttribute('aria-label', 'slider controls');
      controls.className = "slider-controls list-unstyled p-0 m-0";
      controls.innerHTML = '\n  <li class="d-block p-0 m-0"><button class="slider-control slider-control-prev" aria-label="previous">Previous</button></li>\n  <li class="d-block p-0 m-0"><button class="slider-control slider-control-next" aria-label="next">Next</button></li>';
      slider.append(controls);
      controls.addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(slider,e.target.closest('button').getAttribute('aria-label'));
      });
      
  
    });

  }
});