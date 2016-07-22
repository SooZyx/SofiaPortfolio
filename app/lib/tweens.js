const Tweens = {

    introTween () {

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
                left: -40,
                opacity: 0,
                ease: Power2.easeOut,
                force3D: false
            }, 0.2, "doe -= 0.75");
    },

    showHome() {
        TweenMax.set("#landing", {display:"none"});
        TweenMax.set("#menu-border .menu-border_topbottom", {height: 60, ease: Power2.easeOut});
        TweenMax.set("#menu-border .menu-border_leftright", {width: 60, ease: Power2.easeOut});
        TweenMax.fromTo("#menu-border #menu-border_left #logo-name", 0.75, {y: -100}, {
            y: 0,
            display: "block",
            opacity: 1,
            ease: Power2.easeOut,
            force3D: false
        });
        TweenMax.set("#menu-border #menu-border_left #nav ul", {display: "block"});
        TweenMax.staggerFrom("#menu-border #menu-border_left #nav ul li", 0.75, {
                left: -40,
                opacity: 0,
                ease: Power2.easeOut,
                force3D: false
            }, 0.2);
    }

};


export default Tweens;
