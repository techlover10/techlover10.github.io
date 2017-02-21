if(!hasLoadedBefore()){
    var upAnimation = anime({
        targets: ['.upAnimated'],
        translateY: UP_ANIMATION_START,
        duration: 1,
        loop: false,
        complete: function (){
            anime({
                targets: ['.upAnimated'],
                translateY: '0rem',
                delay: function(el, index){
                    return index*40;
                },
                duration: ANIM_DELAY,
                loop: false
            });
        }
    });
    var rightAnimation = anime({
        targets: ['.rightAnimate'],
        translateX: RIGHT_ANIMATION_START,
        duration: 1,
        loop: false,
        complete: function (){
            anime({
                targets: ['.rightAnimate'],
                translateX: '0rem',
                delay: function(el, index){
                    return index*40;
                },
                duration: ANIM_DELAY,
                loop: false
            });
        }
    });
    var leftAnimation = anime({
        targets: ['.leftAnimate'],
        translateX: LEFT_ANIMATION_START,
        duration: 1,
        loop: false,
        complete: function (){
            anime({
                targets: ['.leftAnimate'],
                translateX: '0rem',
                delay: function(el, index){
                    return index*40;
                },
                borderRadius: '0px',
                duration: ANIM_DELAY,
                loop: false
            });
        }
    });
    setHasLoaded();
}
