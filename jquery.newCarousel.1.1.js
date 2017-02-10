$(document).ready(function () {
    
    var deg = 500,
        i = 0,
        newdeg = 0,
        translateZ = 0, 
        prevnextDeg = 0,
        currentDeg = 0,
        interval,
        carouselDirection,
        margin;

    $.fn.carousel = function (option) {
        var defaults = {
            timer:1500,
            auto:true,
            navigation:true,
            prevText:"prev",
            nextText:"next",
            swipe:true,
            infiniteLoop:true,
            axes:"y",
            margin:0
        };
        var merged = $.extend({}, defaults, option);
        
        if(merged.auto){
            interval = setInterval(next,merged.timer)
        }
        
        deg = 360 / this.find("figure").length;
        translateZ = Math.round((this.find("figure").width() / 2) / Math.tan(Math.PI / this.find("figure").length)) + merged.margin;

        this.css({"width": this.find("figure").width() + 20 + "px","perspective": "1100px"});
        this.find(">div").css({"transform": "translateZ(" + -translateZ + "px)"}).addClass("carousel");
        this.find("figure").each(function (index) {
            if(merged.axes == "y"){
                $(this).css({"transform": "rotateY(" + newdeg + "deg) translateZ(" + translateZ + "px)"});
            } else if(merged.axes == "x"){
                $(this).css({"transform": "rotateX(" + newdeg + "deg) translateZ(" + (translateZ/2+35) + "px)"});
            }
            newdeg = deg * (index + 1);
        });
        if(merged.navigation){
            $("<a href='#' class='prev'>"+merged.prevText+"</a> <a href='#' class='next'>"+merged.nextText+"</a>").insertAfter(this)
        }
        this.next();
        $('.next').click(function (e) {
            e.preventDefault();
            clearInterval(interval);
            next();
            if(merged.auto){
                interval = setInterval(next,merged.timer);
            }
        });
        $('.prev').click(function (e) {
            clearInterval(interval);
            e.preventDefault();
            prev();
            if(merged.auto){
                interval = setInterval(next,merged.timer);
            }
        });
    
        function next(){
            console.log(prevnextDeg)
            i--;
            prevnextDeg = deg * i;
            if(prevnextDeg == -360){
                clearInterval(interval);
                //prevnextDeg =0
            }
            if(merged.axes == "y"){
                $(".carousel").css({"transform": "translateZ(" + -translateZ + "px) rotateY(" + prevnextDeg + "deg)"});
            } else if(merged.axes == "x"){
                $(".carousel").css({"transform": "translateZ(" + -(translateZ/2+35) + "px) rotateX(" + prevnextDeg + "deg)"});
            }
        }
        function prev() {
            if(prevnextDeg > 360){
                clearInterval(interval);
            }
            i++
            prevnextDeg = deg * i;
            console.log("next--> ", prevnextDeg);
            if(merged.axes == "y"){
                $(".carousel").css({"transform": "translateZ(" + -translateZ + "px) rotateY(" + prevnextDeg + "deg)"});
            } else if(merged.axes == "x"){
                $(".carousel").css({"transform": "translateZ(" + -(translateZ/2+35) + "px) rotateX(" + prevnextDeg + "deg)"});
            }
            
        }
    
        $("body").swipe({
            swipeStatus: function (event, phase, direction, distance, duration, fingerCount) {
                if(merged.swipe){
                    
                    clearInterval(interval);
                    if(phase == "start"){
                        $("body").addClass("transition-remove");
                    } else if (phase == "end"){
                        $("body").removeClass("transition-remove");
                        prevnextDeg = currentDeg;
                        console.log(i);
                        if(carouselDirection == "left"){
                            i = Math.round(prevnextDeg / deg ) + 1;
                            next();
                        } else if (carouselDirection == "right") {
                            i = Math.round(prevnextDeg / deg ) - 1;
                            prev();
                        }
                    }

                    if(direction == "left" && phase == "move"){
                        currentDeg = prevnextDeg - distance/4;
                        if(merged.axes == "y"){
                            $(".carousel").css({"transform": "translateZ(" + -translateZ + "px) rotateY(" + currentDeg + "deg)"});
                        } else if(merged.axes == "x"){
                            $(".carousel").css({"transform": "translateZ(" + -translateZ/2+10 + "px) rotateX(" + currentDeg + "deg)"});
                        }
                        
                        carouselDirection = "left";
                    } else if (direction == "right" && phase == "move"){
                        currentDeg = prevnextDeg + distance/4;
                        if(merged.axes == "y"){
                            $(".carousel").css({"transform": "translateZ(" + -translateZ + "px) rotateY(" + currentDeg + "deg)"});
                        } else if(merged.axes == "x"){
                            $(".carousel").css({"transform": "translateZ(" + -(translateZ/2+35) + "px) rotateX(" + currentDeg + "deg)"});
                        }
                        
                        carouselDirection = "right";
                    }
                    if(merged.auto){
                        interval = setInterval(next,merged.timer);
                    }
                }
            },
            fingers: $.fn.swipe.fingers.ALL
        });
    };
    $(function () {
        $("body").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    $('.prev').trigger("click")
                } else if (direction == "right") {
                    $('.next').trigger("click")
                }
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });
    });

})
