(function(){
    var s = Snap("#svg");
    var w = window.innerWidth;
    var h = window.innerHeight;


    var start = {x:500, y:150};
    var points = [];
    points.push({x:600, y:100});//top point
    points.push({x:700, y:150});//top right point
    points.push({x:680, y:170});//top right inner
    points.push({x:600, y:130});//top point inner
    points.push({x:520, y:170});//top left point inner
    points.push({x:520, y:270});//bottom left point inner
    points.push({x:600, y:302});//bottom middle point inner
    points.push({x:680, y:270});//bottom right point inner
    points.push({x:700, y:290});//bottom right point
    points.push({x:600, y:330});//bottom middle point
    points.push({x:500, y:290});//bottom left point





    var str = "M " + start.x + " " + start.y + "L";
    for (var i = 0; i < points.length; i++){
        str += points[i].x + " " + points[i].y + " ";
    }

    var topC = s.path(str);
    topC.addClass("dark-orange");
}());
