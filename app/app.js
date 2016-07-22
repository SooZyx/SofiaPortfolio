import NumberUtils from './utils/number-utils';
import ToolsUtils from './utils/tools-utils';
import Tweens from './lib/tweens';
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


        ToolsUtils.addEventListenerByClass('project_aside_bottom', 'mouseover', () => {
            TweenMax.to("#inner-container", 0.2, {y: -60});
        });

        ToolsUtils.addEventListenerByClass('project_aside_bottom', 'mouseout', () => {
            TweenMax.to("#inner-container", 0.2, {y: 0});
        });


        ToolsUtils.addEventListenerByClass('project_aside_top', 'mouseover', () => {
            TweenMax.to("#inner-container", 0.2, {y: 60});
        });

        ToolsUtils.addEventListenerByClass('project_aside_top', 'mouseout', () => {
            TweenMax.to("#inner-container", 0.2, {y: 0});
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


            page.redirect('/home');

        }

    }

    addRouter() {

        page('/home', () => {
            if (this.comesFromLanding) {
                console.log("home");
                Tweens.introTween();
            } else {
                Tweens.showHome();
            }
        });
        page('/', () => {
            console.log("landing");
            this.comesFromLanding = true;
        });
        page();

    }


}

export default App;
