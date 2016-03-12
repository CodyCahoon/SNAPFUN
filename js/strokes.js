(function(){
    var s = Snap("#svg");

    var center = {x:720, y:805/2};
    var radius = {x:245, y:200};



    var rotate = 0;
    update();
    setInterval(update, 10);

    function update(){
        s.clear();

        var record = s.ellipse(center.x, center.y, 360, 360);

        var recordLine = s.ellipse(center.x, center.y, 300, 300);
        recordLine.attr({
            fill:"black",
            strokeWidth:5,
            stroke:"rgb(20, 20, 20)"
        })

        var recordLine2 = s.ellipse(center.x, center.y, 200, 200);
        recordLine2.attr({
            fill:"black",
            strokeWidth:5,
            stroke:"rgb(20, 20, 20)"
        })

        var img = s.image("img/strokes.png", center.x - (radius.x/2), center.y - (radius.y/2), radius.x, radius.y);
        img.transform('r' + rotate++ + "," + (center.x) + "," + (center.y));

        var bar = s.path("M 1000, 50 T 875, 340, 600, 450");
        bar.attr({
            stroke:"rgb(158, 158, 158)",
            strokeWidth: 10,
            fill:"rgba(0, 0, 0, 0)"
        });

    }
}());
