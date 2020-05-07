$(function () {
    const delta = 25;
    const screens = 3;
    const steps = 5;
    gsap.registerPlugin(MotionPathPlugin);
    var carPath = {
        curviness: 0.5,
        autoRotate: 90,
        path: [
            { x: - delta, y: window.innerHeight * screens / steps },
            { x: delta, y: window.innerHeight * screens * 2 / steps },
            { x: - delta, y: window.innerHeight * screens * 3 / steps },
            { x: delta, y: window.innerHeight * screens * 4 / steps },
            { x: - delta, y: window.innerHeight * screens * 5 / steps + $("#car").width() * 3 / 2 },
        ]
    };
    console.log($("#car").width());
    
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
        .add(TweenMax.to($("#car"), 1, { css: { motionPath: carPath }, immediateRender: true }))
        .add(TweenMax.to($("#car"), 0, { css: { display: 'none' }}))

    const tweenFirst = new TimelineMax()
        .add(TweenMax.from($('#first'), 1, { css: { x: 300 } }))
        .add(TweenMax.to($('#first'), 1, { css: { x: 0 }}))
    const tweenSecond = new TimelineMax()
        .add(TweenMax.from($('#second'), 1, { css: { x: 300 } }))
        .add(TweenMax.to($('#second'), 1, { css: { x: 0 }}))
    const tweenThird = new TimelineMax()
        .add(TweenMax.from($('#third'), 1, { css: { x: 300 } }))
        .add(TweenMax.to($('#third'), 1, { css: { x: 0 }}))

    // build scene
    var scene = new ScrollMagic.Scene({ triggerHook: 0.3, triggerElement: ".animation", duration: '400%' })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);

    var scene1 = new ScrollMagic.Scene({ triggerHook: 1, triggerElement: "#first" })
        .setTween(tweenFirst)
        // .addIndicators()
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({ triggerHook: 1, triggerElement: "#second" })
        .setTween(tweenSecond)
        // .addIndicators()
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({ triggerHook: 1, triggerElement: "#third" })
        .setTween(tweenThird)
        // .addIndicators()
        .addTo(controller);
})
