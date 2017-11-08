// paper.install(window);
//
// window.onload = function() {
// 	// Setup directly from canvas id:
// 	paper.setup('myCanvas');
// 	var path = new Path();
// 	path.strokeColor = 'black';
// 	var start = new Point(100, 100);
// 	path.moveTo(start);
// 	path.lineTo(start.add([ 200, -50 ]));
//
//   var circle = new Path.Circle({
//   	center: [80, 50],
//   	radius: 1,
//   	fillColor: 'red'
//   });
//
//   var circle2 = new Path.Circle({
//   	center: [200, 200],
//   	radius: 40,
//   	fillColor: 'blue'
//   });
//
//   console.log(circle)
//   view.onFrame = function(event) {
// 			// On each frame, rotate the path by 3 degrees:
// 			path.rotate(3);
//
//
//
// }
//   circle.remove();
//   circle2.remove();
//
//   var id;
//
//   $("body").keypress(function() {
//     id = setInterval(function(){
//       circle.position = new Point(100, 100)
//       project.activeLayer.addChild(circle)
//       circle.scale(1.7)
//
//       setTimeout(function(){
//         project.activeLayer.addChild(circle2)
//         circle2.scale(1.1);
//
//       }, 1000)
//
//
//       setTimeout(function(){
//         console.log('reove')
//       }, 3000)
//     }, 5000)
//
//
//
//
//   })
//   // view.onKeyDown = function(event) {
//   //   if(event.key === "a"){
//   //         circle.position = new Point(100, 100)
//   //         project.activeLayer.addChild(circle)
//   //         circle.scale(1.7)
//   //
//   //         setTimeout(function(){
//   //           project.activeLayer.addChild(circle2)
//   //         }, 1000)
//   //
//   //         circle2.scale(1.1);
//   //
//   //         setTimeout(function(){
//   //           console.log("ham")
//   //         }, 1000)
//   //
//   //   }
//   // }
//
//   view.onKeyUp = function(event) {
//     if(event.key === "a"){
//           circle.remove()
//           circle.bounds.width = 1
//           circle.bounds.height = 1
//           clearInterval(id)
//     }
//   }
//
// view.draw();
//
//
// }
