import NumberUtils from './utils/number-utils';
import $ from 'jquery';
import _ from 'lodash';
import TweenMax from 'gsap';

class App {

    constructor() {

        this.canScroll = true;

        this.DELTA_TIME = 0;
        this.LAST_TIME = Date.now();

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.addListeners();


    }

    /**
     * addListeners
     */
    addListeners() {

        window.addEventListener('resize', this.onResize.bind(this));
        // TweenMax.ticker.addEventListener('tick', this.update.bind(this));

        $(window).bind('mousewheel', _.throttle(function (event) {

            if (this.canScroll == true) {
                if (event.originalEvent.wheelDelta <= -5) {

                    console.log("down");

                    var tl = new TimelineMax();

                    // tl.add(TweenMax.to("#landing #center", 1, {scale: 0.4, top: 100, left: 30, ease:Power2.easeOut}));

                    tl.add(TweenMax.to("#landing #bottom-scroll", 0.75, {bottom: 0, opacity:0, ease:Power2.easeOut}, "john"));
                    tl.add(TweenMax.to("#landing #center", 0.75, {marginTop: 100, opacity:0, ease:Power2.easeOut, onComplete: () => {
                        TweenMax.set("#landing", {display: "none"})
                    }}, "john-=0.75"));

                    tl.add([TweenMax.to("#menu-border .menu-border_topbottom", 1, {height:60, ease:Power2.easeOut}),
                        TweenMax.to("#menu-border .menu-border_leftright", 1, {width:60, ease:Power2.easeOut})]);

                    tl.add(TweenMax.fromTo("#menu-border #menu-border_left #logo-name", 0.75, {top: -100}, {top: 50, display:"block", opacity:1, ease:Power2.easeOut, onComplete: () => {
                        TweenMax.set("#menu-border #menu-border_left #nav ul", {display: "block"});
                    }}));
                    tl.add(TweenMax.staggerFrom("#menu-border #menu-border_left #nav ul li", 0.75, {left: -100, opacity:0, ease:Power2.easeOut, force3D:true}, 0.2));

                    // TweenMax.to("#landing #bottom-scroll", 0.5, {opacity:0, display:"none"});


                }
                else if (event.originalEvent.wheelDelta >= 35) {

                   //console.log("up");
                }
            }

            $(window).unbind('mousewheel');

        }.bind(this), 350));


    }

    /**
     * update
     * - Triggered on every TweenMax tick
     */
    update() {

        this.DELTA_TIME = Date.now() - this.LAST_TIME;
        this.LAST_TIME = Date.now();

    }


    /**
     * onResize
     * - Triggered when window is resized
     * @param  {obj} evt
     */
    onResize(evt) {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

    }


}

export default App;
