(function(){
    var s = Snap("#svg");

    var center = {x:720, y:350};
    var radius = 100;


    var bottomEllipse = s.rect(center.x - 125, 1.5 * center.y, 250, 150, 100, 100);
    bottomEllipse.addClass("wood");

    var path = s.path("M625,575 S500,475 625,375");
    path.attr({
    fill:"#ffffff"
    });


}());
