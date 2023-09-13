let player = 1
let box1 = 0, box2 = 0, box3 = 0, box4 = 0, box5 = 0, box6 = 0, box7 = 0, box8 = 0, box9 = 0

function setup() {
createCanvas(1000,1000);
frameRate(10)
strokeWeight(5)
}

function draw() {
  background(220);
  text(('mouse Y:' + mouseY), 20, 40) //remove later
  text(('mouse x:' + mouseX), 20, 20) //remove later
  rect(125,125,250,250); rect(125,375,250,250); rect(125,625,250,250); rect(375,125,250,250); rect(375,375,250,250); rect(375,625,250,250); rect(625,125,250,250); rect(625,375,250,250); rect(625,625,250,250);
/*  cross(posX = 175, posY = 175) //box1 pos 
  cross(posX = 425, posY = 175) //box2 pos
  cross(posX = 675, posY = 175) //box3 pos 
  cross(posX = 175, posY = 425) //box4 pos
  cross(posX = 425, posY = 425) //box5 pos 
  cross(posX = 675, posY = 425) //box6 pos
  cross(posX = 175, posY = 675) //box7 pos 
  cross(posX = 425, posY = 675) //box8 pos
  cross(posX = 675, posY = 675) //box9 pos
  circle2(posX = 250, posY = 250) //box1 pos
  circle2(posX = 500, posY = 250) //box2 pos
  circle2(posX = 750, posY = 250) //box3 pos
  circle2(posX = 250, posY = 500) //box4 pos
  circle2(posX = 500, posY = 500) //box5 pos
  circle2(posX = 750, posY = 500) //box6 pos
  circle2(posX = 250, posY = 750) //box7 pos
  circle2(posX = 500, posY = 750) //box8 pos
  circle2(posX = 750, posY = 750) //box9 pos */
  if(box1 == 1) {
    cross(posX = 175, posY = 175) //box1 pos 
  }
  if(box1 == 2) {
    circle2(posX = 250, posY = 250) //box1 pos
  }
  if(box2 == 1) {
    cross(posX = 425, posY = 175) //box2 pos
  }
  if(box2 == 2) {
    circle2(posX = 500, posY = 250) //box2 pos
  }
  if(box3 == 1) {
    cross(posX = 675, posY = 175) //box3 pos 
  }
  if(box3 == 2) {
    circle2(posX = 750, posY = 250) //box3 pos
  }
  if(box4 == 1) {
    cross(posX = 175, posY = 425) //box4 pos
  }
  if(box4 == 2) {
    circle2(posX = 250, posY = 500) //box4 pos
  }
  if(box5 == 1) {
    cross(posX = 425, posY = 425) //box5 pos 
  }
  if(box5 == 2) {
    circle2(posX = 500, posY = 500) //box5 pos
  }
  if(box6 == 1) {
    cross(posX = 675, posY = 425) //box6 pos
  }
  if(box6 == 2) {
    circle2(posX = 750, posY = 500) //box6 pos
  }
  if(box7 == 1) {
    cross(posX = 175, posY = 675) //box7 pos 
  }
  if(box7 == 2) {
    circle2(posX = 250, posY = 750) //box7 pos
  }
  if(box8 == 1) {
    cross(posX = 425, posY = 675) //box8 pos
  }
  if(box8 == 2) {
    circle2(posX = 500, posY = 750) //box8 pos
  }
  if(box9 == 1) {
    cross(posX = 675, posY = 675) //box9 pos
  }
  if(box9 == 2) {
    circle2(posX = 750, posY = 750) //box9 pos
  }

}
function mousePressed() {
  
  if(mouseX >= 150 && mouseX < 375 && mouseY >125 && mouseY < 375) { //box 1 detection
    console.log('box 1')
    if(box1 == 0) {
      console.log('test')
      if(player == 1) {
        box1 = 1
        player = 2
        console.log(box1)
      }
      else if(player == 2) {
        box1 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >125 && mouseY < 375) { //box 2 detection 
    console.log('box 2')
    if(box2 == 0) {
      if(player == 1) {
        box2 = 1
        player = 2
      }
      else if(player == 2) {
        box2 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >=125 && mouseY < 375) { //box 3 detection
    console.log('box 3')
    if(box3 == 0) {
      if(player == 1) {
        box3 = 1
        player = 2
      }
      else if(player == 2) {
        box3 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 150 && mouseX < 375 && mouseY >375 && mouseY < 625) { //box 4 detection
    console.log('box 4')
    if(box4 == 0) {
      if(player == 1) {
        box4 = 1
        player = 2
      }
      else if(player == 2) {
        box4 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >375 && mouseY < 625) { //box 5 detection
    console.log('box 5')
    if(box5 == 0) {
      if(player == 1) {
        box5 = 1
        player = 2
      }
      else if(player == 2) {
        box5 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >375 && mouseY < 625) { //box 6 detection
    console.log('box 6')
    if(box6 == 0) {
      if(player == 1) {
        box6 = 1
        player = 2
      }
      else if(player == 2) {
        box6 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 150 && mouseX < 375 && mouseY >625 && mouseY < 875) { //box 7 detection
    console.log('box 7')
    if(box7 == 0) {
      if(player == 1) {
        box7 = 1
        player = 2
      }
      else if(player == 2) {
        box7 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 375 && mouseX < 625 && mouseY >625 && mouseY < 875) { //box 8 detection
    console.log('box 8')
    if(box8 == 0) {
      if(player == 1) {
        box8 = 1
        player = 2
      }
      else if(player == 2) {
        box8 = 2
        player = 1
      }
      else {
      console.log('code brok')
      }
    }
  }
  if(mouseX >= 625 && mouseX < 875 && mouseY >625 && mouseY < 875) { //box 9 detection
    console.log('box 9')
    if(box9 == 0) {
      if(player == 1) {
        box9 = 1
        player = 2
      }
      else if(player == 2) {
        box9 = 2
        player = 1

      }
      else {
      console.log('code brok')
      }
    }
  } 
}
function cross() {  
  line(0 + posX,0 + posY,150 + posX,150 + posY)
  line(0 + posX,150 + posY,150 + posX,0 +posY)
}
function circle2() {
  noFill()
  circle(0 + posX, 0 +posY, 200)
  fill('white')
}