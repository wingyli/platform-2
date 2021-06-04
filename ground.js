// ground.js file

class Ground {
  constructor(x, y, width, height) {
    this.x = x * gridSize
    this.y = (maxY - y) * gridSize
    this.width = width * gridSize
    this.height = height * gridSize
  }
  isBelow(x, y) {
  	let below = this.y >= y // boolean
    let between = this.x < x && x < this.x + this.width // boolean
    return below && between
    // if (below && between) {
    //   return true
    // } else {
    //   return false
    // }
  }
  contains(x, y) {
  	let betweenX = this.x < x && x < this.x + this.width
    let betweenY = this.y < y && y < this.y + this.height
    return betweenX && betweenY
  }
  draw() {
    for (let row = 0; row < this.height; row += gridSize) {
      let image = groundSprite.image
      if (row === 0) {
        image = groundTopSprite.image
      }
      for (let col = 0; col < this.width; col += gridSize) {
        ctx.drawImage(image, this.x + col, this.y + row, gridSize, gridSize)
      }
    }
    ctx.strokeStyle = 'darkgreen'
    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
}
