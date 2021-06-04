// hero.js file

class Hero {
  constructor() {
    this.reset()
  }
  reset() {
    this.x = gridSize * 3.5
    this.y = 0
    this.dx = 0
    this.dy = 0
    this.airborne = true
  }
  moveLeft() {
    // this.dx = this.dx - (gridSize * 1/10)
    this.dx = gridSize * -(1/10)
  }
  moveRight() {
    this.dx = gridSize * 1/10
  }
  jump() {
    // if the hero is already airborne, exit early
    if (this.airborne) {
      return
    }
    this.airborne = true
    this.dy = gridSize * -(1/3)
  }
  step() {
    let prevX = this.x
    let prevY = this.y

    // move the hero position (x,y) by speed (dx,dy)
    this.x += this.dx
    this.y += this.dy

    // apply "friction" to x movement (slow down)
    this.dx *= 0.7

    // apply "gravity" to y movement (speed up)
    this.dy += 1/60 * gridSize

    // todo check for collisions
    let collidingPlatform = undefined
    grounds.forEach(ground => {
      let wasAbove = ground.isBelow(prevX, prevY)
      let isInside = ground.contains(this.x, this.y)
      if (wasAbove && isInside) {
        collidingPlatform = ground
      }
    })

    if (collidingPlatform !== undefined) {
      this.airborne = false
      this.dy = 0
      this.y = collidingPlatform.y
    }

    // todo check for falling below screen
    if (this.y > canvas.height + gridSize) {
      this.reset()
    }
  }
  draw() {
    // figure out which sprite to draw
    let image = heroStandSprite.image
    if (Math.abs(this.dx) > 0.1) {
      // we know the hero is moving
      image = heroWalkSprite1.image
    }
    if (this.airborne) { // same as if (this.airborne === true)
      // we know the hero is in the air already
      image = heroJumpSprite.image
    }
    
    // draw the sprite
    ctx.drawImage(image, this.x - gridSize / 2, this.y - gridSize, gridSize, gridSize)
    
    // draw the logical position
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
    ctx.fill()
  }
}
