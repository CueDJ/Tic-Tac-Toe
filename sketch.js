let player = 1

function setup() {
createCanvas(1000,1000);
frameRate(10)
background(220);
rect(125,125,250,250);
rect(125,375,250,250);
rect(125,625,250,250);
rect(375,125,250,250);
rect(375,375,250,250);
rect(375,625,250,250);
rect(625,125,250,250);
rect(625,375,250,250);
rect(625,625,250,250);
}

function draw() {

  text('mouse Y:' + mouseY, 20, 40)
  text(('mouse x:' + mouseX), 20, 20)


}
function mousePressed() {
  
  if(mouseX >= 150 && mouseX < 375 && mouseY >125 && mouseY < 375) {
    console.log('box 1')
    if(player == 1) {
      fill('red')
      circle(125,125,25)
    }
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >125 && mouseY < 375) {
    console.log('box 2')
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >=125 && mouseY < 375) {
    console.log('box 3')
  }
  if(mouseX >= 150 && mouseX < 375 && mouseY >375 && mouseY < 625) {
    console.log('box 4')
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >375 && mouseY < 625) {
    console.log('box 5')
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >375 && mouseY < 625) {
    console.log('box 6')
  }
  if(mouseX >= 150 && mouseX < 375 && mouseY >625 && mouseY < 875) {
    console.log('box 7')
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >625 && mouseY < 875) {
    console.log('box 8')
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >625 && mouseY < 875) {
    console.log('box 9')
  } 
}