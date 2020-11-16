class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = './images/meteors.png'
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    if( -this.y < -$canvas.height) this.y = 0
     this.y++
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
     ctx.drawImage(this.img, this.x, this.y - $canvas.height, this.width, this.height)
  }
}
// Factory oof ships
class MotherShip {
  constructor(health, strength, x, y) {
    this.health = health,
      this.strength = strength,
      this.x = x,
      this.y = y
    this.width = 100
    this.height = 60
    this.img = new Image()
    this.img.src = "./images/nave1.png"
    this.vel = 10
    this.isAlive = true
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    return
  }

  randomizer() {
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min) + min)
    return random
  }

  checkPosition() {
    let postion = positionsNave2[positionsNave2.length - 1]
  }
  shoot() {
    if (frames%50===0) {
      invadersShots.push(new InvadersShots(this.x+(this.width*0.5 ), this.y))
    }
  }

  moveInvader() {
    if (this.y < 400 && this.x > 0 && this.x < $canvas.width) {
      let random = this.randomizer()
      switch (random) {
        case 1:
          this.x -= 15
          this.y += 4
          break;
        case 2:
          this.x += 15
          this.y += 3
          break;
        case 3:
          this.x += 25
          this.y--
          break;
        case 4:
          this.x -= 20
          this.y--
          break;
        case 5:
          this.x += 5
          this.y++
          break;
        default:
          break;
      }
    } else {
      let random = this.randomizer()
      switch (random) {
        case 1:
          this.x -= 15
          this.y -= 3
          break;
        case 2:
          this.x += 15
          this.y -= 3
          break;
        case 3:
          this.x += 15
          this.y -= 3
          break;
        case 4:
          this.x -= 15
          this.y -= 3
          break;
        case 5:
          this.x += 15
          this.y -= 3
          break;
        default:
          break;
      }
    }
  }
}


// nave 1
class Nave1 extends MotherShip {
  constructor(health, strength) {
    super(health, strength)
    this.health = health,
      this.strength = strength
    this.x = $canvas.width * .4
    this.y = $canvas.height * .9
    this.img = new Image()
    this.img.src = './images/nave1.png'
    this.touched = false
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positions.push([this.x, this.y])
  }
  shoot(shoot) {
    if (shoot == "SHOOT") {
      shoots.push(new Shots(this.x+(this.width*0.5 ), this.y))
    }
  }
  move(direction) {
    switch (direction) {
      case "UP":
        if (this.y <= 0) return
        return (this.y -= this.vel + 30)
      case "DOWN":
        if (this.y >= $canvas.height - this.height) return
        return (this.y += this.vel + 30)
      case "LEFT":
        if (this.x < 0) return
        return (this.x -= this.vel + 100)
      case "RIGHT":
        if (this.x >= $canvas.width - this.width) return
        return (this.x += this.vel + 100)
      default:
        throw new Error("Invalid direction")
    }
  }


}


class Nave2 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = 5
    this.strength = 1
    this.x = $canvas.width * .4
    this.y = 0
    this.img = new Image()
    this.img.src = './images/nave2.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positionsNave2.push([this.x, this.y])
  }
}

class Nave3 extends MotherShip {
  constructor(health, strength) {
    super(health, strength)
    this.health = 10
    this.strength = 2
    this.x = $canvas.width * .4
    this.y = 0
    this.img = new Image()
    this.img.src = './images/nave3.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positionsNave2.push([this.x, this.y])
  }
}

class Nave4 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = 10
    this.strength = 3
    this.x = $canvas.width * .4
    this.y = 0
    this.img = new Image()
    this.img.src = './images/nave4.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positionsNave2.push([this.x, this.y])
  }
}
class Nave5 extends MotherShip {
  constructor(health, strength) {
    super(health, strength)
    this.health = 5,
      this.strength = 1
    this.x = $canvas.width * .4
    this.y = 0
    this.img = new Image()
    this.img.src = './images/nave5.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positionsNave5.push([this.x, this.y])
  }


  checkPosition() {
    let position = positionsNave5[positionsNave5.length - 1]
    console.log(position);
    return position;
  }


  moveInvader() {
    // let rand = this.randomizer();
    // let positions = this.checkPosition();
    // console.log(this.x, this.y);




    if (this.x > 0 && this.x < $canvas.width) {

      this.x--
      this.y++
    } else if (this.y < $canvas.width && this.y > 0) {
      //normal speed
      this.y++
      //faster
      // console.log(p1.x % 2 == 0);
      if (p1.x % 2 == 0) this.y += 7

    }





  }
}
class Nave6 extends MotherShip {
  constructor(health, strength) {
    super(health, strength)
    this.health = 5,
      this.strength = 1
    this.x = $canvas.width * .4
    this.y = 0
    this.img = new Image()
    this.img.src = './images/nave6.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positionsNave6.push([this.x, this.y])
  }


  checkPosition() {
    let position = positionsNave6[positionsNave5.length - 1]
    console.log(position);
    return position;
  }


  moveInvader() {
    if (this.x < $canvas.width - this.width) {

      this.x++
      this.y++
    } else {

      //normal speed
      // this.y++
      this.x--
      //faster
      // console.log(p1.x % 2 == 0);
      if (p1.x % 3 == 0) this.y += 4

    }





  }
}



class Shots {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 8
    this.height = 15
    this.img = new Image()
    this.img.src = './images/bullet.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //ctx.fillRect(this.x,this.y,10,10)
  }
  move() {
    this.y -= 10
  }
}


class InvadersShots{
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 8
    this.height = 15
    this.img = new Image()
    this.img.src = './images/lasers.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //ctx.fillRect(this.x,this.y,10,10)
  }
  move() {
    this.y += 10
  }

}

class StartBoard {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.fillStyle=`rgba(255,255,255,0.5)`
    this.imgArrows = new Image()
    this.imgArrows.src = './images/keyArrows2.png'
    this.imgSpace = new Image()
    this.imgSpace.src = './images/spacebarIcon.png'
    this.imgFondoStart= new Image()
    this.imgFondoStart.src='./images/spaceDemons.png'
  }
  draw() {
    ctx.fillStyle=this.fillStyle
    ctx.fillRect(0,0,this.width, this.height)
    ctx.font="20px Arial"
    ctx.fillStyle='black'
    ctx.fillText("Press Spacebar for shooting", 90, 460)
    ctx.fillText("Press arrows for moving", 520, 460)
    ctx.drawImage(this.imgArrows,550,460,150, 150)
    ctx.drawImage(this.imgSpace,125,500,180,80)
    ctx.drawImage(this.imgFondoStart,0,0,$canvas.width,420)
    ctx.fillStyle="black"
    ctx.fillRect(0,340,400,80)
    ctx.font="18px Arial"
    ctx.fillStyle="white"
    ctx.fillText("A través de la galaxia, el jugador se embarca ",5,360)
    ctx.fillText("en una misión para eliminar a los demonios",5,380)
    ctx.fillText("intergalácticos que se atraviesan a su paso.",5,400)
  }
}
