$(document).ready(function(){

      var pian1 = new Howl({
        src: ["sounds/pian1.mp3"],
        volume: 0.6
      })
      var pian2 = new Howl({
        src: ["sounds/pian2.mp3"],
        volume: 0.6
      })
      var pian3 = new Howl({
        src: ["sounds/pian3.mp3"],
        volume: 0.6
      })
      var pian4 = new Howl({
        src: ["sounds/pian4.mp3"],
        volume: 0.6
      })
      var pian5 = new Howl({
        src: ["sounds/pian5.mp3"],
        volume: 0.6
      })
      var pian6 = new Howl({
        src: ["sounds/pian6.mp3"],
        volume: 0.6
      })

      var kick = new Howl({
        src: ["sounds/kick.mp3"],
      })

      var clap = new Howl({
        src: ["sounds/clap.mp3"]
      })

      var bass1 = new Howl({
        src: ["sounds/bass1.mp3"],
        volume: 0.3
      })

      var bass2 = new Howl({
        src: ["sounds/b2.mp3"],
        volume: 0.3
      })

      var bass3 = new Howl({
        src: ["sounds/bass3.mp3"],
        volume: 0.3
      })

      var synth1 = new Howl ({
        src: ["sounds/synth1.mp3"]
      })
      var synth2 = new Howl ({
        src: ["sounds/synth2.mp3"]
      })
      var synth3 = new Howl ({
        src: ["sounds/synth3.mp3"]
      })
      var synth4 = new Howl ({
        src: ["sounds/synth4.mp3"]
      })

      var synthloop = new Howl ({
        src: ["sounds/synthloop1.mp3"],
        loop: true,
        volume: 0.8
      })

      var synthloop2 = new Howl ({
        src: ["sounds/synthloop2.mp3"],
        loop: true,
        volume: 0.6
      })

      var drumloop = new Howl({
        src:["sounds/drumloop.mp3"],
        loop: true
      })

      var circles = []
      var circles2 = []
      var squares = []
      var triangles = []
      var lines = []
      var colors = ["blue", "red", "pink", "skyblue", "purple", "indigo"]
      var k = view.size.height
      var looper = false
      var intervalId;


      function onKeyDown(event){ // <----------------- KICK ------------------
        if(event.key === "j"){
          var maxPoint = new Point(view.size.width, view.size.height)
          var newRectangle = new Path.Rectangle((maxPoint/2), 20)
          newRectangle.strokeColor = colors[Math.floor(Math.random()*colors.length)]
          kick.play();

          squares.push(newRectangle);

        }else if(event.key === "a"){  // < -------------- PIANO CLIP -----------
          for (var i = 0; i < 11; i++) {
            var maxPoint = new Point(view.size.width, view.size.height)
            var randomPoint = Point.random()
            var point = maxPoint * randomPoint
            var newCircle = new Path.Circle(new Point(point), 20)
            var color = Math.floor(Math.random()*colors.length)
            newCircle.fillColor = colors[color]

            circles.push(newCircle);

          }
          pian1.play();

        }else if(event.key === "s"){  // < -------------- PIANO CLIP -----------
            for (var i = 0; i < 11; i++) {
              var maxPoint = new Point(view.size.width, view.size.height)
              var randomPoint = Point.random()
              var point = maxPoint * randomPoint
              var newCircle = new Path.Circle(new Point(point), 20)
              var color = Math.floor(Math.random()*colors.length)
              newCircle.fillColor = colors[color]

              circles.push(newCircle);
            }
            pian2.play();

        }else if(event.key === "d"){  // < -------------- PIANO CLIP -----------
              for (var i = 0; i < 11; i++) {
                var maxPoint = new Point(view.size.width, view.size.height)
                var randomPoint = Point.random()
                var point = maxPoint * randomPoint
                var newCircle = new Path.Circle(new Point(point), 20)
                var color = Math.floor(Math.random()*colors.length)
                newCircle.fillColor = colors[color]

                circles.push(newCircle);
              }
              pian3.play();

        }else if(event.key === "z"){  // < -------------- PIANO CLIP -----------
              for (var i = 0; i < 11; i++) {
                var maxPoint = new Point(view.size.width, view.size.height)
                var randomPoint = Point.random()
                var point = maxPoint * randomPoint
                var newCircle = new Path.Circle(new Point(point), 20)
                var color = Math.floor(Math.random()*colors.length)
                newCircle.fillColor = colors[color]

                circles.push(newCircle);
              }
              pian4.play();

        }else if(event.key === "x"){  // < -------------- PIANO CLIP -----------
                for (var i = 0; i < 11; i++) {
                  var maxPoint = new Point(view.size.width, view.size.height)
                  var randomPoint = Point.random()
                  var point = maxPoint * randomPoint
                  var newCircle = new Path.Circle(new Point(point), 20)
                  var color = Math.floor(Math.random()*colors.length)
                  newCircle.fillColor = colors[color]

                  circles.push(newCircle);
                }
                pian5.play();

        }else if(event.key === "c"){  // < -------------- PIANO CLIP -----------
                for (var i = 0; i < 11; i++) {
                  var maxPoint = new Point(view.size.width, view.size.height)
                  var randomPoint = Point.random()
                  var point = maxPoint * randomPoint
                  var newCircle = new Path.Circle(new Point(point), 20)
                  var color = Math.floor(Math.random()*colors.length)
                  newCircle.fillColor = colors[color]

                  circles.push(newCircle);
                }
                pian6.play();




        }else if(event.key === "k"){  // <-------------------CLAP ------------------
          for (var i = 0; i < 7; i++) {
            var maxPoint = new Point(view.size.width, view.size.height)
            var randomPoint = Point.random()
            var point = maxPoint * randomPoint
            var triangle = new Path.RegularPolygon(new Point(Math.floor(Math.random()*(view.size.width)), k), 3, 160);
            triangle.strokeColor = colors[Math.floor(Math.random()*colors.length)]
            triangles.push(triangle)
          }


          if(k > 0){
          k -= 120
          }else{
          k = view.size.height
          }

          clap.play()

        }else if(event.key === "i"){ // <----------- BASS ------------------
          var circleMaker = function(x, y) {
            var bassCircle = new Path.Circle(new Point(x, y), 90)
            bassCircle.strokeColor = "white"
            circles2.push(bassCircle)
          }

          circleMaker(view.size.width*0.15, view.size.height * 0.25)
          circleMaker(view.size.width*0.15, view.size.height*0.75)
          circleMaker(view.size.width*0.85, view.size.height*0.25)
          circleMaker(view.size.width*0.85, view.size.height*0.75)

          bass1.play()

        }else if(event.key === "o"){

          var circleMaker = function(x, y) {
            var bassCircle = new Path.Circle(new Point(x, y), 90)
            bassCircle.strokeColor = "pink"
            circles2.push(bassCircle)
          }

          circleMaker(view.size.width*0.15, view.size.height*0.25)
          circleMaker(view.size.width*0.15, view.size.height*0.75)
          circleMaker(view.size.width*0.85, view.size.height*0.25)
          circleMaker(view.size.width*0.85, view.size.height*0.75)
          bass2.play()

        }else if(event.key === "p"){

          var circleMaker = function(x, y) {
            var bassCircle = new Path.Circle(new Point(x, y), 90)
            bassCircle.strokeColor = "red"
            circles2.push(bassCircle)
          }

          circleMaker(view.size.width*0.15, view.size.height*0.25)
          circleMaker(view.size.width*0.15, view.size.height*0.75)
          circleMaker(view.size.width*0.85, view.size.height*0.25)
          circleMaker(view.size.width*0.85, view.size.height*0.75)
          bass3.play()

        }else if(event.key === "q"){ // <----------- SYNTHS --------------
          var point = Math.floor(Math.random()*view.size.width)
          for (var i = 0; i < 6; i++) {
            var synthLine = new Path
            synthLine.strokeColor = "green"
            synthLine.add(new Point(point + (i * 10), 0), new Point(point + (i * 10), view.size.height) )
            lines.push(synthLine)
          }
          synth1.play()

        }else if(event.key === "w"){
          var point = Math.floor(Math.random()*view.size.width)
          for (var i = 0; i < 6; i++) {
            var synthLine = new Path
            synthLine.strokeColor = "blue"
            synthLine.add(new Point(point + (i * 10), 0), new Point(point + (i * 10), view.size.height) )
            lines.push(synthLine)
          }
          synth4.play()

        }else if(event.key === "e"){
          var point = Math.floor(Math.random()*view.size.width)
          for (var i = 0; i < 6; i++) {
            var synthLine = new Path
            synthLine.strokeColor = "purple"
            synthLine.add(new Point(point + (i * 10), 0), new Point(point + (i * 10), view.size.height) )
            lines.push(synthLine)
          }
          synth3.play()

        }else if(event.key === "r"){
          var point = Math.floor(Math.random()*view.size.width)
          for (var i = 0; i < 6; i++) {
            var synthLine = new Path
            synthLine.strokeColor = "pink"
            synthLine.add(new Point(point + (i * 10), 0), new Point(point + (i * 10), view.size.height) )
            lines.push(synthLine)
          }
          synth2.play()

        }else if(event.key === "t"){
          var strobe = function() {
            $("#myCanvas").css("background", "#2F2A30")

            setTimeout(function(){
              $("#myCanvas").css("background", "black")
            }, 234.5)

          }

          if(!looper){
            synthloop.play()
            looper = true
            strobe();
            intervalId = setInterval(strobe, 469)
          }else{
            synthloop.stop()
            looper = false
            clearInterval(intervalId)
          }

        }else if(event.key === "y"){
          var strobe = function() {
            $("#myCanvas").css("background", "#2F2A30")

            setTimeout(function(){
              $("#myCanvas").css("background", "black")
            }, 234.5)
          }

          if(!looper){
            synthloop2.play()
            looper = true
            strobe();
            intervalId = setInterval(strobe, 469)
          }else{
            synthloop2.stop()
            looper = false
            clearInterval(intervalId)
          }

        }else if(event.key === "u"){


          if(!looper){
            drumloop.play()
            looper = true
            strobe();
            intervalId = setInterval(strobe, 469)
          }else{
            drumloop.stop()
            looper = false
            clearInterval(intervalId)
          }
        }
      }


      function onFrame(event){

          for(i=0; i < circles.length; i++){
          circles[i].fillColor.hue += 6;
          circles[i].scale(1.013);
          if(circles[i].area > 4000){
            circles[i].remove();
            circles.splice(i, 1);
            console.log(circles);
              }
          } // <-------- circles

          for(i=0; i < circles2.length; i++){
          // circles2[i].strokeColor.hue += 9;
          circles2[i].scale(1.013);
          if(circles2[i].area > 40000){
            circles2[i].remove();
            circles2.splice(i, 1);
              }
          }

          for (var i = 0; i < squares.length; i++) {
            squares[i].strokeColor.hue += 5
            squares[i].scale(1.08)
            if(squares[i].area > 500000){
              squares[i].remove();
              squares.splice(i, 1)
            }
          }
        }

      function onKeyUp(event){
        for (var i = 0; i < lines.length; i++) {
          lines[i].remove();
        };
        for (var i = 0; i < triangles.length; i++) {
          triangles[i].remove();
        };
      };


})
