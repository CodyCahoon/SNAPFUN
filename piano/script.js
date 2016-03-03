(function(){
    var s = Snap("#svg");

    var height = 250;
    var spacing = 60;
    var base = 100;
    var width = 1280;

    //Red top
    var redTop = s.rect(base - 10, height - 30, width, 20);
    redTop.addClass("redTop");

    //Black background
    var bg = s.rect(90, height - 10, width, 160);
    bg.addClass("blackFill");

    //Draw the white keys
    for (var i = 0; i < 21; i++){
        var whiteKey = s.rect(base, height, spacing, 130);
        whiteKey.addClass("whiteKey");
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
            blackKey = s.rect(base, height, 20, 80);
            blackKey.addClass("blackKey");
        }
    }
}());
