function addFields() {

//Rote Linie ganz oben
  blocks.push(new BlockCore(
    world,
    {
      x:0, y: 600, w: 4000, h: 10, color: 'red', 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 

       links = false;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));

 //Startblock  
blocks.push(new BlockCore(
  world, 
  {
    x:0, y: 300, w: 150, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,restitution: 0  }
 ));




//Abschnitt A
//Treppe A1
 blocks.push(new BlockCore(
   world,
   {
     x:150, y: 410, w: 90, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      Preludi_A1.play();
    }
  },
  { isStatic: true, angle: radians(3) }
  ));
//Treppe A2
  blocks.push(new BlockCore(
   world,
   {
     x:270, y: 460, w: 90, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      Preludi_A2.play();
    }
  },
  { isStatic: true, angle: radians(4),restitution: 0 }
  ));

//Treppe A3
  blocks.push(new BlockCore(
    world,
    {
      x:410, y: 550, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       Preludi_A3.play();
     }
   },
   { isStatic: true, angle: radians(10),restitution: 0 }
   ));
//Treppe A4
   blocks.push(new BlockCore(
    world,
    {
      x: 580, y: 600, w: 150, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       Preludi_A4.play();
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));
//Treppe A5
   blocks.push(new BlockCore(
    world,
    {
      x:750, y: 700, w: 150, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       Preludi_A5.play();
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));

//Treppe A3
blocks.push(new BlockCore(
  world,
  {
    x:900, y: 750, w: 100, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     Preludi_A3.play();
   }
 },
 { isStatic: true, angle: radians(3),restitution: 0 }
 ));
//Treppe A4
 blocks.push(new BlockCore(
  world,
  {
    x:1050, y: 800, w: 200, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     Preludi_A4.play();
   }
 },
 { isStatic: true, angle: radians(5),restitution: 0 }
 ));
//Treppe A5
 blocks.push(new BlockCore(
  world,
  {
    x:1200, y: 850, w: 200, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     Preludi_A5.play();
   }
 },
 { isStatic: true, angle: radians(3),restitution: 0 }
 ));

//Abschnitt B






blocks.push(new BlockCore(
  world,
  {
    x: 1300, y: 950, w: 200, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true, angle: radians(-20),restitution: 0}
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 1150, y: 1080, w: 200, h: 10, color: 'yellow', 
      trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
      }
    },
    { isStatic: true, angle: radians(-20),restitution: 0}
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
        x:730, y: 1360, w: 150, h: 10, color: 'cyan', 
        trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
        }
      },
      { isStatic: true,angle: radians(40),restitution: 0 }
      ));

      blocks.push(new BlockCore(
        world,
        {
          x: 860, y: 1590, w: 300, h: 10, color: 'green', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(30),restitution: 0 }
       ));
 

      blocks.push(new BlockCore(
       world,
       {
         x: 860, y: 2150, w: 400, h: 10, color: 'green', 
         trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
        }
      },
      { isStatic: true,angle: radians(30),restitution: 0 }
      ));

      
blocks.push(new BlockCore(
 world,
 {
   x: 1100, y: 1830, w: 270, h: 10, color: 'blue',
   trigger: (ball, blocks) => { //Trigger für Musik
    //console.log("Trigger", ball, blocks); 
  }
},
{ isStatic: true,angle: radians(-50),restitution: 0}
));


//Treppe
blocks.push(new BlockCore(
  world,
  {
    x:1300, y: 2360, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));

blocks.push(new BlockCore(
 world,
 {
   x:1200, y: 2410, w: 400, h: 10, color: 'blue', 
   trigger: (ball, blocks) => { //Trigger für Musik
    //console.log("Trigger", ball, blocks); 
  }
},
{ isStatic: true,angle: radians(-15),restitution: 0 }
));

blocks.push(new BlockCore(
  world,
  {
    x:1100, y: 2460, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1000, y: 2510, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y: 2560, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));
 
 blocks.push(new BlockCore(
  world,
  {
    x:800, y: 2610, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:500, y: 2810, w: 300, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(20),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:900, y: 3010, w: 400, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-30),restitution: 0 }
 ));

//Treppe

 blocks.push(new BlockCore(
  world,
  {
    x:520, y: 3400, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:620, y: 3460, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:720, y: 3520, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:820, y: 3580, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:920, y: 3640, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1020, y: 3690, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1300, y: 3810, w: 200, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-30),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1100, y: 4010, w: 200, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-30),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y: 4210, w: 200, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-30),restitution: 0 }
 ));

  
 blocks.push(new BlockCore(
  world,
  {
    x:700, y: 4410, w: 200, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-30),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:300, y: 4610, w: 200, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(40),restitution: 0.58 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:500, y: 4710, w: 200, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(3),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:630, y: 4780, w: 200, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y: 4810, w: 100, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:910, y: 4830, w: 100, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 
 blocks.push(new BlockCore(
   world,
   {
     x:1120, y: 4910, w: 300, h: 10, color: 'green', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-15),restitution: 0 }
  ));

  
  blocks.push(new BlockCore(
   world,
   {
     x:860, y: 5010, w: 200, h: 10, color: 'pink', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(15),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x:1060, y: 5110, w: 200, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-40),restitution: 0 }
   ));
  

   blocks.push(new BlockCore(
    world,
    {
      x:870, y: 5360, w: 300, h: 10, color: 'pink', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(30),restitution: 0 }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:1070, y: 5460, w: 100, h: 10, color: 'pink', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(10),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y: 5490, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(10),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1400, y: 5550, w: 200, h: 10, color: 'pink', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-16),restitution: 0 }
   ));

   
   //Treppe 

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  5650, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-13),restitution: 0 }
   ));
  
  blocks.push(new BlockCore(
   world,
   {
     x:1000, y:  5750, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-10),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x:800, y:  5850, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-5),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:600, y:  5950, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-3),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:400, y:  6050, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));




   blocks.push(new BlockCore(
    world,
    {
      x:150, y: 6810, w: 100, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
      
     }
   },
   { isStatic: true, angle: radians(5) }
   ));
 
   blocks.push(new BlockCore(
    world,
    {
      x:270, y: 6860, w: 90, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
      
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));
 

   blocks.push(new BlockCore(
     world,
     {
       x:410, y: 6950, w: 100, h: 10, color: 'blue', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
       
      }
    },
    { isStatic: true, angle: radians(10),restitution: 0 }
    ));

    blocks.push(new BlockCore(
     world,
     {
       x: 580, y: 7000, w: 150, h: 10, color: 'blue', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        
      }
    },
    { isStatic: true, angle: radians(4),restitution: 0 }
    ));
 
    blocks.push(new BlockCore(
     world,
     {
       x:750, y: 7100, w: 150, h: 10, color: 'blue', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
       
      }
    },
    { isStatic: true, angle: radians(4),restitution: 0 }
    ));
 
 
 blocks.push(new BlockCore(
   world,
   {
     x:900, y: 7150, w: 100, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
     
    }
  },
  { isStatic: true, angle: radians(3),restitution: 0 }
  ));
 
  blocks.push(new BlockCore(
   world,
   {
     x:1050, y: 7200, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
     
    }
  },
  { isStatic: true, angle: radians(5),restitution: 0 }
  ));

  blocks.push(new BlockCore(
   world,
   {
     x:1200, y: 7250, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
     
    }
  },
  { isStatic: true, angle: radians(3),restitution: 0 }
  ));


  blocks.push(new BlockCore(
    world,
    {
      x:1400, y: 7550, w: 200, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-14),restitution: 0 }
   ));

   
   //Treppe 

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  7650, w: 200, h: 10, color: 'grey', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-11),restitution: 0 }
   ));
  
  blocks.push(new BlockCore(
   world,
   {
     x:1000, y:  7750, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-5),restitution: 0 }
  ));
  

 














   //gerade Linie vor Trichter
   
   blocks.push(new BlockCore(
    world,
    {
      x:600, y:  7850, w: 600, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  











 //Trichter

 blocks.push(new BlockCore(
  world,
  {
    x:300, y: 8610, w: 1300, h: 10, color: 'red', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(40),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1400, y: 8610, w: 1300, h: 10, color: 'red', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-40),restitution: 0 }
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

}
 
