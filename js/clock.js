(function(){
    var s = Snap("#svg");

    var center = {x:720, y:350};
    var radius = 100;

    update();
    setInterval(update, 1000);
    function update(){
        s.clear();
        var currTime = new Date();
        console.log(currTime.getSeconds());


        //Draw back circles/frame
        var backFrame = s.circle(center.x, center.y, radius * 1.7, radius * 1.7);
        backFrame.addClass("black");

        var back = s.circle(center.x, center.y, radius * 1.6, radius * 1.6);
        back.addClass("white");


        //Draw hour hand
        var hours = s.line(center.x, center.y, center.x + (2 * radius/3), center.y + (2 * radius/3));
        hours.addClass("grey");
        hours.attr({
            strokeWidth: 10
        });

        var rotateHours = ((currTime.getHours() % 12) * 30) - 135;
        hours.transform('r' + rotateHours + "," + center.x + "," + center.y);

        //Draw minute hand
        var minutes = s.line(center.x, center.y, center.x + radius, center.y + radius);
        minutes.addClass("grey");
        minutes.attr({
            strokeWidth: 10
        });
        var rotateMinutes = (currTime.getMinutes() * 6) - 135;
        minutes.transform('r' + rotateMinutes + "," + center.x + "," + center.y);
        var minutesCircle = s.circle(center.x, center.y, 6, 6);
        minutesCircle.addClass("grey");

        //Draw second hand
        var seconds = s.line(center.x, center.y, center.x + radius, center.y + radius);
        seconds.addClass("red");
        seconds.attr({
            strokeWidth: 3
        });
        var rotateSeconds = (currTime.getSeconds() * 6) - 135;
        seconds.transform('r' + rotateSeconds + "," + center.x + "," + center.y);
        var secondsCircle = s.circle(center.x, center.y, 3, 3);
        secondsCircle.addClass("red");
    }
}());
