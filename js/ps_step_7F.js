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

let Preludi_A1;
let Preludi_A2;
let Preludi_A3;

let propeller;
let angle = 0;

let noteImg;
let magnet;
let MurmelTouchingASurface = false;
let ball;

function preload() {
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  Preludi_A1 = loadSound('./Preludium/A1.mp3');
  Preludi_A2 = loadSound('./Preludium/A2.mp3');
  Preludi_A3 = loadSound('./Preludium/A3.mp3')
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

//add ball with notenImage
  //NOTE 
  ball = new PolygonFromSVG(
    world,
    { x: 110, y: 60,  fromFile: './img/note.svg', image: noteImg },
    { restitution: 0.5 , plugin: {wrap: wrap}, label: "Murmel" }
  );

//create some blocks
//Roter Balken
  blocks.push(new BlockCore(
    world,
    {
      x: 200, y: 250, w: 250, h: 10, color: 'red',
      trigger: (ball, blocks) => { //Trigger für Musik
        console.log("Trigger", ball, blocks); 
        Preludi_A1.play(); 
      }
    },
    { isStatic: true, angle: radians(10) }
  ));
//Gelber Balken
  blocks.push(new BlockCore(
    world,
    { x: 300, y: 300, w: 200, h: 10, color: 'yellow', 
      trigger: (ball, blocks) => {
        Preludi_A2.play(); 
      }
    },
    { isStatic: true, angle: radians(10) }
  ));
//Cyan Balken
  blocks.push(new BlockCore(
    world,
    { x: 400, y: 350, w: 200, h: 10, color: 'cyan',
      trigger: (ball, blocks) => {
        Preludi_A3.play(); 
      } },
    { isStatic: true, angle: radians(10) }
  ));
//Magenta Balken
  blocks.push(new BlockCore(
    world,
    { x: 500, y: 400, w: 200, h: 10, color: 'magenta',
      trigger: (ball, blocks) => {
        Preludi_A4.play();
      } 
    },
    { isStatic: true, angle: radians(10) }
  ));
//Boden
  blocks.push(new BlockCore( 
    world,
    { x: windowWidth / 2, y: 900, w: windowWidth, h: 10, color: 'grey' },
    { isStatic: true }
  ));

  // add a mouse so that we can manipulate Matter objects (Development time only!)
  mouse = new Mouse(engine, canvas, { stroke: 'blue', strokeWeight: 3 });

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
}