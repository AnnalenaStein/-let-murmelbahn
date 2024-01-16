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

let canvasElem;
let off = { x: 0, y: 0 };

 // das ist die Dimension des kompletten Levels
 const dim = { w: 9432.5, h: 873.5 };

function preload() {
  music_bg = loadImage('./img/music_lines_bg.png')
  jazz_bg = loadImage('./img/jazz-bg.png');
  noteImg = loadImage('./img/note.png');
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
      { x: 50, y: 60, r: 25, fromFile: './img/Note.svg', image: noteImg  },
      { label: "Murmel", density: 0.005, restitution: 0.2, friction: 0.001, frictionAir: 0.007 } //Murmel wird bei frictionAir ein bisschen gebremst
    );
    blocks.push(murmel);

      //add ball with notenImage
  //NOTE 
  // murmel = new Ball(
  //   world,
  //   { x: 50, y: 60, fromFile: './img/note.svg', image: noteImg },
  //   { label: "Murmel", density: 0.005, restitution: 0.2, friction: 0.001, frictionAir: 0.007 }
  // ); blocks.push(murmel);

      // add a mouse so that we can manipulate Matter objects
   mouse = new Mouse(engine, canvas, { stroke: 'blue', strokeWeight: 3 });

   Runner.run(engine);
   
   blocks.push(new BlockCore(
     world,
     {
       x:0, y: 390, w: 150, h: 10, color: 'purple', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
      }
    },
    { isStatic: true }
    ));

    blocks.push(new BlockCore(
      world,
      {
        x:150, y: 400, w: 160, h: 10, color: 'purple', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true }
     ));

     blocks.push(new BlockCore(
      world,
      {
        x:300, y: 350, w: 160, h: 10, color: 'purple', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true, angle: radians(-25) }
     ));

   blocks.push(new BlockCore(
    world,
    {
      x: 520, y: 310, w: 300, h: 10, color: 'purple',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 730, y: 330, w: 90, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 830, y: 350, w: 60, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:980, y: 410, w: 140, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1180, y: 410, w: 200, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1500, y: 360, w: 400, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-10) }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1790, y: 330, w: 170, h: 10, color: 'purple',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 2080, y: 350, w: 200, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:2490, y: 410, w: 180, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:2790, y: 400, w: 180, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:3090, y: 400, w: 150, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:3350, y: 415, w: 100, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:3790, y: 400, w: 250, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:4220, y: 360, w: 270, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-15) }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:4600, y: 325, w: 120, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:4990, y: 325, w: 170, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:5250, y: 325, w: 270, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(5) }
   ));
   
   
   blocks.push(new BlockCore(
    world,
    {
      x:5650, y: 345, w: 270, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-2) }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:6150, y: 370, w: 290, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-22) }
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

