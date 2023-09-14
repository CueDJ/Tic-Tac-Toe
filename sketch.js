let player = 1 //to keep track of which player it is and at the same time used for if someone wins or ties
let box1 = 0, box2 = 0, box3 = 0, box4 = 0, box5 = 0, box6 = 0, box7 = 0, box8 = 0, box9 = 0 //9 vars for the boxes
let turns = 0 //used to identify a tie 
let player1wins = 0
let player2wins = 0
let gamecount = 1
function setup() { createCanvas(1000, 1000); } //creates the canvas itself
function draw() {
  background(220);
  textSize(50)
  strokeWeight(5)
  fill('black')
  text("Tic Tac Toe", 370, 75)
  textSize(20)
  if (player == 1) {
    text("Player 1 (cross)", 430, 110) //notes that its players 1 turn
  }
  if (player == 2) {
    text("Player 2 (circle)", 430, 110) //notes that its players 2 turn
  }
  if (player == 3) {
    text('Player 1 wins!', 430, 110)
    text('Press R to reset and update stats!', 350, 910) //player 1 wins and enables reset
  }
  if (player == 4) {
    text('Player 2 wins!', 430, 110)
    text('Press R to reset and update stats!', 350, 910) //player 2 wins and enables reset
  }
  if (player == 5) {
    text('Tie!', 480, 110)
    text('Press R to reset and update stats!', 350, 910)//no one wins and enables reset
  }
  text('player 1 has won ' + player1wins + " times!", 120, 950)
  text('player 2 has won ' + player2wins + " times!", 625, 950)
  text("Game " + gamecount + "!", 450, 950)
  fill('white')
  rect(125, 125, 250, 250); rect(125, 375, 250, 250); rect(125, 625, 250, 250); rect(375, 125, 250, 250); rect(375, 375, 250, 250); rect(375, 625, 250, 250); rect(625, 125, 250, 250); rect(625, 375, 250, 250); rect(625, 625, 250, 250); //main board rectangles
  if (box1 == 1) {
    cross(posX = 175, posY = 175) //box1 pos 
  }
  if (box1 == 2) {
    circle2(posX = 250, posY = 250) //box1 pos
  }
  if (box2 == 1) {
    cross(posX = 425, posY = 175) //box2 pos
  }
  if (box2 == 2) {
    circle2(posX = 500, posY = 250) //box2 pos
  }
  if (box3 == 1) {
    cross(posX = 675, posY = 175) //box3 pos 
  }
  if (box3 == 2) {
    circle2(posX = 750, posY = 250) //box3 pos
  }
  if (box4 == 1) {
    cross(posX = 175, posY = 425) //box4 pos
  }
  if (box4 == 2) {
    circle2(posX = 250, posY = 500) //box4 pos
  }
  if (box5 == 1) {
    cross(posX = 425, posY = 425) //box5 pos 
  }
  if (box5 == 2) {
    circle2(posX = 500, posY = 500) //box5 pos
  }
  if (box6 == 1) {
    cross(posX = 675, posY = 425) //box6 pos
  }
  if (box6 == 2) {
    circle2(posX = 750, posY = 500) //box6 pos
  }
  if (box7 == 1) {
    cross(posX = 175, posY = 675) //box7 pos 
  }
  if (box7 == 2) {
    circle2(posX = 250, posY = 750) //box7 pos
  }
  if (box8 == 1) {
    cross(posX = 425, posY = 675) //box8 pos
  }
  if (box8 == 2) {
    circle2(posX = 500, posY = 750) //box8 pos
  }
  if (box9 == 1) {
    cross(posX = 675, posY = 675) //box9 pos
  }
  if (box9 == 2) {
    circle2(posX = 750, posY = 750) //box9 pos
  }
  strokeWeight(20)
  // wins player 1
  if (box1 == 1 && box2 == 1 && box3 == 1) {
    player = 3 //player 3 means player 1 has won
    line(180, 250, 820, 250)
  }
  if (box4 == 1 && box5 == 1 && box6 == 1) {
    player = 3
    line(180, 500, 820, 500)
  }
  if (box7 == 1 && box8 == 1 && box9 == 1) {
    player = 3
    line(180, 750, 820, 750)
  }
  if (box1 == 1 && box4 == 1 && box7 == 1) {
    player = 3
    line(250, 170, 250, 830)
  }
  if (box2 == 1 && box5 == 1 && box8 == 1) {
    player = 3
    line(500, 170, 500, 830)
  }
  if (box3 == 1 && box6 == 1 && box9 == 1) {
    player = 3
    line(750, 170, 750, 830)
  }
  if (box1 == 1 && box5 == 1 && box9 == 1) {
    player = 3
    line(170, 170, 820, 820)
  }
  if (box7 == 1 && box5 == 1 && box3 == 1) {
    player = 3
    line(170, 830, 825, 175)
  }
  // wins player 2
  if (box1 == 2 && box2 == 2 && box3 == 2) {
    player = 4 //player 4 means player 2 has won
    line(180, 250, 820, 250)
  }
  if (box4 == 2 && box5 == 2 && box6 == 2) {
    player = 4
    line(180, 500, 820, 500)
  }
  if (box7 == 2 && box8 == 2 && box9 == 2) {
    player = 4
    line(180, 750, 820, 750)
  }
  if (box1 == 2 && box4 == 2 && box7 == 2) {
    player = 4
    line(250, 170, 250, 830)
  }
  if (box2 == 2 && box5 == 2 && box8 == 2) {
    player = 4
    line(500, 170, 500, 830)
  }
  if (box3 == 2 && box6 == 2 && box9 == 2) {
    player = 4
    line(750, 170, 750, 830)
  }
  if (box1 == 2 && box5 == 2 && box9 == 2) {
    player = 4
    line(170, 170, 820, 820)
  }
  if (box7 == 2 && box5 == 2 && box3 == 2) {
    player = 4
    line(170, 830, 825, 175)
  }
  if (turns == 9 && player <= 2) {
    player = 5 // player 5 means a tie
  }
}
function mousePressed() {
  if (mouseX >= 150 && mouseX < 375 && mouseY > 125 && mouseY < 375) { //box 1 detection
    if (box1 == 0) {
      if (player == 1) {
        box1 = 1 //this is used to identify if something is placed
        player = 2 //this changes it to the second player
        turns += 1 //this adds a turn used for ties 
      }
      else if (player == 2) {
        box1 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 375 && mouseX < 625 && mouseY > 125 && mouseY < 375) { //box 2 detection 
    if (box2 == 0) {
      if (player == 1) {
        box2 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box2 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 625 && mouseX < 875 && mouseY >= 125 && mouseY < 375) { //box 3 detection
    if (box3 == 0) {
      if (player == 1) {
        box3 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box3 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 150 && mouseX < 375 && mouseY > 375 && mouseY < 625) { //box 4 detection
    if (box4 == 0) {
      if (player == 1) {
        box4 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box4 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 375 && mouseX < 625 && mouseY > 375 && mouseY < 625) { //box 5 detection
    if (box5 == 0) {
      if (player == 1) {
        box5 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box5 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 625 && mouseX < 875 && mouseY > 375 && mouseY < 625) { //box 6 detection
    if (box6 == 0) {
      if (player == 1) {
        box6 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box6 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 150 && mouseX < 375 && mouseY > 625 && mouseY < 875) { //box 7 detection
    if (box7 == 0) {
      if (player == 1) {
        box7 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box7 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 375 && mouseX < 625 && mouseY > 625 && mouseY < 875) { //box 8 detection
    if (box8 == 0) {
      if (player == 1) {
        box8 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box8 = 2
        player = 1
        turns += 1
      }
    }
  }
  if (mouseX >= 625 && mouseX < 875 && mouseY > 625 && mouseY < 875) { //box 9 detection
    if (box9 == 0) {
      if (player == 1) {
        box9 = 1
        player = 2
        turns += 1
      }
      else if (player == 2) {
        box9 = 2
        player = 1
        turns += 1
      }
    }
  }
}
function cross() { //function made to make a cross
  line(0 + posX, 0 + posY, 150 + posX, 150 + posY)
  line(0 + posX, 150 + posY, 150 + posX, 0 + posY)
}
function circle2() { //function made to make a circle
  noFill()
  circle(0 + posX, 0 + posY, 200)
  fill('black')
}
function keyPressed() {
  if (keyCode == 82 && player >= 3) {
    box1 = 0
    box2 = 0
    box3 = 0
    box4 = 0
    box5 = 0
    box6 = 0
    box7 = 0
    box8 = 0
    box9 = 0
    turns = 0
    gamecount += 1
    if (player == 3) {
      player = 2
      player1wins += 1
    }
    if (player == 4) {
      player = 1
      player2wins += 1
    }
  }
}