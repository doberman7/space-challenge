function generateInvaders() {
  if (frames % 300 === 0) {
    invaders.push(new Nave5($canvas.width * 0.4, 0))
    invaders.push(new Nave2($canvas.width * 0.4, 0))
  } else if (frames % 400 === 0) {
    invaders.push(new Nave3($canvas.width * 0.4, 0))
    invaders.push(new Nave6($canvas.width * 0.4, 0))
  } else if (frames % 500 === 0) {
    invaders.push(new Nave4($canvas.width * 0.4, 0))
  }
  //si mueres animacion de morir
  if (p1.isAlive ===false) {
    p1.img.src = './images/nave1Dead2.png'
  }
  //boss
  if (score > 3 && score < 10 ) {
    invaders.push(new Nave4($canvas.width * 0.4, 0))

  }
}

function drawInvaders() {
  invaders.forEach(obs => obs.draw())
}

function bounds() {
  // p1.touched = false
  invaders.forEach(invadr => {
    let direction = collisionCheck(p1, invadr)
    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })

  invadersShots.forEach(invShot=>{
    let direction = shotCheck(p1, invShot)
    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })
  shoots.forEach(shot=>{
    invaders.forEach(invader=>{
      let direction = shotCheck(invader, shot)
      if (direction == "left" || direction == "right") {
        invader.touched = true
        ctx.fillStyle = "white"
        ctx.font = "30px arial" //condicion para aumentar el score
        //   score++
        removeInvader(invader)
        ctx.fillText(`Score: ${score}`, 200, 30)

      } else if (direction == "bottom") {
        invader.touched = true
        ctx.fillStyle = "white"
        ctx.font = "30px arial" //condicion para aumentar el score
        if (p1.isAlive==true) {
          score++
        }
        removeInvader(invader)
        ctx.fillText(`Score: ${score}`, 200, 30)

      } else if (direction == "top") {
        invader.touched = true
        ctx.fillStyle = "white"
        ctx.font = "30px arial" //condicion para aumentar el score
        //   score++
        removeInvader(invader)
        ctx.fillText(`Score: ${score}`, 200, 30)

      }
    })

  })


  if (p1.touched) {
    // alert("You die your score was X ")
    gameover()
  }

}
//gameover
function gameover(){
  //mensaje de game Over en grande
  p1.isAlive = false
  ctx.fillStyle = "white"
  ctx.font = "90px Arial"
  ctx.fillText("Game Over ", 140, $canvas.height / 2)
  //ultiimo mensaje con puntaje
  ctx.font = "20px Arial"
  ctx.fillText(`Lo mejor que pudiste fue: ${score} space demon down`, 50, $canvas.height-40)
  //mensaje de reinicio en rojo
  ctx.fillStyle = "white"
  ctx.fillText("Reiniciando juego", 50, $canvas.height-10)
  setInterval(function(){
    clearInterval(intervalId);
  }, 3000);
  setInterval(function(){
    location.reload();
  }, 3500);
  ;
}

// Colision para invaderaformas
function collisionCheck(p1, invader) {
  let vectorX = p1.x + p1.width / 2 - (invader.x + invader.width / 2)
  let vectorY = p1.y + p1.height / 2 - (invader.y + invader.height / 2)

  let halfWidths = p1.width / 2 + invader.width / 2
  let halfHeights = p1.height / 2 + invader.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    let offsetX = halfWidths - Math.abs(vectorX)
    let offsetY = halfHeights - Math.abs(vectorY)
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left"
        p1.x += offsetX
      } else {
        collisionDirection = "right"
        p1.x -= offsetX
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top"
        p1.y += offsetY
      } else {
        collisionDirection = "bottom"
        p1.y -= offsetY
      }
    }
  }
  return collisionDirection
}

//Colision para Invadershots
function shotCheck(p1, invaderShot) {
  let vectorX = p1.x + p1.width / 2 - (invaderShot.x + invaderShot.width / 2)
  let vectorY = p1.y + p1.height / 2 - (invaderShot.y + invaderShot.height / 2)

  let halfWidths = p1.width / 2 + invaderShot.width / 2
  let halfHeights = p1.height / 2 + invaderShot.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    let offsetX = halfWidths - Math.abs(vectorX)
    let offsetY = halfHeights - Math.abs(vectorY)
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left"
        p1.x += offsetX
      } else {
        collisionDirection = "right"
        p1.x -= offsetX
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top"
        p1.y += offsetY
      } else {
        collisionDirection = "bottom"
        p1.y -= offsetY
      }
    }
  }
  return collisionDirection
}


function printScore() {
  ctx.fillStyle = "white"
  ctx.font = "30px arial" //condicion para aumentar el score
  ctx.fillText(`Score: ${score}`, 200, 30)
}


// funcion para eliminar invader
function removeInvader(invader){

  const index=invaders.indexOf(invader)
  invaders.splice(index,1)
  console.log(invader)
}

function clearElements() {
  invadersShots = [...invadersShots].filter(o => o.y <= $canvas.height)
  shoots=[...shoots].filter(o=> o.y>=0+o.height)
  invaders=[...invaders].filter(o=>o.y <= $canvas.height)
}