// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(filename) {
  let image = new Image()
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = 'images/' + filename
  return {
    image: image,
    loaded: loaded,
  }
}
let heroStandSprite = loadSprite('hero_stand.png')
let heroJumpSprite = loadSprite('hero_jump.png')
let heroWalkSprite1 = loadSprite('hero_walk1.png')
let heroWalkSprite2 = loadSprite('hero_walk2.png')
let groundSprite = loadSprite('ground.png')
let groundTopSprite = loadSprite('ground_top.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'lightblue'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

let maxY = 12 // number of grids in the vertical direction
let gridSize = Math.ceil(canvas.height / maxY) // height / width of each grid

// Discussion:
// - How to draw the platforms with sprites?
//   - use ctx.drawImage method
//   - use nested for loops to call ctx.drawImage
// - How to check for "collisions" with platforms?
//   - compare top of the platforms with the bottom of the character (y position)
//   - also compare left and right of platforms with character's x position
// - How to respawn hero after falling off screen?
//   - to check for the game ending condition (the character falls off),
//   - we want to compare character's position with bottom of the canvas
//   - if it falls below, then restart game
//   - to restart game, we want to reset the character's state to its initial values










