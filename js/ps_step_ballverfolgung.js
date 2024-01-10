Homeworks.aufgabe = 7;

const Engine = Matter.Engine;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const World = Matter.World;

// the Matter engine to animate the world
let engine;
let world;
let mouse;
let isDrag = false;
// an array to contain all the blocks created
let blocks = [];

let mySound;
let drumSound;
let triangleSound;
let pianoSound;

let angle = 0;

let poly, ballImg, blockImg, noteImg;
let magnet;
let MurmelTouchingASurface = false;
let ball;

function preload() {
  poly = loadImage('./img/poly.png');
  noteImg = loadImage('./img/note.png');
  triangleSound = loadSound('./sounds/xylophone.mp3'); //Sounddatei aus STEP Ordner
  console.log(triangleSound);
  soundFormats('mp3');  
  pianoSound = loadSound('./sounds/piano.mp3')
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); //Sonst resized sich alles und die Bahn sieht anders aus
  canvas.parent('thecanvas');
  document.getElementsByClassName('overlay')[0].style.display = 'none';

  engine = Engine.create();
  world = engine.world;

   // reverse gravity
   engine.gravity.y *= -1;

   ceiling = new Block(world, { x: 400, y: 0, w: 1000, h: 30, color: 'grey' }, { isStatic: true });
  ground = new Block(world, { x: 400, y: height, w: 1000, h: 30, color: 'grey' }, { isStatic: true });

  mouse = new Mouse(engine, canvas);

  // run the engine
  Matter.Runner.run(engine);

// config wrap area
const wrap = {
  min: { x: 0, y: 0 },
  max: { x: width, y: height }
};

//wo stroke platzieren?
//create some blocks
  //Piano Balken, oben
  blocks.push(new BlockCore(
    world,
    { x: 50, y: 100, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        pianoSound.play();
      } 
    },
    { isStatic: true, angle: radians(-10) }
  ));
  //unten
  blocks.push(new BlockCore(
    world,
    { x: 50, y: 750, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        pianoSound.play();
      } 
    },
    { isStatic: true, angle: radians(-10) }
  ));
   //Piano Balken, oben
   blocks.push(new BlockCore(
    world,
    { x: 250, y: 100, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        pianoSound.play();
      } 
    },
    { isStatic: true, angle: radians(-10) }
  ));
  //unten
  blocks.push(new BlockCore(
    world,
    { x: 250, y: 750, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        pianoSound.play();
      } 
    },
    { isStatic: true, angle: radians(-10) }
  ));

   //Triangle Balken
   blocks.push(new BlockCore(
    world,
    { x: 150, y: 100, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        triangleSound.play(); //Triangel
      } },
    { isStatic: true, angle: radians(-10) }
  ));
  //unten
  blocks.push(new BlockCore(
    world,
    { x: 150, y: 750, w: 100, h: 10, color: 'white',
      trigger: (ball, blocks) => {
        triangleSound.play(); //Triangel
      } },
    { isStatic: true, angle: radians(-10) }
  ));

  blocks.push(new BlockCore( //unterste Linie
    world,
    { x: windowWidth / 2, y: 900, w: windowWidth, h: 10, color: 'grey' },
    { isStatic: true }
  ));
for(let b = 1; b<10; b++) {

  const fixed1 = new Block(
    world, {
    x: 250 + b*100,
    y: 400+b*10,
    w: 1,
    h: 1,
    color: 'cyan'
  }, { isStatic: false }
  );
  fixed1.constrainTo(null, { pointB: { x: 500 + b*100, y: 180+b*10 }, length: 200, draw: true });
  blocks.push(fixed1);
}

  //add ball with notenImage
  //NOTE 
  ball = new PolygonFromSVG(
    world,
    { x: 110, y: 200,  fromFile: './img/note.svg', image: noteImg },
    { restitution: 0.5 , plugin: {wrap: wrap}, label: "Murmel" }
  );

  // add a mouse so that we can manipulate Matter objects (Development time only!)
  mouse = new Mouse(engine, canvas, { stroke: 'blue', strokeWeight: 3 });
  // const mouseScale = 1 + (1 / (scale / (1 - scale)))
  // Mouse.setScale(mouse, { x: mouseScale, y: mouseScale });

  // process mouseup events in order to drag objects or add more balls
  mouse.on("startdrag", evt => {
    isDrag = true;
  });
  mouse.on("mouseup", evt => {
    if (!isDrag) {
      let ball = new Ball(world, { x: evt.mouse.position.x, y: evt.mouse.position.y, r: 15, color: 'yellow' }, { isStatic: false, restitution: 0.9, label: 'Murmel' }); //label: 'Murmel'
      blocks.push(ball);
    }
    isDrag = false;
    // mySound.play();
  });       

   // Check if Murmel is touching a surface (e.g. the ground) so we know when it should be able to jump
   Matter.Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs[0];
    const bodyA = pairs.bodyA;  
    const bodyB = pairs.bodyB;
    if (bodyA.label === "Murmel" || bodyB.label === "Murmel") {
      MurmelTouchingASurface = true
    }
  });

  Matter.Events.on(engine, 'collisionEnd', function(event) {
    const pairs = event.pairs[0];
    const bodyA = pairs.bodyA;
    const bodyB = pairs.bodyB;
    if (bodyA.label === "Murmel" || bodyB.label === "Murmel") {
      MurmelTouchingASurface = false
    }
  });

  // process collisions - check whether block "Murmel" hits another Block
  Events.on(engine, 'collisionStart', function (event) {
    var pairs = event.pairs;
    pairs.forEach((pair, i) => {
      if (pair.bodyA.label == 'Murmel') {
        pair.bodyA.plugin.block.collideWith(pair.bodyB.plugin.block)
      }
      if (pair.bodyB.label == 'Murmel') {
        pair.bodyB.plugin.block.collideWith(pair.bodyA.plugin.block)
      }
    })
  });

    // setup mouse
    mouse = new Mouse(engine, canvas);
  // run the engine
  Runner.run(engine);   
}

function draw() {
  background(225); 
  ball.draw(); 
  ceiling.draw();
  ground.draw();

  blocks.forEach(block => block.draw());
  mouse.draw();
}

function keyPressed(event) {
  // is SPACE pressed?
  if (event.keyCode === 32) {
    // reverse gravity
    engine.world.gravity.y *= -1;
    // prevent SPACE bar from scrolling page
    event.preventDefault();
  }
}