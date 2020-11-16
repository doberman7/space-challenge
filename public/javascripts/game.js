const startBoard=new StartBoard

window.onload = () => {
  startBoard.draw()
}


const p1 = new Nave1(10, 10)
let frames = 0
let ratio = 200
let score = 0
let obstacles = []
let positions = []
let positionsNave2 = []
let positionsNave5 = []
let positionsNave6 = []
let intervalId
let invaders = []
let shoots = []
let invadersShots=[]

let board = new Board

function update() {
  frames++
  generateInvaders()
  invaders.forEach(element => {
    element.moveInvader()
    element.shoot()
    // console.log(invaders)
  });
  clearCanvas()
  board.draw()
  // invader.draw()
  // invader.moveInvader()
  // invader.checkPosition()
  drawInvaders()
  p1.draw()
  shoots.forEach(element => {
    element.draw()
    element.move()
  })
  invadersShots.forEach(element=>{
    element.draw()
    element.move()
  })
  bounds()
  // drawObstacles()
  printScore()
  clearElements()
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function start() {
  if (intervalId) return
  intervalId = setInterval(update, 1000 / 60)
}

$startBtn.onclick = start, clearCanvas