

function addFields() {

//Rote Linie ganz oben
  blocks.push(new BlockCore(
    world,
    {
      x:750, y: 300, w: 1000, h: 0.1, color: ('#372254'), 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 

       jp = false;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));

   //Rote Linie ganz weiter unten
  blocks.push(new BlockCore(
    world,
    {
      x:0, y: 8100, w: 2500, h: 0.1, color: ('#2C1A41'), 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 

       jp = true;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));

   //Rote Linie nochmal weiter unten
  blocks.push(new BlockCore(
    world,
    {
      x:0, y: 8300, w: 3000, h: 0.1, color: ('#2C1A41'), 
      trigger: (murmel, blocks) => { //Trigger für Steuerung
       //console.log("Trigger", ball, blocks); 

       jp = false;
     }
   },
   { isStatic: true,isSensor:true, restitution: 0  }
   ));




let triggerCount=-0.5

 //Startblock  
 blockA = new Block(
  world, 
  {
    x: 810, y: 200, w: 70, h: 10, color: 'green',
    //x: 70, y: 2, w: 70, h: 10, color: 'green',
    trigger: (ball, block) => { //Trigger für Musik
      console.log("Trigger", ball, block);
      let ex
      triggerCount++;
      switch(triggerCount){
        case 1.5:
         // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
         // explodes.push(ex);
         // ex.boom();
         // console.log('yippie boom') 
          Matter.Body.setAngle(block.body,radians(10))
          break;
      case 2.5:
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
       // ex.boom();
       // console.log('yippie boom') 
        Matter.Body.setAngle(block.body,radians(50))

        break;
        case 3.5: 
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
      //  ex.boom();
        Matter.Body.setAngle(block.body,radians(50))
      break;
      case 4.5: 
      ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
      explodes.push(ex);
      ex.boom();
      Matter.Body.setAngle(block.body,radians(-100))
      //this.attributes.noStroke();
      //this.attributes.color=('#372254');
      //color0;
      //blockA.attributes.noStroke();
      blockA.attributes.color=('#372254');
    break;
        default:
          
      }
        
    }
  },
  { isStatic: true,restitution: 0  }
  );
 blocks.push(blockA);


 let triggerCountt=-0.5

 blockB = new Block(
  world, 
  {
    x: 870, y: 200, w: 70, h: 10, color: 'green',
    //x: 10, y: 10, w: 70, h: 10, color: 'green',
    trigger: (ball, block) => { //Trigger für Musik
      console.log("Trigger", ball, block);
      let ex;
      triggerCountt++;
      switch(triggerCountt){
        case 1.5:
         // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
          //explodes.push(ex);
         // ex.boom();
       // console.log('yippie boom') 
          Matter.Body.setAngle(block.body,radians(-10)) 
      case 2.5:
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
       // ex.boom();
      //console.log('yippie boom') 
       // Matter.Body.setAngle(block.body,radians(-50))

        break;
        case 3.5: 
        //ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
       // ex.boom();
        Matter.Body.setAngle(block.body,radians(-50))
      break;
      case 4.5: 
      ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
      explodes.push(ex);
      ex.boom();
      Matter.Body.setAngle(block.body,radians(-100))
      blockB.attributes.color=('#372254');
    break;
        default:
          
      }
        
    }
  },
  { isStatic: true,restitution: 0  }
  );
 blocks.push(blockB);






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
          x: 740, y: 1220, w: 200, h: 10, color: 'orange', 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A3.play();
         }
       },
       { isStatic: true,angle: radians(27),restitution: 0.6 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x: 910, y: 1290, w: 100, h: 10, color: 'orange', 
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
     { isStatic: true,angle: radians(-15),restitution: 0 }
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
     { isStatic: true,angle: radians(-15),restitution: 0 }
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
   { isStatic: true,angle: radians(-15),restitution: 0 }
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
  

 //Part B
 blocks.push(new BlockCore(
  world,
  {
    x: 820, y: 4200, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A3.play();
   }
 },
 { isStatic: true,angle: radians(30),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 960, y: 4300, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A4.play();
   }
 },
 { isStatic: true,angle: radians(15),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 1150, y: 4400, w: 150, h: 10, color: 'orange', 
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
    x: 1400, y: 4500, w: 250, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A6.play();
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0 }
 ));

 //Teil B
      blocks.push(new BlockCore(
        world,
        {
          x: 1730, y: 4700, w: 100, h: 10, color: 'cyan', 
          trigger: (ball, blocks) => { //Trigger für Musik
            //console.log("Trigger", ball, blocks); 
            elise_B1.play();
          }
        },
        { isStatic: true, angle: radians(-30),restitution: 0.7 }
        ));

        blocks.push(new BlockCore(
          world,
          {
            x: 1500, y: 4770, w: 100, h: 10, color: 'cyan', 
            trigger: (ball, blocks) => { //Trigger für Musik
              //console.log("Trigger", ball, blocks); 
              elise_B2.play();
            }
          },
          { isStatic: true, angle: radians(-10),restitution: 0 }
          ));

          blocks.push(new BlockCore(
            world,
            {
              x: 1350, y: 4840, w: 150, h: 10, color: 'cyan', 
              trigger: (ball, blocks) => { //Trigger für Musik
                //console.log("Trigger", ball, blocks); 
                elise_B3.play();
              }
            },
            { isStatic: true, angle: radians(-10),restitution: 0 }
            ));

            blocks.push(new BlockCore(
              world,
              {
                x: 1150, y: 4910, w: 200, h: 10, color: 'cyan', 
                trigger: (ball, blocks) => { //Trigger für Musik
                  //console.log("Trigger", ball, blocks); 
                  elise_B4.play();
                }
              },
              { isStatic: true, angle: radians(-10),restitution: 0 }
              ));

              blocks.push(new BlockCore(
                world,
                {
                  x: 950, y: 4980, w: 200, h: 10, color: 'cyan', 
                  trigger: (ball, blocks) => { //Trigger für Musik
                    //console.log("Trigger", ball, blocks); 
                    elise_B5.play();
                  }
                },
                { isStatic: true, angle: radians(-10),restitution: 0 }
                ));

                blocks.push(new BlockCore(
                  world,
                  {
                    x: 750, y: 5050, w: 250, h: 10, color: 'cyan', 
                    trigger: (ball, blocks) => { //Trigger für Musik
                      //console.log("Trigger", ball, blocks); 
                      elise_B6.play();
                    }
                  },
                  { isStatic: true, angle: radians(-10),restitution: 0 }
                  ));

                  blocks.push(new BlockCore(
                    world,
                    {
                      x: 480, y: 5120, w: 300, h: 10, color: 'cyan', 
                      trigger: (ball, blocks) => { //Trigger für Musik
                        //console.log("Trigger", ball, blocks); 
                        elise_B7.play();
                      }
                    },
                    { isStatic: true, angle: radians(-10),restitution: 0 }
                    ));


  //Neuer Teil
  //Part C
  blocks.push(new BlockCore(
    world,
    {
      x: 240, y: 5170, w: 50, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C1.play();
     }
   },
   { isStatic: true,angle: radians(40),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 350, y: 5240, w: 150, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C2.play();
     }
   },
   { isStatic: true,angle: radians(15),restitution: 0 }
   ));
   
   blocks.push(new BlockCore(
    world,
    {
      x: 500, y: 5300, w: 150, h: 10, color: 'green', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C4.play();
     }
   },
   { isStatic: true,angle: radians(15),restitution: 0 }
   ));

   //Part D
   blocks.push(new BlockCore(
    world,
    {
      x: 700, y: 5400, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D1.play();
     }
   },
   { isStatic: true,angle: radians(5),restitution: 1 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 850, y: 5410, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D2.play();
     }
   },
   { isStatic: true,angle: radians(5),restitution: 1 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1000, y: 5420, w: 100, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D3.play();
     }
   },
   { isStatic: true,angle: radians(5),restitution: 1 }
   ));
   
   //Neuer Part mit vielen Wechseln
   //Treppe 

   blocks.push(new BlockCore(
    world,
    {
      x:1300, y:  5650, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E1.play();
     }
   },
   { isStatic: true,angle: radians(-20),restitution: 1 }
   ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 1000, y:  5850, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E2.play();
     }
   },
   { isStatic: true,angle: radians(-10),restitution: 0.7 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 700, y:  5900, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E3.play();
     }
   },
   { isStatic: true,angle: radians(-3),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x: 500, y:  6000, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E4.play();
     }
   },
   { isStatic: true,angle: radians(-3),restitution: 0 }
   ));

//Treppe
   blocks.push(new BlockCore(
    world,
    {
      x:150, y: 6810, w: 100, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E4.play();
      
     }
   },
   { isStatic: true, angle: radians(15) }
   ));
 
   blocks.push(new BlockCore(
    world,
    {
      x:270, y: 6860, w: 90, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F1.play();
      
     }
   },
   { isStatic: true, angle: radians(15),restitution: 0 }
   ));
 

   blocks.push(new BlockCore(
     world,
     {
       x:410, y: 6950, w: 100, h: 10, color: 'blue', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_F2.play();
       
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
        elise_F3.play();
        
      }
    },
    { isStatic: true, angle: radians(4),restitution: 0 }
    ));
 
    blocks.push(new BlockCore(
     world,
     {
       x:750, y: 7100, w: 150, h: 10, color: 'Purple', 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        //elise_F2.play();
       
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
      elise_F2.play();
     
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
      elise_F3.play();
     
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
      elise_F4.play();
     
    }
  },
  { isStatic: true, angle: radians(3),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x:1400, y: 7550, w: 200, h: 10, color: 'purple', 
      trigger: (ball, blocks) => { //Trigger für Musik
       console.log("Trigger", ball, blocks); 
       elise_F6.play();
     }
   },
   { isStatic: true,angle: radians(-14),restitution: 0 }
   ));

   //Treppe 

   blocks.push(new BlockCore(
    world,
    {
      x:1200, y:  7650, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F3.play();
     }
   },
   { isStatic: true,angle: radians(-11),restitution: 0 }
   ));
  
  blocks.push(new BlockCore(
   world,
   {
     x:1050, y: 7750, w: 200, h: 10, color: 'blue', 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_F4.play();
    }
  },
  { isStatic: true,angle: radians(-5),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 900, y: 7800, w: 200, h: 10, color: 'blue', 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F5.play();
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));

//Dreimal jump (3mal Ton F6 muss abgespielt werden)
 



let triggerCounttt=-0.5

 //Startblock  
 blockC = new Block(
  world, 
  {
    x: 600, y: 8200, w: 100, h: 10, color: 'brown', 
     trigger: (ball, block) => { //Trigger für Musik
      console.log("Trigger", ball, block);
      let ex
      triggerCounttt++;
      switch(triggerCounttt){
        case 0.5:
          // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
          // explodes.push(ex);
          // ex.boom();
          // console.log('yippie boom') 
          elise_F6.play();
          Matter.Body.setAngle(block.body,radians(10))
          break;
      case 2.5:
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
       // ex.boom();
       // console.log('yippie boom') 
       elise_F6.play();
        Matter.Body.setAngle(block.body,radians(20))

        break;
        case 4.5: 
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
      //  ex.boom();
      elise_F6.play();
        Matter.Body.setAngle(block.body,radians(50))
      break;
      case 6.5: 
      ex = new Explode({pos:{x: 650, y: 8200}, color: 'white'});
      explodes.push(ex);
      ex.boom();
      Matter.Body.setAngle(block.body,radians(-100))
      //this.attributes.noStroke();
      //this.attributes.color=('#372254');
      //color0;
      //blockA.attributes.noStroke();
      blockC.attributes.color=('#2C1A41');
    break;
        default:
          
      }
        
    }
  },
  { isStatic: true,restitution: 0  }
  );
 blocks.push(blockC);

   
 let triggerCountttt=-0.5

 //Startblock  
 blockD = new Block(
  world, 
  {
    x: 700, y: 8200, w: 100, h: 10, color: 'brown', 
     trigger: (ball, block) => { //Trigger für Musik
      console.log("Trigger", ball, block);
      let ex
      triggerCountttt++;
      switch(triggerCountttt){
        case 0.5:
          // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
          // explodes.push(ex);
          // ex.boom();
          // console.log('yippie boom') 
          //elise_F6.play();
          Matter.Body.setAngle(block.body,radians(-10))
          break;
      case 2.5:
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
       // ex.boom();
       // console.log('yippie boom') 
      // elise_F6.play();
        Matter.Body.setAngle(block.body,radians(-20))

        break;
        case 4.5: 
       // ex = new Explode({pos:{x: 835, y: 200}, color: 'white'});
       // explodes.push(ex);
      //  ex.boom();
     // elise_F6.play();
        Matter.Body.setAngle(block.body,radians(-50))
      break;
      case 6.5: 
      ex = new Explode({pos:{x: 650, y: 8200}, color: 'white'});
      explodes.push(ex);
      ex.boom();
      Matter.Body.setAngle(block.body,radians(-100))
      //this.attributes.noStroke();
      //this.attributes.color=('#372254');
      //color0;
      //blockA.attributes.noStroke();
      blockD.attributes.color=('#2C1A41');
    break;
        default:
          
      }
        
    }
  },
  { isStatic: true,restitution: 0  }
  );
 blocks.push(blockD);

 //blocks.push(new BlockCore(
 // world,
 // {
   // x: 700, y: 8200, w: 100, h: 10, color: 'blue', 
   // trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     
   //}
// },
 //{ isStatic: true,angle: radians(0),restitution: 0 }
// ));









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



 



 //Nach dem Trichter


//  blocks.push(new BlockCore(
//   world,
//   {
//     x:850, y:  9200, w: 300, h: 10, color: 'blue', 
//     trigger: (ball, blocks) => { //Trigger für Musik
//      //console.log("Trigger", ball, blocks); 
//    }
//  },
//  { isStatic: true,angle: radians(5),restitution: 0 }
//  ));


//  blocks.push(new BlockCore(
//   world,
//   {
//     x:1200, y:  9200, w: 300, h: 10, color: 'blue', 
//     trigger: (ball, blocks) => { //Trigger für Musik
//      //console.log("Trigger", ball, blocks); 
//    }
//  },
//  { isStatic: true,angle: radians(0),restitution: 0 }
//  ));

//  blocks.push(new BlockCore(
//   world,
//   {
//     x:500, y:  9200, w: 300, h: 10, color: 'blue', 
//     trigger: (ball, blocks) => { //Trigger für Musik
//      //console.log("Trigger", ball, blocks); 
//    }
//  },
//  { isStatic: true,angle: radians(0),restitution: 0 }
//  ));



 //ACHTUNG ACHTUNG AB HIER GEHT ES WEITER MIT MUSIK
//Part A
//Schnelle Wechsel 
 blocks.push(new BlockCore(
  world,
  {
    x:850, y:  9300, w: 500, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(-20),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x:350, y:  9600, w: 400, h: 10, color: 'purple', 
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
    x:620, y:  10000-200, w: 100, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0.78 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:800, y:  10100-200, w: 300, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0.98 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1000, y:  10000-200, w: 300, h: 10, color: 'purple', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(5),restitution: 0.98 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1050, y:  10000, w: 200, h: 10, color: 'green', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:850, y:  10400, w: 150, h: 10, color: 'green', 
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
    x:1050, y:  10550, w: 150, h: 10, color: 'green', 
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
    x:850, y: 10700, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(45),restitution: 0.50 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1050, y: 10850, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-45),restitution: 0.50 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:850, y: 11000, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(45),restitution: 0.50 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:1050, y: 11150, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-45),restitution: 0.50 }
 ));


//Nächster Teil
 blocks.push(new BlockCore(
  world,
  {
    x:850, y: 11300, w: 150, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(45),restitution: 0.4 }
 ));













 blocks.push(new BlockCore(
  world,
  {
    x:1250, y: 11360, w: 100, h: 10, color: 'orange', 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A3.play();
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
     elise_A4.play();
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
      elise_A5.play();
    }
  },
  { isStatic: true,angle: radians(-50),restitution: 0}
  ));

  //ENDE
  //ENDE
  //ENDE
  //ENDE


}
 
