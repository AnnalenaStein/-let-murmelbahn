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

let propeller;
let angle = 0;

let poly, ballImg, blockImg, noteImg;
let magnet;
let characterTouchingASurface = false;
let ball;

function preload() {
  poly = loadImage('./img/poly.png');
  ballImg = loadImage('./img/ball.png');
  boxImg = loadImage('./img/box.png');
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  mySound = loadSound('./sounds/xylophone.mp3'); //Sounddatei aus STEP Ordner
  console.log(mySound);
  drumSound = loadSound('./sounds/drum.mp3');
  triangleSound = loadSound('./sounds/triangle.mp3');
  pianoSound = loadSound('./sounds/piano.mp3')
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); //Sonst resized sich alles und die Bahn sieht anders aus
  canvas.parent('thecanvas');
  document.getElementsByClassName('overlay')[0].style.display = 'none';

  engine = Engine.create();
  world = engine.world;

// config wrap area
const wrap = {
  min: { x: 0, y: 0 },
  max: { x: width, y: height }
};

  // create some blocks
  // the blue box triggers a function on collisions with a "Murmel"
  blocks.push(new BlockCore(
    world,
    {
      x: 200, y: 200, w: 60, h: 60, color: 'blue',
      trigger: (ball, block) => {
        console.log("Trigger ", ball, block);
        block.attributes.color = 'white';
      }
    },
    { isStatic: false, density: 0.5 }
  ));

  blocks.push(new BlockCore(
    world,
    { x: 100, y: 150, w: 10, h: 10, color: 'grey'},
    { isStatic: true}
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 200, y: 250, w: 250, h: 10, color: 'red',
      trigger: (ball, blocks) => { //Trigger für Musik
        console.log("Trigger", ball, blocks); 
        mySound.play(); //Klavier Sound wird abgespielt 
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Gelber Balken
  blocks.push(new BlockCore(
    world,
    { x: 300, y: 300, w: 200, h: 10, color: 'yellow', 
      trigger: (ball, blocks) => {
        drumSound.play(); //Trommel
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Cyan Balken
  blocks.push(new BlockCore(
    world,
    { x: 400, y: 350, w: 200, h: 10, color: 'cyan',
      trigger: (ball, blocks) => {
        triangleSound.play(); //Triangel
      } },
    { isStatic: true, angle: radians(10) }
  ));

  //Magenta Balken
  blocks.push(new BlockCore(
    world,
    { x: 500, y: 400, w: 200, h: 10, color: 'magenta',
      trigger: (ball, blocks) => {
        pianoSound.play();
      } 
    },
    { isStatic: true, angle: radians(10) }
  ));

  blocks.push(new BlockCore( //unterste Linie
    world,
    { x: windowWidth / 2, y: 900, w: windowWidth, h: 10, color: 'grey' },
    { isStatic: true }
  ));

  // the ball has the label "Murmel" and can cause collisions (see below)
  //Magenta Ball
 ball = new Ball(
    world,
    { x: 100, y: 50, r: 45, color: 'magenta' },
    { restitution: 0.2, plugin: {wrap: wrap}, label: 'Murmel', label: 'character'},
  );

  blocks.push(new BlockCore(
    world,
    { x: 200, y: 60, w: 100, h: 10, color: 'cyan' },
    { isStatic: false, angle: radians(90), restitution: 0.5 }
  ));

  blocks.push(new BlockCore(
    world,
    { x: 500, y: 400, w: 100, h: 10, color: 'yellow' },
    { isStatic: false, angle: radians(90), restitution: 0.5 }
  ));

  //NOTE
  //add ball with notenImage
  ball = new Ball(
    world,
    { x: 100, y: 50, r: 20, image: noteImg },
    { restitution: 0.2, plugin: {wrap: wrap}, label: "Murmel", label: 'character', }
  );

  // add box with image
  blocks.push(new Block(
    world,
    { x: 200, y: 0, w: 64, h: 64, image: boxImg },
    { isStatic: false, restitution: 1.0 }));


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

   // Check if character is touching a surface (e.g. the ground) so we know when it should be able to jump
   Matter.Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs[0];
    const bodyA = pairs.bodyA;
    const bodyB = pairs.bodyB;
    if (bodyA.label === "character" || bodyB.label === "character") {
      characterTouchingASurface = true
    }
  });

  Matter.Events.on(engine, 'collisionEnd', function(event) {
    const pairs = event.pairs[0];
    const bodyA = pairs.bodyA;
    const bodyB = pairs.bodyB;
    if (bodyA.label === "character" || bodyB.label === "character") {
      characterTouchingASurface = false
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
  background(40);
  // animate attracted blocks
  // magnet.attract();

  // animate angle property of propeller
  // Matter.Body.setAngle(propeller.body, angle);
  // Matter.Body.setAngularVelocity(propeller.body, 0.15);
  // angle += 0.07;

  // propeller.draw();
  ball.draw(); 

  blocks.forEach(block => block.draw());
  mouse.draw();
}

function keyPressed() {
  // is SPACE pressed and character touching a surface?
  if (keyCode === 32 && characterTouchingASurface === true) {
    let direction = 1; // ball runs left to right ->
    if ((ball.body.position.x - ball.body.positionPrev.x) < 0) {
      direction = -1; // ball runs right to left <-
    }
    // use current direction and velocity for the jump
    Matter.Body.applyForce(
      ball.body,
      {x: ball.body.position.x, y: ball.body.position.y},
      {x: (0.01 * direction) + ball.body.velocity.x / 100, y: -0.1}
    );
  }
};