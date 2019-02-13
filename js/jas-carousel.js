/**
 * Jas Carousel v1.0.1
 * Copyright 2013-2018 Parth Jasani
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Jas carousel
 * @version 1.0.1
 * @author Parth Jasani
 * @license The MIT License (MIT)
 */
;(function($){

    let defaults = {
        mode: 'horizontal',
        delay:1500,
        easing: null,
        keyboardEnabled: false,
        auto:true,
        autoDirection: 'next',
        navigation:true,
        prevText:"prev",
        nextText:"next",
        swipe:true,
        margin:0,
        perspective:1100,
        slideFrontFace:false,
        moveOnSlideClick:false,
        speed:2000,
        
        onSliderLoad: function() { return true; },
        onSlideBefore: function() { return true; },
        onSlideAfter: function() { return true; },
        onSlideNext: function() { return true; },
        onSlidePrev: function() { return true; },
        onSliderResize: function() { return true; }
    };

    
    $.fn.jasCarousel = function (option) {
        if (this.length === 0) {
            return this;
        }

        // support multiple elements
        if (this.length > 1) {
            this.each(function() {
              $(this).jasCarousel(options);
            });
            return this;
        }

        // create a namespace to be used throughout the plugin
        let carousel = {};
        carousel.slideIndex = 0;
        carousel.currentSlideIndex = 0;
        carousel.controls = {};
        // set a reference to our slider element
        el = this;


        // Return if slider is already initialized
        if ($(el).data('jasCarousel')) { return; }
        
        let init = function(){
            if ($(el).data('jasCarousel')) { return; }
            carousel.settings = $.extend({}, defaults, option);
            carousel.innerSlide = $(el).children().css({'transition':'all '+ carousel.settings.speed +'ms'});
            $(el).wrapInner("<div class='jas-carousel'></div>")
            carousel.settings.boxSelector = '.jas-carousel';
            carousel.settings.slideSelector = '.jas-item';
            $("> *",carousel.settings.boxSelector).wrap("<div class='"+ carousel.settings.slideSelector.replace('.','') +"'></div>")
            carousel.children = $(el).find(carousel.settings.slideSelector)
            
            // save original style data
            el.data('origStyle', el.attr('style'));
            carousel.children.each(function() {
                $(this).data('origStyle', $(this).attr('style'));
            });

            setup();
        }
        
        let setup = function(){
            let slideSelector = carousel.settings.slideSelector;
            let newdeg = 0;
            carousel.slideCount = carousel.children.length;
            carousel.settings.auto ? carousel.interval = setInterval(el.goToSlide,carousel.settings.delay) : '';
            carousel.deg = 360 / carousel.slideCount;
            carousel.tz = Math.round( ( (carousel.settings.mode == "vertical" ? $(el).height() : $(el).width() ) / 2) / Math.tan(Math.PI / carousel.slideCount)) + carousel.settings.margin;
            $(el).css({"perspective": carousel.settings.perspective+"px"});
            $(carousel.settings.boxSelector,el).css({"transform": "translateZ(" + -carousel.tz + "px) rotateY(0deg)","transition":"all "+ carousel.settings.speed +"ms"});
            $(slideSelector,el).each(function (index) {
                if(carousel.settings.mode == "vertical"){
                    $(this).css({"transform": "rotateX(" + newdeg + "deg) translateZ(" + carousel.tz + "px) "+(carousel.settings.slideFrontFace ? " rotateX(" + -newdeg + "deg)" : '')});
                } else {
                    $(this).css({"transform": "rotateY(" + newdeg + "deg) translateZ(" + carousel.tz + "px) "+(carousel.settings.slideFrontFace ? " rotateY(" + -newdeg + "deg)" : '')});
                }
                newdeg = carousel.deg * (index + 1);
            });
            carousel.children.eq(carousel.currentSlideIndex).addClass("active");
            carousel.settings.onSliderLoad.call(el, carousel.currentSlideIndex);
            // slider has been fully initialized
            carousel.initialized = true;

            carousel.settings.navigation ? appendControl() : '';
            carousel.settings.moveOnSlideClick ? moveOnSlideClick(): '';
        }

        let appendControl = function(){
            carousel.controls.next =  $("<a href='#' class='next'>"+carousel.settings.nextText+"</a>");
            carousel.controls.prev =  $("<a href='#' class='prev'>"+carousel.settings.prevText+"</a>");
            carousel.controls.next.on("click",goToNextSlide)
            carousel.controls.prev.on("click",goToPrevSlide)
            carousel.controls.navigationWrap = $('<div class="jas-control"></div>');
            carousel.controls.navigationWrap.append(carousel.controls.next).append(carousel.controls.prev);
            carousel.controls.navigationWrap.appendTo(el)
        }

        let goToNextSlide = function (e) {
            e.preventDefault();
            clearInterval(carousel.interval);
            el.goToSlide('next');
            carousel.settings.auto ? carousel.interval = setInterval(el.goToSlide,carousel.settings.delay) : ''
        };

        let goToPrevSlide = function (e) {
            e.preventDefault();
            clearInterval(carousel.interval);
            el.goToSlide('prev');
            carousel.settings.auto ? carousel.interval = setInterval(el.goToSlide,carousel.settings.delay) : '';
        };
    
        let moveOnSlideClick = function(){
            $(carousel.settings.slideSelector,el).click(function(){
                el.goToSlide($(this).index())
            })
        }

        /* Methods */
        el.goToSlide = function(direction = carousel.settings.autoDirection){
            if(typeof direction === 'number'){
                carousel.slideIndex = direction;
                direction = carousel.settings.autoDirection;
            } else {
                direction == 'next' ? carousel.slideIndex++ : carousel.slideIndex--;
            }
            carousel.currentDeg = -(carousel.deg * carousel.slideIndex);
            carousel.settings.onSlideBefore.call(el, carousel.children.eq(carousel.currentSlideIndex), carousel.currentSlideIndex);
            carousel.children.removeClass("active")
            if(carousel.settings.mode == "vertical"){
                $(carousel.settings.boxSelector,el).css({"transform": "translateZ(" + -carousel.tz + "px) rotateX(" + carousel.currentDeg + "deg)"});
                carousel.settings.slideFrontFace ? $(carousel.innerSlide,el).css({"transform":"rotateX("+ -carousel.currentDeg +"deg)"}) : '';
            } else {
                $(carousel.settings.boxSelector,el).css({"transform": "translateZ(" + -carousel.tz + "px) rotateY(" + carousel.currentDeg + "deg) "});
                $(carousel.settings.boxSelector,el).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
                    if(carousel.slideIndex < 0){
                        carousel.currentSlideIndex = (carousel.slideCount) + carousel.slideIndex % carousel.slideCount;
                    } else {
                        carousel.currentSlideIndex = carousel.slideIndex % carousel.slideCount;
                    }
                    $(carousel.settings.boxSelector,el).css({"transition": "none"});
                    carousel.currentDeg = -(carousel.deg * carousel.currentSlideIndex);
                    $(carousel.settings.boxSelector,el).css({"transform": "translateZ(" + -carousel.tz + "px) rotateY(" + carousel.currentDeg + "deg) "});
                    carousel.slideIndex = carousel.currentSlideIndex;
                    carousel.children.eq(carousel.currentSlideIndex).addClass("active");
                    carousel.settings.onSlideAfter.call(el, carousel.children.eq(carousel.currentSlideIndex), carousel.currentSlideIndex);

                    setTimeout(()=>{$(carousel.settings.boxSelector,el).css({"transition": "all "+ carousel.settings.speed +"ms"});});
                });
                carousel.settings.slideFrontFace ? $(carousel.innerSlide,el).css({"transform":"rotateY("+ -carousel.currentDeg +"deg)"}) : '';
            }
    
        }
        
        el.goToNextSlide = function () {
            el.goToSlide('next');
        };
        
        el.goToPrevSlide = function () {
            el.goToSlide('prev');
        };

        el.getSlideCount = function () {
            return carousel.slideCount;
        };
        
        el.getCurrentSlide = function () {
            return carousel.currentSlideIndex;
        };
        
        el.getCurrentSlideElement = function () {
            return carousel.children.eq(carousel.currentSlideIndex);
        };
        el.startAuto = function () {
            // if an interval already exists, disregard call
            if (carousel.interval) {
                return;
            }
            // create an interval
            carousel.interval = setInterval(function () {
                if (carousel.settings.direction === 'next') {
                    el.goToNextSlide()
                } else {
                    el.goToPrevSlide();
                }
            }, carousel.settings.delay);
        }

        el.stopAuto = function () {
            // if no interval exists, disregard call
            if (!carousel.interval) {
                return;
            }
            // clear the interval
            clearInterval(carousel.interval);
            carousel.interval = null;
        };
        
        el.destroy = function () {
            // don't do anything if slider has already been destroyed
            if (!carousel.initialized) {
                return;
            }
            carousel.initialized = false;
            carousel.children.each(function () {
                $(this).removeClass("active")
                if ($(this).data('origStyle') !== undefined) {
                    $(this).attr('style', $(this).data('origStyle'));
                } else {
                    $(this).removeAttr('style');
                }
            });
            if ($(this).data('origStyle') !== undefined) {
                this.attr('style', $(this).data('origStyle'));
            } else {
                $(this).removeAttr('style');
            }
            //$(this).unwrap().unwrap();
            if (carousel.controls.navigationWrap) {
                carousel.controls.navigationWrap.remove();
            }
            if (carousel.controls.next) {
                carousel.controls.next.remove();
            }
            if (carousel.controls.prev) {
                carousel.controls.prev.remove();
            }
            
            clearInterval(carousel.interval);
            //remove self reference in data
            $(this).removeData('jasSlider');
        };

        init();
        return this;
    };
})(jQuery)
