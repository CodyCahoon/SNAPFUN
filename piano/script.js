(function(){
    var s = Snap("#svg");

    var w = $(window).width();
    var h = $(window).height();
    var height = 250;


    var redtop = s.rect(90, 220, 1280, 20);
    redtop.addClass("redtop");
    var bg = s.rect(90, height - 10, 1280, 160);
    bg.addClass("blackfill");

    var spacing = 60;
    var base = 100;
    //Draw the white keys
    for (var i = 0; i < 21; i++){
        var whiteKey = s.rect(base, height, spacing, 130);
        whiteKey.addClass("whitekey");
        base += spacing;
    }

    //Draw black keys
    spacing = 60;
    base = 150 - spacing;
    for (var j = 0; j < 3; j++){
        for (var i = 0; i < 7; i++){
            base += spacing;
            if (i == 2 || i == 6){
                continue;
            }
            blackkey = s.rect(base, height, 20, 80);
            blackkey.addClass("blackkey");
            console.log(i);
        }
    }
}());
