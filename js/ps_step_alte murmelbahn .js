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
let lvl1_C;
let music_bg;
let mySound;

let Preludi_A1;
let Preludi_A2;
let Preludi_A3;
let Preludi_A4;
let Preludi_A5;

let e = 60;


let links = true;
let jump = true;

let canvasElem;
let off = { x: 0, y: 0 };

 // das ist die Dimension des kompletten Levels
 const dim = { w: 1800, h: 16800 };

function preload() {
  music_bg = loadImage('./img/music_lines_bg.png')
  jazz_bg = loadImage('./img/jazz-bg.png');
  noteImg = loadImage('./img/note.png');
  C_field = loadImage('./img/fields/C.png');
  soundFormats('mp3');
  console.log(mySound);
  Preludi_A1 = loadSound('./Musik/Preludium/A1.mp3');
  Preludi_A2 = loadSound('./Musik/Preludium/A2.mp3');
  Preludi_A3 = loadSound('./Musik/Preludium/A3.mp3');
  Preludi_A4 = loadSound('./Musik/Preludium/A4.mp3');
  Preludi_A5 = loadSound('./Musik/Preludium/A5.mp3');
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
      { x: 60, y: 60, r: 25,color:'white'}, //fromFile: './img/Note.svg', image: noteImg // },
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
  addFields();
   Runner.run(engine);
   

   
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
      if(jump){
        Matter.Body.applyForce(murmel.body, murmel.body.position, { x: 0.03, y: -0.09  });
      } else {
        if(links){
          Matter.Body.applyForce(murmel.body, murmel.body.position, { x: -0.03, y: 0.0  });
        } else {
          Matter.Body.applyForce(murmel.body, murmel.body.position, { x: 0.03, y: 0.0  });         
        }
          links = !links;
      }
      break;
    default:
      console.log(keyCode);
  }
}


function draw() {
  background('blue');
  clear();

  //position canvas and translate coordinates
  scrollEndless(murmel.body.position);

  // animate attracted blocks
  blocks.forEach(block => block.draw());
  mouse.draw();
}

