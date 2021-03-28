var Ruhi, office, mall, swing
var officeImg, mallImg, swingImg, RuhiImg

function preload(){
officeImg = loadImage("office.png")
mallImg = loadImage("mall.jpg")
swingImg = loadImage("swing.jpg")
RuhiImg = loadImage("Ruhi.png")
}

function setup(){
createCanvas(displayWidth, displayHeight)
Ruhi = createSprite(displayWidth/2, displayHeight/2)
Ruhi.addImage("Beauty", RuhiImg)
office = createSprite(200,200)
office.addImage("office", officeImg)
mall = createSprite(500,500)
mall.scale = .3
mall.addImage("mall", mallImg)
swing = createSprite(600,600)
swing.addImage("swing", swingImg)
swing.scale = .3
}

function draw(){
background(255,255,255)
drawSprites()
if(keyDown("up")){
Ruhi.velocityY = -3
}
if(keyDown("down")){
Ruhi.velocityY = 3
}
if(keyDown("right")){
Ruhi.velocityX = 3
}
if(keyDown("left")){
Ruhi.velocityX = -3
}
edges = createEdgeSprites()
Ruhi.bounceOff(edges)
}