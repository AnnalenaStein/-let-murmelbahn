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
let MurmelTouchingASurface = false;
let ball;

function preload() {
  poly = loadImage('./img/poly.png');
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  // console.log(mySound);
  A_xyl = loadSound('./xyl_sound/A.mp3');
  A1_xyl = loadSound('./xyl_sound/A1.mp3'); //A' heißt jetzt A1, normales A bleibt A
  C_xyl = loadSound('./xyl_sound/C.mp3');
  C1_xyl = loadSound('./xyl_sound/C1.mp3');
  D_xyl = loadSound('./xyl_sound/D.mp3');
  D1_xyl = loadSound('./xyl_sound/D1.mp3');
  E_xyl = loadSound('./xyl_sound/E.mp3');
  E1_xyl = loadSound('./xyl_sound/E1.mp3');
  F_xyl = loadSound('./xyl_sound/F.mp3');
  F1_xyl = loadSound('./xyl_sound/F1.mp3');
  G_xyl = loadSound('./xyl_sound/G.mp3');
  G1_xyl = loadSound('./xyl_sound/G1.mp3');
  G2_xyl = loadSound('./xyl_sound/G2.mp3');
  H_xyl = loadSound('./xyl_sound/H.mp3');
  H1_xyl = loadSound('./xyl_sound/H1.mp3');
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

//create some blocks
  //kleiner grauer Startblock
  blocks.push(new BlockCore(
    world,
    { x: 100, y: 150, w: 10, h: 10, color: 'grey'},
    { isStatic: true}
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 150, y: 250, w: 70, h: 10, color: 'red',
      trigger: (ball, blocks) => { //Trigger für Musik
        console.log("Trigger", ball, blocks); 
        // mySound.play(); //Klavier Sound wird abgespielt 
        E_xyl.play();
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Gelber Balken
  blocks.push(new BlockCore(
    world,
    { x: 200, y: 280, w: 50, h: 10, color: 'yellow', 
      trigger: (ball, blocks) => {
        A_xyl.play();
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Cyan Balken
  blocks.push(new BlockCore(
    world,
    { x: 235, y: 310, w: 30, h: 10, color: 'cyan',
      trigger: (ball, blocks) => {
        H_xyl.play();
      } },
    { isStatic: true, angle: radians(10) }
  ));

  //Magenta Balken
  blocks.push(new BlockCore(
    world,
    { x: 260, y: 330, w: 30, h: 10, color: 'magenta',
      trigger: (ball, blocks) => {
        C1_xyl.play();
      } 
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Magenta Balken
  blocks.push(new BlockCore(
    world,
    { x: 280, y: 350, w: 30, h: 10, color: 'yellow',
      trigger: (ball, blocks) => {
        A_xyl.play();
      } 
    },
    { isStatic: true, angle: radians(10) }
  ));

  

  blocks.push(new BlockCore(
    world,
    {
      x: 330, y: 410, w: 50, h: 10, color: 'red',
      trigger: (ball, blocks) => { //Trigger für Musik
        console.log("Trigger", ball, blocks); 
        E_xyl.play();
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Gelber Balken
  blocks.push(new BlockCore(
    world,
    { x: 355, y: 430, w: 50, h: 10, color: 'yellow', 
      trigger: (ball, blocks) => {
        A_xyl.play();
      }
    },
    { isStatic: true, angle: radians(10) }
  ));

  //Cyan Balken
  blocks.push(new BlockCore(
    world,
    { x: 390, y: 450, w: 30, h: 10, color: 'cyan',
      trigger: (ball, blocks) => {
        H_xyl.play();
      } },
    { isStatic: true, angle: radians(10) }
  ));

//Magenta Balken
blocks.push(new BlockCore(
  world,
  { x: 410, y: 470, w: 30, h: 10, color: 'magenta',
    trigger: (ball, blocks) => {
      C1_xyl.play();
    } 
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 430, y: 490, w: 60, h: 10, color: 'yellow',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      A_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 490, y: 550, w: 50, h: 10, color: 'red',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      E_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 510, y: 570, w: 50, h: 10, color: 'yellow',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      A_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

//Cyan Balken
blocks.push(new BlockCore(
  world,
  { x: 530, y: 590, w: 50, h: 10, color: 'cyan',
    trigger: (ball, blocks) => {
      H_xyl.play();
    } },
  { isStatic: true, angle: radians(10) }
));

//Magenta Balken
blocks.push(new BlockCore(
  world,
  { x: 570, y: 630, w: 50, h: 10, color: 'magenta',
    trigger: (ball, blocks) => {
      C1_xyl.play();
    } 
  },
  { isStatic: true, angle: radians(10) }
));

//Cyan Balken
blocks.push(new BlockCore(
  world,
  { x: 600, y: 650, w: 50, h: 10, color: 'cyan',
    trigger: (ball, blocks) => {
      H_xyl.play();
    } },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 630, y: 670, w: 50, h: 10, color: 'yellow',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      A_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

//Magenta Balken
blocks.push(new BlockCore(
  world,
  { x: 680, y: 710, w: 50, h: 10, color: 'magenta',
    trigger: (ball, blocks) => {
      C1_xyl.play();
    } 
  },
  { isStatic: true, angle: radians(10) }
));

//Cyan Balken
blocks.push(new BlockCore(
  world,
  { x: 710, y: 730, w: 50, h: 10, color: 'cyan',
    trigger: (ball, blocks) => {
      H_xyl.play();
    } },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 750, y: 750, w: 50, h: 10, color: 'yellow',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      A_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 790, y: 800, w: 50, h: 10, color: 'red',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      E_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 820, y: 820, w: 50, h: 10, color: 'red',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      E_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));

blocks.push(new BlockCore(
  world,
  {
    x: 850, y: 840, w: 100, h: 10, color: 'red',
    trigger: (ball, blocks) => { //Trigger für Musik
      console.log("Trigger", ball, blocks); 
      E_xyl.play();
    }
  },
  { isStatic: true, angle: radians(10) }
));


  //add ball with notenImage
  //NOTE 
  ball = new PolygonFromSVG(
    world,
    { x: 110, y: 60,  fromFile: './img/note.svg', image: noteImg },
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
      let ball = new Ball(world, { x: evt.mouse.position.x, y: evt.mouse.position.y, r: 15, color: 'yellow' }, { isStatic: false, label: 'Murmel' }); //label: 'Murmel'
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
  // is SPACE pressed and Murmel touching a surface?
  if (keyCode === 32 && MurmelTouchingASurface === true) {
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
