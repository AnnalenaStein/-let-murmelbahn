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
let explodes = [];
let murmel;
let angle = 0;

let blockA;
let blockB;

let boom;

let noteImg;
let lvl1_C;

let elise_A1;
let elise_A2;
let elise_A3;
let elise_A4;
let elise_A5;
let elise_A6;
let elise_B1;
let elise_B2;
let elise_B3;
let elise_B4;
let elise_B5;
let elise_B6;
let elise_B7;
let elise_C1;
let elise_C2;
let elise_C3;
let elise_C4;
let elise_C5;
let elise_C6;
let elise_C7;
let elise_D1;
let elise_D2;
let elise_D3;
let elise_E1;
let elise_E2;
let elise_E3;
let elise_E4;
let elise_F1;
let elise_F2;
let elise_F3;
let elise_F4;
let elise_F5;
let elise_F6;
let elise_F7;
let elise_F8;

let e = 60;


let links = true;
let jp = true;

let canvasElem;
let off = { x: 0, y: 0 };

 // das ist die Dimension des kompletten Levels
 const dim = { w: 1800, h: 16800 };

 class Particle {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
    this.size = 30;
    this.rotate = 0;
    this.move = { x: random(-10, 10), y: random(-10, 10) };
  }

  draw() {
    push();
    fill(this.color);
    translate(this.pos.x, this.pos.y);
    rotate(this.rotate += random(0, 0.5));
    ellipse(0, 0, this.size, this.size);
    pop();
    this.pos.x += this.move.x;
    this.pos.y += this.move.y;
    this.size -= 1;
  }
}

class Explode {

  constructor(attributes) {
    this.attributes = attributes;
    this.shards = [];
    this.exploded = false;
  }

  draw() {
      if (this.shards.length > 0) {
        this.shards.forEach((shard) => shard.draw())
        this.shards = this.shards.filter((shard) => shard.size > 0)
      } else {
        this.exploded = true;
      }
  }

  boom() {
    for (let s = 0; s < 30; s++) {
      this.shards.push(new Particle({ x: this.attributes.pos.x, y: this.attributes.pos.y }, this.attributes.color));
    }
  }
}

function preload() {
  noteImg = loadImage('./img/note.png');
  soundFormats('mp3');
  elise_A1 = loadSound('./Musik/FürElise/A1_D3x.mp3');
  elise_A2 = loadSound('./Musik/FürElise/A2_E3.mp3');
  elise_A3 = loadSound('./Musik/FürElise/A3_B2.mp3');
  elise_A4 = loadSound('./Musik/FürElise/A4_D3.mp3');
  elise_A5 = loadSound('./Musik/FürElise/A5_C3.mp3');
  elise_A6 = loadSound('./Musik/FürElise/A6_A2.mp3');
  elise_B1 = loadSound('./Musik/FürElise/B1_A1.mp3');
  elise_B2 = loadSound('./Musik/FürElise/B2_E2.mp3');
  elise_B3 = loadSound('./Musik/FürElise/B3_A2.mp3');
  elise_B4 = loadSound('./Musik/FürElise/B4_C3.mp3');
  elise_B5 = loadSound('./Musik/FürElise/B5_E3.mp3');
  elise_B6 = loadSound('./Musik/FürElise/B6_A3.mp3');
  elise_B7 = loadSound('./Musik/FürElise/B7_B3.mp3');
  elise_C1 = loadSound('./Musik/FürElise/C1_D0.mp3');
  elise_C2 = loadSound('./Musik/FürElise/C2_D1.mp3');
  elise_C4 = loadSound('./Musik/FürElise/C4_G1x.mp3');
  elise_C5 = loadSound('./Musik/FürElise/C5_D2.mp3');
  elise_C6 = loadSound('./Musik/FürElise/C6_G2x.mp3');
  elise_C7 = loadSound('./Musik/FürElise/C7_B2.mp3');
  elise_D1 = loadSound('./Musik/FürElise/D1_C3.mp3');
  elise_D2 = loadSound('./Musik/FürElise/D2_B2.mp3');
  elise_D3 = loadSound('./Musik/FürElise/D3_A2.mp3');
  elise_E1 = loadSound('./Musik/FürElise/E1_B2.mp3');
  elise_E2 = loadSound('./Musik/FürElise/E2_C3.mp3');
  elise_E3 = loadSound('./Musik/FürElise/E3_D3.mp3');
  elise_E4 = loadSound('./Musik/FürElise/E4_E3.mp3');
  elise_F1 = loadSound('./Musik/FürElise/F1_F3.mp3');
  elise_F2 = loadSound('./Musik/FürElise/F2_E3.mp3');
  elise_F3 = loadSound('./Musik/FürElise/F3_D3.mp3');
  elise_F4 = loadSound('./Musik/FürElise/F4_C3.mp3');
  elise_F5 = loadSound('./Musik/FürElise/F5_B2.mp3');
  elise_F6 = loadSound('./Musik/FürElise/F6_E2.mp3');
  elise_F7 = loadSound('./Musik/FürElise/F7_E3.mp3');
  elise_F8 = loadSound('./Musik/FürElise/F8_E4.mp3');
}

let ex;
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
      { x: 835, y: 0, r: 25, color: 'white'}, //fromFile: './img/Note.svg', image: noteImg // },
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
  
  //ex = new Explode({pos:{x: 100, y: 100}, color: 'red'});
  //ex.boom()


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
      if(jp){
        Matter.Body.applyForce(murmel.body, murmel.body.position, { x: 0.00, y: -0.09  });
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
  //ex.draw();

  //position canvas and translate coordinates
  scrollEndless(murmel.body.position);

  // animate attracted blocks
  blocks.forEach(block => block.draw());
  explodes.forEach(ex => ex.draw());
  mouse.draw();
}

