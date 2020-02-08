document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
    // find all the sliders
    var sliders = [].slice.call(document.querySelectorAll(".slider"));

    // function to scroll to a certain slide
    var scrollIt = function scrollIt(slider,slideToShow) {
      var slides = slider.querySelectorAll('.slide');
      var sliderPort = slider.querySelector('.slider-port');
      var scrollPos = slideToShow.offsetLeft;
      sliderPort.scrollLeft = scrollPos;
      setTimeout(function(){ sliderPort.scrollLeft = scrollPos; },75); // i am doing this because there is something strage about setting scroll left position
    };

    // function to show a slide
    var showSlide = function showSlide(slider,direction) {
      var slides = slider.querySelectorAll('.slide');
      var sliderPort = slider.querySelector('.slider-port');
      var visible = slider.querySelectorAll('.visible');
      var max_visible = Math.round(sliderPort.offsetWidth / slides[0].offsetWidth);
      var i = direction === 'previous' ? 0 : 1;

      // if more than one is visible, scroll to the last visible
      if (visible.length > max_visible) {
        // if next
        if (direction) {
          scrollIt(slider,visible[1]);
        }
        // if previous
        else {
          scrollIt(slider,visible[0])
        }
      }
      else {
        var newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling;
        if (newSlide) {
          scrollIt(slider,newSlide);
        }
      }
    };

    // do for each slider
    sliders.forEach(function(slider) {
      // find all the slides
      var slides = slider.querySelectorAll('.slide');

      // the slider port is the container for the slides
      var sliderPort = slider.querySelector('.slider-port');

      // set the default tab index such that the slide links cannot be focused
      Array.prototype.forEach.call(slides, function (slide) {
        slide.querySelector('a').setAttribute('tabindex', '-1');
      });

      // settings for intersection observer
      var observerSettings = {
        root: sliderPort
      };

      // observe for when slide is visible
      var slide_observer = new IntersectionObserver(function callback(slides, observer) {
        Array.prototype.forEach.call(slides, function (entry) {
          var link = entry.target.querySelector('a');
          if (entry.isIntersecting) {
            // if the slide is in the port, make it visible and focusable
            entry.target.classList.add('visible');
            link.removeAttribute('tabindex', '-1');
          }
          else {
            // otherwise, make it not visible and not focusable
            entry.target.classList.remove('visible');
            link.setAttribute('tabindex', '-1');
          }
        });
      }, observerSettings);

      Array.prototype.forEach.call(slides, function(slide) {
        // observe all the slides
        return slide_observer.observe(slide);
      });

      // observe for the start of the slides
      var start_observer = new IntersectionObserver(function callback(slides, observer) {
        Array.prototype.forEach.call(slides, function (entry) {
          if (entry.isIntersecting) {
            entry.target.parentNode.parentNode.parentNode.querySelector('.slider-control-prev').setAttribute('disabled','disabled');
          }
          else {
            entry.target.parentNode.parentNode.parentNode.querySelector('.slider-control-prev').removeAttribute('disabled');
          }
        });
      }, observerSettings);

      start_observer.observe(slides[0]);

      // observe for the end of the slides
      var end_observer = new IntersectionObserver(function callback(slides, observer) {
        Array.prototype.forEach.call(slides, function (entry) {
          if (entry.isIntersecting) {
            entry.target.parentNode.parentNode.parentNode.querySelector('.slider-control-next').setAttribute('disabled','disabled');
          }
          else {
            entry.target.parentNode.parentNode.parentNode.querySelector('.slider-control-next').removeAttribute('disabled');
          }
        });
      }, observerSettings);

      end_observer.observe(slides[slides.length - 1]);

      // add controls
      var controls = document.createElement('ul');
      controls.setAttribute('aria-label', 'slider controls');
      controls.className = "slider-controls list-unstyled p-0 m-0";
      controls.innerHTML = '\n  <li class="d-block p-0 m-0"><button class="slider-control slider-control-prev arrow prev" aria-label="previous">Previous</button></li>\n  <li class="d-block p-0 m-0"><button class="slider-control slider-control-next arrow next" aria-label="next">Next</button></li>';
      slider.append(controls);

      // add event handlers to controls
      var prev = controls.querySelector('.slider-control-prev');
      var next = controls.querySelector('.slider-control-next');
      prev.addEventListener('click', function(e) {
        e.preventDefault();
        showSlide(slider,'previous');
      });
      next.addEventListener('click', function(e) {
        e.preventDefault();
        showSlide(slider,'next');
      });
    });
  }
});