var voiceControl;
var snake;
var food;
var scl=20;
function preload(){
  voiceControl = new p5.SpeechRec('en-US');
  voiceControl.continuous = true;
  voiceControl.interimResults = true;
  voiceControl.start();

}
function setup(){
	createCanvas(700, 500);
	frameRate(5);
	resetSketch();
}

function draw(){
 background(51);
 if(snake.eat(food)){
	pickLocation();
 }
 control();
 snake.death();
 snake.update();
 snake.show();

 fill(0, 191, 255);
 rect(food.x, food.y, scl, scl);
}

function resetSketch(){
	snake = new Snake();
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function control(){
  if(voiceControl.resultString){
  var lastWord = voiceControl.resultString.split(' ').pop();
  console.log('x: '+ snake.x +' y: '+ snake.y);
	if(lastWord == 'up'){
		if(snake.yspeed!=1){snake.dir(0,-1);}else{snake.dir(0,1);}
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
	}else if(lastWord == 'down'){
		if(snake.yspeed!=-1){snake.dir(0,1);}else{snake.dir(0,-1);}
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
	}else if(lastWord=='right'){
		if(snake.xspeed!=-1){snake.dir(1,0);}else{snake.dir(-1,0);}
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
	}else if(lastWord=='left'){
		if(snake.xspeed!=1){snake.dir(-1,0);}else{snake.dir(1,0);}
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
	}else if(lastWord=='stop'){
    snake.xspeed=0;
    snake.yspeed=0;
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
  }else{
    console.log("Nie rozpoznano komendy!");
    lastWord = voiceControl.resultString.split(' ').pop();
    console.log(lastWord);
  }
  }
}

// function keyPressed(){
//   var lastWord = voiceControl.resultString.split(' ').pop();
//   console.log(lastWord);
// 	if(keyCode === UP_ARROW || (lastWord.indexOf("góra")!==-1)){
// 		if(snake.yspeed!=1){snake.dir(0,-1);}else{snake.dir(0,1);}
// 	}else if(keyCode === DOWN_ARROW || (lastWord.indexOf("dół")!==-1)){
// 		if(snake.yspeed!=-1){snake.dir(0,1);}else{snake.dir(0,-1);}
// 	}else if(keyCode === RIGHT_ARROW || (lastWord.indexOf("prawo")!==-1)){
// 		if(snake.xspeed!=-1){snake.dir(1,0);}else{snake.dir(-1,0);}
// 	}else if(keyCode === LEFT_ARROW || (lastWord.indexOf("lewo")!==-1)){
// 		if(snake.xspeed!=1){snake.dir(-1,0);}else{snake.dir(1,0);}
// 	}
// }
