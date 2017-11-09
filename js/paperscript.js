var circles = []

function onKeyDown(event){
    var maxPoint = new Point(view.size.width, view.size.height)
    var randomPoint = Point.random()
    var point = maxPoint * randomPoint
    var newCircle = new Path.Circle(new Point(point), 100)
    newCircle.fillColor = "blue"

    circles.push(newCircle);
}

function onFrame(event){
  for(i=0; i < circles.length; i++){
    circles[i].fillColor.hue += 3;
    circles[i].scale(0.98);
    if(circles[i].area < 1){
      circles[i].remove();
      circles.splice(i, 1);
      console.log(circles);
    }
  };
};
