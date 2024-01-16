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
let murmel;
let angle = 0;

let jazz_bg;
let noteImg;
let music_bg;
let jazz_song;

let canvasElem;
let off = { x: 0, y: 0 };

 // das ist die Dimension des kompletten Levels
 const dim = { w: 9432.5, h: 873.5 };

function preload() {
  music_bg = loadImage('./img/music_lines_bg.png')
  jazz_bg = loadImage('./img/jazz-bg.png');
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  jazz_song = loadSound('./sounds/jazz_song.mp3');
}

function setup() {
  document.getElementsByClassName('overlay')[0].style.display = 'none';
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');

  // Das ist nötig für den 'Endless Canvas'
  canvasElem = document.getElementById('thecanvas');

  engine = Engine.create();
  world = engine.world;

    // the ball has a label and can react on collisions
    murmel = new Ball(world,
      { x: 0, y: -10, r: 25, color: 'white'},
      { label: "Murmel", density: 0.005, restitution: 0.2, friction: 0.001, frictionAir: 0.001 } //Murmel wird bei frictionAir ein bisschen gebremst
    );
    blocks.push(murmel);

      //add ball with notenImage
  

      // add a mouse so that we can manipulate Matter objects
   mouse = new Mouse(engine, canvas, { stroke: 'blue', strokeWeight: 3 });

   Runner.run(engine);


   
   blocks.push(new BlockCore(
     world,
     {
       x: 0, y: 0, w: 400, h: 10, color: 'white', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
      }
    },
    { isStatic: true }
    ));

    blocks.push(new BlockCore(
      world,
      {
        x: 300, y: 50, w: 200, h: 10, color: 'blue',
        trigger: (ball, blocks) => { //Trigger für Musik
          console.log("Trigger", ball, blocks); 
          // mySound.play(); //Klavier Sound wird abgespielt 
          jazz_song.play();
        }
      },
      { isStatic: true }
    ));
  

     blocks.push(new BlockCore(
      world,
      {
        x: 450, y: 100, w: 100, h: 10, color: 'white', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true }
     ));


   blocks.push(new BlockCore(
    world,
    {
      x: 550, y: 150, w: 100, h: 10, color: 'white', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 650, y: 200, w: 100, h: 10, color: 'white', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 800, y: 250, w: 200, h: 10, color: 'white', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1500, y: 250, w: 650, h: 10, color: 'white', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 2200, y: 200, w: 400, h: 10, color: 'white',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));
   

   //Unterer Balken
   blocks.push(new BlockCore(
    world,
    {
      x: 0, y: 500, w:19432.5, h: 20, color: 'green',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   // Verikaler Balken
  blocks.push(new BlockCore(
    world,
   {
      x: 10160, y: 300, w: 20, h: 500, color: 0,
      trigger: (ball, blocks) => { //Trigger für Musik
       console.log("Trigger", ball, blocks); 
     }
  },
   { isStatic: true }
   ));

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

 }
  

 function scrollEndless(point) {
  // wohin muss verschoben werden damit point wenn möglich in der Mitte bleibt
  off = { x: Math.min(Math.max(0, point.x - windowWidth / 2), dim.w -  windowWidth), y: Math.min(Math.max(0, point.y - windowHeight / 2), dim.h -  windowHeight) };
  // plaziert den Canvas im aktuellen Viewport
  canvasElem.style.left = Math.round(off.x) + 'px';
  canvasElem.style.top = Math.round(off.y) + 'px';
  // korrigiert die Koordinaten
  translate(-off.x, -off.y);
  // verschiebt den ganzen Viewport
  window.scrollTo(off.x, off.y);
  // Matter mouse needs the offset as well
  mouse.setOffset(off);
}

function keyPressed(event) {
  switch (keyCode) {
    case 32:
      console.log("Space");
      event.preventDefault();
      Matter.Body.applyForce(murmel.body, murmel.body.position, { x: 0.18, y: -0.18  });
      // Matter. Body.scale(murmel.body, 1.5, 1.5);
      break;
    default:
      console.log(keyCode);
  }
}


function draw() {
  background('blue');

  clear();

  // position canvas and translate coordinates
  scrollEndless(murmel.body.position);

  // animate attracted blocks
  blocks.forEach(block => block.draw());
  mouse.draw();
}

