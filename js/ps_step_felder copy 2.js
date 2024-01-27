function addFields() {

//Rote Linie ganz oben
  blocks.push(new BlockCore(
    world,
    {
      x:0, y: 600, w: 4000, h: 10, color: 'red', 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 

       jump = false;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));



 //Startblock  
blocks.push(new BlockCore(
  world, 
  {
    x:740, y: 150, w: 150, h: 10, color: 'green',
    trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,restitution: 0  }
  ));



  //hüpfender Part
  //Part A
  blocks.push(new BlockCore(
    world,
    {
      x: 850, y: 400, w: 150, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_A1.play();
     }
   },
   { isStatic: true,angle: radians(45),restitution: 0.70 }
   ));
 
   
   
   blocks.push(new BlockCore(
     world,
     {
       x: 1100, y: 550 , w: 150, h: 10, color: 'blue',
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A2.play();
      }
    },
    { isStatic: true,angle: radians(-45),restitution: 0.70 }
    ));
    
    blocks.push(new BlockCore(
     world,
     {
       x: 850, y: 640, w: 150, h: 10, color: 'purple', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A1.play();
      }
    },
    { isStatic: true,angle: radians(45),restitution: 0.70 }
    ));
    
    blocks.push(new BlockCore(
      world,
      {
        x: 1100, y: 750, w: 150, h: 10, color: 'green', 
        trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
          elise_A2.play();
        }
      },
      { isStatic: true, angle: radians(-45),restitution: 0.60 }
      ));
      
      blocks.push(new BlockCore(
        world,
        {
          x: 850, y: 850, w: 150, h: 10, color: 'purple', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A1.play();
         }
       },
       { isStatic: true,angle: radians(45),restitution: 0.70 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x: 1100, y: 950, w: 150, h: 10, color: 'green', 
          trigger: (ball, blocks) => { //Trigger für Musik
            //console.log("Trigger", ball, blocks); 
            elise_A2.play();
          }
        },
        { isStatic: true, angle: radians(-45),restitution: 0.80 }
        ));
      
      //Treppe
       blocks.push(new BlockCore(
        world,
        {
          x: 740, y: 1220, w: 150, h: 10, color: 'orange', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A3.play();
         }
       },
       { isStatic: true,angle: radians(25),restitution: 0.6 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x: 920, y: 1280, w: 100, h: 10, color: 'orange', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A4.play();
         }
       },
       { isStatic: true,angle: radians(10),restitution: 0 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x: 1060, y: 1370, w: 150, h: 10, color: 'orange', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A5.play();
         }
       },
       { isStatic: true,angle: radians(10),restitution: 0 }
       ));

       blocks.push(new BlockCore(
        world,
        {
          x: 1280, y: 1440, w: 220, h: 10, color: 'orange', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A6.play();
         }
       },
       { isStatic: true,angle: radians(1),restitution: 0 }
       ));
     
//Part B
       blocks.push(new BlockCore(
        world,
        {
          x: 1545, y: 1580, w: 100, h: 10, color: 'yellow', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_B1.play();
         }
       },
       { isStatic: true,angle: radians(-30),restitution: 0.4 }
       ));

     blocks.push(new BlockCore(
      world,
      {
        x: 1410, y: 1700, w: 200, h: 10, color: 'yellow', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_B2.play();
       }
     },
     { isStatic: true,angle: radians(-10),restitution: 0 }
     ));

     blocks.push(new BlockCore(
      world,
      {
        x: 1200, y: 1760, w: 200, h: 10, color: 'yellow', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks);
         elise_B3.play(); 
       }
     },
     { isStatic: true,angle: radians(-10),restitution: 0 }
     ));
    
     blocks.push(new BlockCore(
      world,
      {
        x: 990, y: 1820, w: 200, h: 10, color: 'yellow', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_B4.play();
       }
     },
     { isStatic: true,angle: radians(-10),restitution: 0 }
     ));

     blocks.push(new BlockCore(
      world,
      {
        x: 780, y: 1880, w: 150, h: 10, color: 'yellow', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_B6.play();
       }
     },
     { isStatic: true,angle: radians(-10),restitution: 0 }
     ));
     
     blocks.push(new BlockCore(
      world,
      {
        x: 570, y: 1940, w: 250, h: 10, color: 'yellow', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_B5.play();
       }
     },
     { isStatic: true,angle: radians(-6),restitution: 0 }
     ));
    
 blocks.push(new BlockCore(
  world,
  {
    x: 215, y: 2110, w: 150, h: 10, color: 'yellow', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_B7.play();
   }
 },
 { isStatic: true,angle: radians(40),restitution: 0.7 }
 ));

 //Part C
 blocks.push(new BlockCore(
  world,
  {
    x: 470, y: 2220, w: 200, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_C1.play();
   }
 },
 { isStatic: true,angle: radians(3),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x: 710, y: 2290, w: 200, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_C2.play();
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0 }
 ));

 //Kleine Treppe, hüpfender Part
 blocks.push(new BlockCore(
   world,
   {
     x: 1010, y: 2500, w: 100, h: 10, color: 'purple', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_C4.play();
    }
  },
  { isStatic: true,angle: radians(-15),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 910, y: 2600, w: 100, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C5.play();
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));

  blocks.push(new BlockCore(
   world,
   {
     x: 760, y: 2700, w: 100, h: 10, color: 'purple', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_C6.play();
    }
  },
  { isStatic: true,angle: radians(20),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 850, y: 2800, w: 100, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C7.play();
     }
   },
   { isStatic: true,angle: radians(15),restitution: 0 }
   ));

//Letzte hohe Note (Nicht wundern Ton ist improvisiert und steht nicht in der "Übersetzung")
   blocks.push(new BlockCore(
    world,
    {
      x: 1020, y: 2900, w: 150, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D1.play();
     }
   },
   { isStatic: true,angle: radians(-10),restitution: 0 }
   ));


//Part A
blocks.push(new BlockCore(
  world,
  {
    x: 850, y: 3200, w: 150, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(45),restitution: 0.5 }
 ));

 blocks.push(new BlockCore(
   world,
   {
     x: 1050, y: 3350, w: 150, h: 10, color: 'blue',
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_A2.play();
    }
  },
  { isStatic: true,angle: radians(-45),restitution: 0.5 }
  ));
  
  blocks.push(new BlockCore(
   world,
   {
     x: 850, y: 3500, w: 150, h: 10, color: 'purple', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_A1.play();
    }
  },
  { isStatic: true,angle: radians(45),restitution: 0.5 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 1050, y: 3650, w: 150, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A2.play();
      }
    },
    { isStatic: true, angle: radians(-45),restitution: 0.5 }
    ));
    
    blocks.push(new BlockCore(
      world,
      {
        x: 850, y: 3800, w: 150, h: 10, color: 'purple', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_A1.play();
       }
     },
     { isStatic: true,angle: radians(45),restitution: 0.5 }
     ));
    
     blocks.push(new BlockCore(
      world,
      {
        x: 1050, y: 3950, w: 150, h: 10, color: 'green', 
        trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
          elise_A2.play();
        }
      },
      { isStatic: true, angle: radians(-45),restitution: 0.5 }
      ));
  

//Ab hier weiterarbeiten
 //Part B
 blocks.push(new BlockCore(
  world,
  {
    x: 770, y: 4200, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A3.play();
   }
 },
 { isStatic: true,angle: radians(20),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 900, y: 4300, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A4.play();
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 980, y: 4400, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A5.play();
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 //Teil B
      blocks.push(new BlockCore(
        world,
        {
          x: 1050, y: 4550, w: 200, h: 10, color: 'cyan', 
          trigger: (ball, blocks) => { //Trigger für Musik
            //console.log("Trigger", ball, blocks); 
            elise_B1.play();
          }
        },
        { isStatic: true, angle: radians(20),restitution: 0 }
        ));

        blocks.push(new BlockCore(
          world,
          {
            x: 1300, y: 4700, w: 200, h: 10, color: 'magenta', 
            trigger: (ball, blocks) => { //Trigger für Musik
              //console.log("Trigger", ball, blocks); 
              elise_B2.play();
            }
          },
          { isStatic: true, angle: radians(20),restitution: 0 }
          ));

          blocks.push(new BlockCore(
            world,
            {
              x: 1500, y: 4800, w: 200, h: 10, color: 'magenta', 
              trigger: (ball, blocks) => { //Trigger für Musik
                //console.log("Trigger", ball, blocks); 
                elise_B3.play();
              }
            },
            { isStatic: true, angle: radians(-20),restitution: 0 }
            ));

            blocks.push(new BlockCore(
              world,
              {
                x: 1300, y: 4950, w: 200, h: 10, color: 'white', 
                trigger: (ball, blocks) => { //Trigger für Musik
                  //console.log("Trigger", ball, blocks); 
                  elise_B4.play();
                }
              },
              { isStatic: true, angle: radians(-20),restitution: 0 }
              ));

//Was ab hier kommt ist noch Quatsch mit den Tönen, die stimmen hier nochnicht 
  //Neuer Teil
  //Part A
  blocks.push(new BlockCore(
    world,
    {
      x: 1070, y: 5110, w: 250, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_A1.play();
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
       elise_A2.play();
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
       elise_A1.play();
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
       elise_A2.play();
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
       elise_A1.play();
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
       elise_A3.play();
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
      elise_A4.play();
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
       elise_A5.play();
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
   { isStatic: true, angle: radians(10) }
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
     x:1050, y:  7750, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-1),restitution: 0 }
  ));
  

 














   //gerade Linie vor Trichter
   
  // blocks.push(new BlockCore(
    //world,
    //{
      //x:900, y:  7850, w: 100, h: 10, color: 'blue', 
     // trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
   //  }
  // },
   //{ isStatic: true,angle: radians(0),restitution: 0 }
  //));
  





//Linien im Trichter

//Erste Linie



 blocks.push(new BlockCore(
  world,
  {
    x:100, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:200, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:300, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:400, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:500, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:600, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:700, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y:  8000, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

  blocks.push(new BlockCore(
    world,
    {
      x:1000, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1100, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1300, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1400, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1500, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1600, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1700, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1800, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:1900, y:  8000, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   













// zweite Linie






 blocks.push(new BlockCore(
  world,
  {
    x:1*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:2*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:3*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:4*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:5*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:6*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:7*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:8*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:9*e, y:  8100, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

  blocks.push(new BlockCore(
    world,
    {
      x:10*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:11*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:12*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:13*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:14*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:15*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:16*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:17*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:18*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:19*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:20*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:21*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:22*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:23*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   
   blocks.push(new BlockCore(
    world,
    {
      x:24*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:25*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:26*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:27*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));



   blocks.push(new BlockCore(
    world,
    {
      x:28*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:29*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:30*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:31*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:32*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));




   blocks.push(new BlockCore(
    world,
    {
      x:33*e, y:  8100, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));



   



//dritte Linie








 blocks.push(new BlockCore(
  world,
  {
    x:100, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:200, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:300, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:400, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:500, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:600, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:700, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y:  8200, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

  blocks.push(new BlockCore(
    world,
    {
      x:1000, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1100, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1300, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1400, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1500, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1600, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1700, y:  8200, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   












   // vierte Reihe
   

  
  
   blocks.push(new BlockCore(
    world,
    {
      x:1*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:2*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:3*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:4*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:5*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:6*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
  
   blocks.push(new BlockCore(
    world,
    {
      x:7*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:8*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:9*e, y:  8300, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
  
    blocks.push(new BlockCore(
      world,
      {
        x:10*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:11*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:12*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:13*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:14*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:15*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:16*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:17*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));


     blocks.push(new BlockCore(
      world,
      {
        x:18*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:19*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:20*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     blocks.push(new BlockCore(
      world,
      {
        x:21*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:22*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:23*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
     
     blocks.push(new BlockCore(
      world,
      {
        x:24*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:25*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:26*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:27*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
  
     blocks.push(new BlockCore(
      world,
      {
        x:28*e, y:  8300, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
  
  
    
  
  
  
  











// fünfte Reihe


    
     
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:200, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:300, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:400, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:500, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:600, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
    
     blocks.push(new BlockCore(
      world,
      {
        x:700, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
     blocks.push(new BlockCore(
      world,
      {
        x:800, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
     blocks.push(new BlockCore(
      world,
      {
        x:900, y:  8400, w: 10, h: 10, color: 'blue', 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
       }
     },
     { isStatic: true,angle: radians(0),restitution: 0 }
     ));
    
      blocks.push(new BlockCore(
        world,
        {
          x:1000, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
       blocks.push(new BlockCore(
        world,
        {
          x:1100, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
       blocks.push(new BlockCore(
        world,
        {
          x:1200, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
       blocks.push(new BlockCore(
        world,
        {
          x:1300, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
       blocks.push(new BlockCore(
        world,
        {
          x:1400, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
       blocks.push(new BlockCore(
        world,
        {
          x:1500, y:  8400, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
    
      
    
       


  
     








// sechste Reihe


       
      
     
      
      
       
      
      
       blocks.push(new BlockCore(
        world,
        {
          x:4*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
      
       blocks.push(new BlockCore(
        world,
        {
          x:5*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
      
       blocks.push(new BlockCore(
        world,
        {
          x:6*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
      
       blocks.push(new BlockCore(
        world,
        {
          x:7*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x:8*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x:9*e, y:  8500, w: 10, h: 10, color: 'blue', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
         }
       },
       { isStatic: true,angle: radians(0),restitution: 0 }
       ));
      
        blocks.push(new BlockCore(
          world,
          {
            x:10*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:11*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:12*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:13*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:14*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:15*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));


         blocks.push(new BlockCore(
          world,
          {
            x:16*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:17*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
    
    
         blocks.push(new BlockCore(
          world,
          {
            x:18*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
      
         blocks.push(new BlockCore(
          world,
          {
            x:19*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:20*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         blocks.push(new BlockCore(
          world,
          {
            x:21*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
      
         blocks.push(new BlockCore(
          world,
          {
            x:22*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
      
         blocks.push(new BlockCore(
          world,
          {
            x:23*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
         
         blocks.push(new BlockCore(
          world,
          {
            x:24*e, y:  8500, w: 10, h: 10, color: 'blue', 
            trigger: (ball, blocks) => { //Trigger für Musik
             //console.log("Trigger", ball, blocks); 
           }
         },
         { isStatic: true,angle: radians(0),restitution: 0 }
         ));
      
      
      
      
      
         
      
         







//siebte Reihe



 

 blocks.push(new BlockCore(
  world,
  {
    x:400, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:500, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:600, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:700, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y:  8600, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

  blocks.push(new BlockCore(
    world,
    {
      x:1000, y:  8600, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1100, y:  8600, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  8600, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1300, y:  8600, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

  

   







//achte Reihe








 


 blocks.push(new BlockCore(
  world,
  {
    x:5*(e*2), y:  8700, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:6*(e*2), y:  8700, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:7*(e*2), y:  8700, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:8*(e*2), y:  8700, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:9*(e*2), y:  8700, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));









//neunte linie









 blocks.push(new BlockCore(
  world,
  {
    x:700, y:  8800, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  8800, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y:  8800, w: 10, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

  blocks.push(new BlockCore(
    world,
    {
      x:1000, y:  8800, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

  

 



// zehnte Linie


   

   

   blocks.push(new BlockCore(
    world,
    {
      x:13*e, y:  8900, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:14*e, y:  8900, w: 10, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:15*e, y:  8900, w: 10, h: 10, color: 'blue', 
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





 //Nach dem Trichter


 blocks.push(new BlockCore(
  world,
  {
    x:850, y:  9200, w: 300, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:1200, y:  9200, w: 300, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:500, y:  9200, w: 300, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(0),restitution: 0 }
 ));



 blocks.push(new BlockCore(
  world,
  {
    x:1050, y:  9500, w: 1400, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-20),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:250, y:  9800, w: 700, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(30),restitution: 0 }
 ));

 


 blocks.push(new BlockCore(
  world,
  {
    x:620, y:  10000, w: 100, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0.78 }
 ));



 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  10100, w: 300, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0.98 }
 ));



 blocks.push(new BlockCore(
  world,
  {
    x:1000, y:  10000, w: 300, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0.98 }
 ));



 blocks.push(new BlockCore(
  world,
  {
    x:1200, y:  10200, w: 300, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-10),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:1000, y:  10300, w: 100, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-5),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:900, y:  10350, w: 100, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-10),restitution: 0 }
 ));



 

 blocks.push(new BlockCore(
  world,
  {
    x:720, y: 10520, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:820, y: 10580, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:920, y: 10640, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1020, y: 10690, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1120, y: 10750, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1250, y: 10860, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(15),restitution: 0 }
 ));

 




 blocks.push(new BlockCore(
  world,
  {
    x:700, y: 11400, w: 400, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(30),restitution: 0 }
 ));


 
 
 blocks.push(new BlockCore(
   world,
   {
     x: 1100, y: 11830, w: 270, h: 10, color: 'blue',
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-50),restitution: 0}
  ));
  
  blocks.push(new BlockCore(
   world,
   {
     x: 860, y: 12150, w: 400, h: 10, color: 'purple', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(30),restitution: 0 }
  ));



  //Treppe


  blocks.push(new BlockCore(
    world,
    {
      x:1300, y: 12360, w: 400, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));
  
  blocks.push(new BlockCore(
   world,
   {
     x:1200, y: 12410, w: 300, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-15),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x:1100, y: 12460, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:1000, y: 12510, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));
  
   blocks.push(new BlockCore(
    world,
    {
      x:900, y: 12560, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x:800, y: 12610, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:700, y: 12660, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:600, y: 12710, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));

// neue Treppe


   blocks.push(new BlockCore(
    world,
    {
      x:400, y: 12810, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(25),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:500, y: 12910, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(20),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:700, y: 13110, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(29),restitution: 0 }
   ));

  

   blocks.push(new BlockCore(
    world,
    {
      x:1000, y: 13410, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(15),restitution: 0 }
   ));



   blocks.push(new BlockCore(
    world,
    {
      x:1400, y: 13510, w: 300, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y: 13660, w: 200, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-10),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:1000, y: 13810, w: 200, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-10),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x:800, y: 13960, w: 200, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-7),restitution: 0 }
   ));

   
   blocks.push(new BlockCore(
    world,
    {
      x:600, y: 14010, w: 150, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
     }
   },
   { isStatic: true,angle: radians(-4),restitution: 0 }
   ));
   
   
  
   
   
   
   
   
   
   
   
   // Treppe


   blocks.push(new BlockCore(
    world,
    {
      x:280, y:14500, w: 150, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
      
     }
   },
   { isStatic: true, angle: radians(10),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:410, y:14550, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
      
     }
   },
   { isStatic: true, angle: radians(10),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 580, y: 14600, w: 150, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
      
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x:750, y: 14700, w: 150, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       
     }
   },
   { isStatic: true, angle: radians(4),restitution: 0 }
   ));

blocks.push(new BlockCore(
  world,
  {
    x:900, y: 14750, w: 100, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
    
   }
  },
  
  { isStatic: true, angle: radians(3),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x:1050, y: 14800, w: 200, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     ;
   }
 },
 { isStatic: true, angle: radians(5),restitution: 0 }
 ));

 

 

 
 
 
 
 
 
 
 
 blocks.push(new BlockCore(
  world,
  {
    x:1120, y: 14910, w: 300, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-15),restitution: 0 }
 ));

 
 blocks.push(new BlockCore(
  world,
  {
    x:860, y: 15010, w: 200, h: 10, color: 'pink', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(15),restitution: 0 }
 ));
 
 blocks.push(new BlockCore(
   world,
   {
     x:1060, y: 15110, w: 200, h: 10, color: 'green', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-40),restitution: 0 }
  ));
 

  blocks.push(new BlockCore(
   world,
   {
     x:870, y: 15360, w: 300, h: 10, color: 'pink', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(30),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
   world,
   {
     x:1070, y: 15460, w: 100, h: 10, color: 'pink', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(10),restitution: 0 }
  ));

  blocks.push(new BlockCore(
   world,
   {
     x:1200, y: 15490, w: 100, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(10),restitution: 0 }
  ));

  blocks.push(new BlockCore(
   world,
   {
     x:1400, y: 15550, w: 200, h: 10, color: 'pink', 
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
     x:1200, y:  15650, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-13),restitution: 0 }
  ));
 
 blocks.push(new BlockCore(
  world,
  {
    x:1000, y:  15750, w: 200, h: 10, color: 'blue', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
   }
 },
 { isStatic: true,angle: radians(-10),restitution: 0 }
 ));
 
 blocks.push(new BlockCore(
   world,
   {
     x:800, y:  15850, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-5),restitution: 0 }
  ));
 
  blocks.push(new BlockCore(
   world,
   {
     x:600, y:  15950, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(-3),restitution: 0 }
  ));
 
  blocks.push(new BlockCore(
   world,
   {
     x:400, y:  16050, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
    }
  },
  { isStatic: true,angle: radians(0),restitution: 0 }
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
 