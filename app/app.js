import NumberUtils from './utils/number-utils';
import Tweens from './lib/tweens';
//import Navigo from 'navigo';
import page from 'page';
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

        //this.router = new Navigo(null, true);
        this.addRouter();


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

        if (this.canScroll == true && event.wheelDeltaY <= -5) {

            console.log("down");
            window.removeEventListener('wheel', this.launchAnimation);

            Tweens.introTween();

            //this.router.pause(true);
            this.router.navigate('/home');
            //this.router.pause(false);

        }

    }

    addRouter() {

        page('/home', () => {
            console.log("home");
        });

        //this.router.on('/home', () => {
        //        console.log("home");
        //        TweenMax.set("#landing", {display: "none"});
        //        TweenMax.set("#menu-border .menu-border_topbottom", {height: 60});
        //        TweenMax.set("#menu-border .menu-border_leftright", {width: 60});
        //});
        //
        //this.router.on(function () {
        //        console.log("fallback");
        //});
        //
        //this.router.on('/', () => {
        //    console.log("/");
        //});
        //
        //this.router.resolve();
    }


}

export default App;
