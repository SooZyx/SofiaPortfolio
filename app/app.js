import NumberUtils from './utils/number-utils';
import _ from 'lodash';
import TweenMax from 'gsap';

class App {



    constructor() {

        this.launchAnimation = this.onScroll.bind(this);

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

        document.addEventListener("DOMContentLoaded", () => {
            window.addEventListener('wheel', this.launchAnimation);
        });

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

    onScroll(event) {
        //console.log(event.wheelDeltaY);

        if (this.canScroll == true) {
            if (event.wheelDeltaY <= -5) {

                console.log("down");
                window.removeEventListener('wheel', this.launchAnimation);

                var tl = new TimelineMax();

                tl.to("#landing #bottom-scroll", 0.75, {y: 50, opacity: 0, ease: Power2.easeOut}, "john")
                    .to("#landing #center", .75, {
                        y: 15, opacity: 0, ease: Power2.easeOut, onComplete: () => {
                            TweenMax.set("#landing", {display: "none"});
                        }
                    }, "john+=0.25");

                tl.to("#menu-border .menu-border_topbottom", 1, {height: 60, ease: Power2.easeOut}, "doe")
                    .to("#menu-border .menu-border_leftright", 1, {width: 60, ease: Power2.easeOut}, "doe")
                    .fromTo("#menu-border #menu-border_left #logo-name", 0.75, {y: -100}, {
                        y: 0,
                        display: "block",
                        opacity: 1,
                        ease: Power2.easeOut,
                        force3D: false
                    }, "doe -= 0.75")
                    .set("#menu-border #menu-border_left #nav ul", {display: "block"}, "doe -= 0.75")
                    .staggerFrom("#menu-border #menu-border_left #nav ul li", 0.75, {
                        left: -100,
                        opacity: 0,
                        ease: Power2.easeOut,
                        force3D: true
                    }, 0.2, "doe -= 0.5");

            }
            else if (event.wheelDeltaY >= 35) {

                //console.log("up");
            }
        }

    }


}

export default App;
