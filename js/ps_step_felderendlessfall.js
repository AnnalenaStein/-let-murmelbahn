Homeworks.aufgabe = 7;


function addFields() {


  blocks.push(new BlockCore(
    world,
    {
      x:0, y: 600, w: 2000, h: 10, color: 'red', 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 
       jump=false;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));

blocks.push(new BlockCore(
  world,
  {
    x:0, y: 390, w: 150, h: 10, color: 'green', 
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
     x:100, y: 410, w: 160, h: 10, color: 'blue', 
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
     x:200, y: 430, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true, angle: radians(4),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x:300, y: 450, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:400, y: 470, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:500, y: 490, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
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
{ isStatic: true, angle: radians(-25),restitution: 0.58 }
));

blocks.push(new BlockCore(
 world,
 {
  x:730, y: 1360, w: 150, h: 10, color: 'turkoise', 
   trigger: (ball, blocks) => { //Trigger für Musik
    //console.log("Trigger", ball, blocks); 
  }
},
{ isStatic: true,angle: radians(40),restitution: 0.58 }
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
   x: 880, y: 1950, w: 300, h: 10, color: 'green', 
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
   x:2790, y: 400, w: 180, h: 10, color: 'green', 
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

 
  

 

