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
let mySound;

let canvasElem;
let off = { x: 0, y: 0 };

 // das ist die Dimension des kompletten Levels
 const dim = { w: 2000, h: 16000 };

function preload() {
  music_bg = loadImage('./img/music_lines_bg.png')
  jazz_bg = loadImage('./img/jazz-bg.png');
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  // console.log(mySound);
  Jazz_aa1 = loadSound('./Jazz_Sound/Jazz_aa1.mp3');
  Jazz_A2 = loadSound('./Jazz_Sound/Jazz_A2.mp3'); 
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
   // murmel = new Ball(world,
      //{ x: 50, y: 60, r: 25, fromFile: './img/Note.svg', image: noteImg  },
     // { label: "Murmel", density: 0.005, restitution: 0.2, friction: 0.001, frictionAir: 0.007 } //Murmel wird bei frictionAir ein bisschen gebremst
  //  );
   // blocks.push(murmel);

    murmel = new Ball(world,
      { x: 60, y: 60, r: 25,color:'green'}, //fromFile: './img/Note.svg', image: noteImg // },
      { label: "Murmel", density: 0.005, restitution: 0, friction: 0.0001, frictionAir: 0.007 } //Murmel wird bei frictionAir ein bisschen gebremst
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
   mouse = new Mouse(engine, canvas, { stroke: 'orange', strokeWeight: 3 });

   Runner.run(engine);
   
   blocks.push(new BlockCore(
     world,
     {
       x:0, y: 390, w: 150, h: 10, color: 'blue', 
       trigger: (murmel, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        Jazz_aa1.play();
      }
    },
    { isStatic: true,restitution: 0  }
    ));

    blocks.push(new BlockCore(
      world,
      {
        x:100, y: 440, w: 160, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         Jazz_A2.play
       }
     },
     { isStatic: true, angle: radians(3) }
     ));

     blocks.push(new BlockCore(
      world,
      {
        x:200, y: 490, w: 200, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true, angle: radians(4),restitution: 0 }
     ));

   blocks.push(new BlockCore(
    world,
    {
      x: 450, y: 550, w: 300, h: 10, color: 'blue',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0}
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 650, y: 650, w: 190, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(20)}
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 910, y: 850, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-20),restitution: 0}
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:720, y: 1010, w: 140, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians( 30),restitution: 0.58 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 980, y: 1210, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-35),restitution: 0.58 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:730, y: 1360, w: 200, h: 10, color: 'turkoise', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(40),restitution: 0.68 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1100, y: 1830, w: 270, h: 10, color: 'blue',
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-50),restitution: 0.58}
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 880, y: 1950, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(30),restitution: 0.58 }
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
   { isStatic: true,restitution: 0.58 }
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
   { isStatic: true,restitution: 0.58 }
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
   { isStatic: true, angle: radians(-15),restitution: 0.58 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:4600, y: 325, w: 120, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,restitution: 0.58 }
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
   { isStatic: true, angle: radians(5),restitution: 0.58 }
   ));
   
   
   blocks.push(new BlockCore(
    world,
    {
      x:5650, y: 345, w: 270, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-2),restitution: 0.58 }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:6150, y: 370, w: 290, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(-22),restitution: 0.58 }
   ));
   

  //  //Unterer Balken
  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 0, y: 9432, w:19432.5, h: 20, color: 'green',
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //    }
  //  },
  //  { isStatic: true }
  //  ));

   // Verikaler Balken
  blocks.push(new BlockCore(
    world,
   {
      x: 10160, y: 300, w: 20, h: 500, color: 0,
      trigger: (ball, blocks) => { //Trigger für Musik
       console.log("Trigger", ball, blocks); 
     }
  },
   { isStatic: true,restitution: 0.58 }
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
      Matter.Body.applyForce(murmel.body, murmel.body.position, { x: 0.03, y: -0.09  });
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