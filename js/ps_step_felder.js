

function addFields() {

  //Farben
  // blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 100, w: 100, h: 10, color: ('#B5443B'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 115, w: 100, h: 10, color: ('#F7491B'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 600, y: 130, w: 100, h: 10, color: ('#D95100'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 600, y: 160, w: 100, h: 10, color: ('#FFDF03'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 175, w: 100, h: 10, color: ('#E0AF7E'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 200, w: 100, h: 10, color: ('#F1BC36'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 215, w: 100, h: 10, color: ('#FFFF00'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 145, w: 100, h: 10, color: ('#D17F09'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));

  //  blocks.push(new BlockCore(
  //   world,
  //   {
  //     x: 700, y: 230, w: 100, h: 10, color: ('#F3EAAF'), 
  //     trigger: (ball, blocks) => { //Trigger für Musik
  //      //console.log("Trigger", ball, blocks); 
  //      elise_A4.play();
  //    }
  //  },
  //  { isStatic: true,angle: radians(0),restitution: 0 }
  //  ));


//Rote Linie ganz oben
  blocks.push(new BlockCore(
    world,
    {
      x:750, y: 300, w: 1000, h: 0.1, color: (''), 
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
      x:0, y: 8100, w: 2500, h: 0.1, color: (''), 
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
      x:0, y: 8300, w: 3000, h: 0.1, color: (''), 
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
    x: 812, y: 200, w: 70, h: 10, color: 'white',
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
      blockA.attributes.color=('');
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
    x: 870, y: 200, w: 70, h: 10, color: 'white',
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
      blockB.attributes.color=('');
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
  block1 = new Block(
    world,
    {
      x: 850, y: 400, w: 150, h: 10, color: ('#FFDF03'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_A1.play();
       block1.attributes.color=('');
     }
   },
   { isStatic: true,angle: radians(45),restitution: 0.70 }
   );
   blocks.push(block1);
   
   
   block2 = new Block(
     world,
     {
       x: 1050, y: 550 , w: 150, h: 10, color: ('#D95100'),
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A2.play();
        block2.attributes.color=('');
      }
    },
    { isStatic: true,angle: radians(-45),restitution: 0.60 }
    );
    blocks.push(block2);


    block3 = new Block(
     world,
     {
       x: 850, y: 640, w: 150, h: 10, color: ('#FFDF03'), 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A1.play();
        block3.attributes.color=('');
      }
    },
    { isStatic: true,angle: radians(45),restitution: 0.70 }
    );
    blocks.push(block3);

    
    block4 = new Block(
      world,
      {
        x: 1050, y: 750, w: 150, h: 10, color: ('#D95100'), 
        trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
          elise_A2.play();
          block4.attributes.color=('');
        }
      },
      { isStatic: true, angle: radians(-45),restitution: 0.60 }
      );
      blocks.push(block4);

      
      block5 = new Block(
        world,
        {
          x: 850, y: 850, w: 150, h: 10, color: ('#FFDF03'), 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A1.play();
           block5.attributes.color=('');
         }
       },
       { isStatic: true,angle: radians(45),restitution: 0.70 }
       );
       blocks.push(block5);

      
       block6 = new Block(
        world,
        {
          x: 1050, y: 950, w: 150, h: 10, color: ('#D95100'), 
          trigger: (ball, blocks) => { //Trigger für Musik
            //console.log("Trigger", ball, blocks); 
            elise_A2.play();
            block6.attributes.color=('');
          }
        },
        { isStatic: true, angle: radians(-45),restitution: 0.7 }
        );
        blocks.push(block6);

      
      //Treppe
       blocks.push(new BlockCore(
        world,
        {
          x: 750, y: 1220, w: 150, h: 10, color: ('#B5443B'), 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A3.play();
         }
       },
       { isStatic: true,angle: radians(27),restitution: 0.3 }
       ));
      
       blocks.push(new BlockCore(
        world,
        {
          x: 910, y: 1290, w: 100, h: 10, color: ('#F7491B'), 
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
          x: 1060, y: 1370, w: 150, h: 10, color: ('#FFFF00'), 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A5.play();
         }
       },
       { isStatic: true,angle: radians(20),restitution: 0 }
       ));

       blocks.push(new BlockCore(
        world,
        {
          x: 1280, y: 1440, w: 220, h: 10, color: ('#D17F09'), 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_A6.play();
         }
       },
       { isStatic: true,angle: radians(6),restitution: 0 }
       ));
     
//Part B
       blocks.push(new BlockCore(
        world,
        {
          x: 1555, y: 1570, w: 80, h: 10, color: ('#D17F09'), 
          trigger: (ball, blocks) => { //Trigger für Musik
           //console.log("Trigger", ball, blocks); 
           elise_B1.play();
         }
       },
       { isStatic: true,angle: radians(-50),restitution: 0.4 }
       ));

     blocks.push(new BlockCore(
      world,
      {
        x: 1410, y: 1700, w: 200, h: 10, color: ('#D95100'), 
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
        x: 1200, y: 1760, w: 200, h: 10, color: ('#D17F09'), 
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
        x: 990, y: 1820, w: 200, h: 10, color: ('#FFFF00'), 
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
        x: 780, y: 1880, w: 150, h: 10, color: ('#D38748'), 
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
        x: 570, y: 1940, w: 250, h: 10, color: ('#D95100'), 
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
    x: 215, y: 2110, w: 150, h: 10, color: ('#B5443B'), 
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
    x: 470, y: 2220, w: 200, h: 10, color: ('#F7491B'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_C1.play();
   }
 },
 { isStatic: true,angle: radians(10),restitution: 0 }
 ));


 blocks.push(new BlockCore(
  world,
  {
    x: 710, y: 2290, w: 200, h: 10, color: ('#F7491B'), 
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
     x: 1010, y: 2500, w: 100, h: 10, color: ('#F1BC36'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_C4.play();
    }
  },
  { isStatic: true,angle: radians(-25),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 910, y: 2600, w: 100, h: 10, color: ('#F7491B'), 
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
     x: 750, y: 2690, w: 100, h: 10, color: ('#F1BC36'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_C6.play();
    }
  },
  { isStatic: true,angle: radians(25),restitution: 0 }
  ));

  blocks.push(new BlockCore(
    world,
    {
      x: 850, y: 2800, w: 100, h: 10, color: ('#B5443B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C7.play();
     }
   },
   { isStatic: true,angle: radians(20),restitution: 0 }
   ));

//Letzte hohe Note (Nicht wundern Ton ist improvisiert und steht nicht in der "Übersetzung")
   blocks.push(new BlockCore(
    world,
    {
      x: 1020, y: 2900, w: 150, h: 10, color: ('#FFFF00'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D1.play();
     }
   },
   { isStatic: true,angle: radians(-15),restitution: 0 }
   ));


//Part A
block7 = new Block(
  world,
  {
    x: 850, y: 3200, w: 150, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
     block7.attributes.color=('');
   }
 },
 { isStatic: true,angle: radians(45),restitution: 0.5 }
 );
 blocks.push(block7);

 block8 = new Block(
   world,
   {
     x: 1050, y: 3350, w: 150, h: 10, color: ('#D95100'),
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_A2.play();
      block8.attributes.color=('');
    }
  },
  { isStatic: true,angle: radians(-45),restitution: 0.5 }
  );
  blocks.push(block8);
  
  block9 = new Block(
   world,
   {
     x: 850, y: 3500, w: 150, h: 10, color: ('#FFDF03'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_A1.play();
      block9.attributes.color=('');
    }
  },
  { isStatic: true,angle: radians(45),restitution: 0.5 }
  );
  blocks.push(block9);
  
  block10 = new Block(
    world,
    {
      x: 1050, y: 3650, w: 150, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_A2.play();
        block10.attributes.color=('');
      }
    },
    { isStatic: true, angle: radians(-45),restitution: 0.5 }
    );
    blocks.push(block10);
    
    block11 = new Block(
      world,
      {
        x: 850, y: 3800, w: 150, h: 10, color: ('#FFDF03'), 
        trigger: (ball, blocks) => { //Trigger für Musik
         //console.log("Trigger", ball, blocks); 
         elise_A1.play();
         block11.attributes.color=('');
       }
     },
     { isStatic: true,angle: radians(45),restitution: 0.5 }
     );
     blocks.push(block11);
    
     block12 = new Block(
      world,
      {
        x: 1050, y: 3950, w: 150, h: 10, color: ('#D95100'), 
        trigger: (ball, blocks) => { //Trigger für Musik
          //console.log("Trigger", ball, blocks); 
          elise_A2.play();
          block12.attributes.color=('');
        }
      },
      { isStatic: true, angle: radians(-45),restitution: 0.5 }
      );
      blocks.push(block12);
  

 //Part B
 blocks.push(new BlockCore(
  world,
  {
    x: 820, y: 4200, w: 150, h: 10, color: ('#B5443B'), 
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
    x: 960, y: 4300, w: 150, h: 10, color: ('#F7491B'), 
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
    x: 1150, y: 4400, w: 150, h: 10, color: ('#FFFF00'), 
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
    x: 1400, y: 4500, w: 250, h: 10, color: ('#D17F09'), 
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
          x: 1720, y: 4700, w: 100, h: 10, color: ('#D17F09'), 
          trigger: (ball, blocks) => { //Trigger für Musik
            //console.log("Trigger", ball, blocks); 
            elise_B1.play();
          }
        },
        { isStatic: true, angle: radians(-30),restitution: 0.8 }
        ));

        blocks.push(new BlockCore(
          world,
          {
            x: 1500, y: 4770, w: 100, h: 10, color: ('#D95100'), 
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
              x: 1350, y: 4840, w: 150, h: 10, color: ('#D17F09'), 
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
                x: 1150, y: 4910, w: 200, h: 10, color: ('#FFFF00'), 
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
                  x: 950, y: 4980, w: 200, h: 10, color: ('#D95100'), 
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
                    x: 750, y: 5050, w: 250, h: 10, color: ('#D17F09'), 
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
                      x: 480, y: 5120, w: 300, h: 10, color: ('#B5443B'), 
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
      x: 240, y: 5170, w: 50, h: 10, color: ('#F7491B'), 
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
      x: 350, y: 5240, w: 150, h: 10, color: ('#F7491B'), 
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
      x: 500, y: 5300, w: 140, h: 10, color: ('#F1BC36'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_C4.play();
     }
   },
   { isStatic: true,angle: radians(10),restitution: 0 }
   ));

   //Kommt der Teil hier hin?
   //Baustelle keine Angst
   //Hüpfend

   blocks.push(new BlockCore(
    world,
    {
      x: 650, y: 5360, w: 70, h: 10, color: ('#FFFF00'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D1.play();
     }
   },
   { isStatic: true,angle: radians(0),restitution: 1 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 750, y: 5350, w: 70, h: 10, color: ('#B5443B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D2.play();
     }
   },
   { isStatic: true,angle: radians(0),restitution: 1 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 850, y: 5340, w: 70, h: 10, color: ('#D17F09'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_D3.play();
     }
   },
   { isStatic: true,angle: radians(0),restitution: 2 }
   ));

   //Part D
   //Hüpen
   blocks.push(new BlockCore(
    world,
    {
      x: 950, y: 5400, w: 70, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_B1.play();
     }
   },
   { isStatic: true,angle: radians(20),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1050, y: 5450, w: 70, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_B2.play();
     }
   },
   { isStatic: true,angle: radians(20),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1050, y: 5580, w: 70, h: 10, color: ('#B5443B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E1.play();
     }
   },
   { isStatic: true,angle: radians(0),restitution: 0 }
   ));
   
   //Neuer Part mit vielen Wechseln
   //Treppe 

   blocks.push(new BlockCore(
    world,
    {
      x:1300, y: 5600, w: 200, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_B3.play();
     }
   },
   { isStatic: true,angle: radians(-25),restitution: 1 }
   ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 1000, y: 5800, w: 300, h: 10, color: ('#FFFF00'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E2.play();
     }
   },
   { isStatic: true,angle: radians(-25),restitution: 0 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 700, y:  6000, w: 200, h: 10, color: ('#F7491B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E3.play();
     }
   },
   { isStatic: true,angle: radians(-10),restitution: 0 }
   ));


   blocks.push(new BlockCore(
    world,
    {
      x: 500, y:  6100, w: 180, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_E4.play();
     }
   },
   { isStatic: true,angle: radians(8),restitution: 0 }
   ));

//Treppe
   blocks.push(new BlockCore(
    world,
    {
      x:150, y: 6810, w: 100, h: 10, color: ('#D95100'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F2.play();
      
     }
   },
   { isStatic: true, angle: radians(15) }
   ));
 
   blocks.push(new BlockCore(
    world,
    {
      x:270, y: 6890, w: 90, h: 10, color: ('#F3EAAF'), 
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
       x:410, y: 6950, w: 100, h: 10, color: ('#D95100'), 
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
       x: 580, y: 7000, w: 200, h: 10, color: ('#F7491B'), 
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
       x:750, y: 7100, w: 150, h: 10, color: ('#F7491B'), 
       trigger: (ball, blocks) => { //Trigger für Musik
        //console.log("Trigger", ball, blocks); 
        elise_F3.play();
       
      }
    },
    { isStatic: true, angle: radians(10),restitution: 0 }
    ));
 
 blocks.push(new BlockCore(
   world,
   {
     x:900, y: 7150, w: 100, h: 10, color: ('#D95100'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_F2.play();
     
    }
  },
  { isStatic: true, angle: radians(5),restitution: 0 }
  ));
 
  blocks.push(new BlockCore(
   world,
   {
     x:1050, y: 7200, w: 150, h: 10, color: ('#F7491B'),
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_F3.play();
     
    }
  },
  { isStatic: true, angle: radians(10),restitution: 0 }
  ));

  blocks.push(new BlockCore(
   world,
   {
     x:1200, y: 7250, w: 200, h: 10, color: ('#FFFF00'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_F4.play();
     
    }
  },
  { isStatic: true, angle: radians(5),restitution: 0 }
  ));

  //Treppe vor Explosionsfeld
  blocks.push(new BlockCore(
    world,
    {
      x: 1500, y: 7540, w: 150, h: 10, color: ('#FFFF00'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       console.log("Trigger", ball, blocks); 
       elise_F4.play();
     }
   },
   { isStatic: true,angle: radians(-25),restitution: 0.4 }
   ));

   blocks.push(new BlockCore(
    world,
    {
      x: 1300, y:  7630, w: 200, h: 10, color: ('#F7491B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F3.play();
     }
   },
   { isStatic: true,angle: radians(-20),restitution: 0 }
   ));
  
  blocks.push(new BlockCore(
   world,
   {
     x: 1150, y: 7750, w: 150, h: 10, color: ('#FFFF00'), 
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      elise_F4.play();
    }
  },
  { isStatic: true,angle: radians(-10),restitution: 0 }
  ));
  
  blocks.push(new BlockCore(
    world,
    {
      x: 950, y: 7830, w: 100, h: 10, color: ('#B5443B'), 
      trigger: (ball, blocks) => { //Trigger für Musik
       //console.log("Trigger", ball, blocks); 
       elise_F5.play();
     }
   },
   { isStatic: true,angle: radians(5),restitution: 0 }
   ));

//Dreimal jump (3mal Ton F6 muss abgespielt werden)
 



let triggerCounttt=-0.5

 //Startblock  
 blockC = new Block(
  world, 
  {
    x: 600, y: 8200, w: 100, h: 10, color: 'white', 
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
      blockC.attributes.color=('#311C45');
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
    x: 700, y: 8200, w: 100, h: 10, color: 'white', 
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
      blockD.attributes.color=('#311C45');
    break;
        default:
          
      }
        
    }
  },
  { isStatic: true,restitution: 0  }
  );
 blocks.push(blockD);

 //Schnellerer Teil

 blocks.push(new BlockCore(
  world,
  {
    x: 690, y: 8600, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_F7.play();
   }
 },
 { isStatic: true,angle: radians(20),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 790, y:  8660, w: 50, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_F7.play();
   }
 },
 { isStatic: true,angle: radians(20),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 890, y: 8720, w: 50, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_F7.play();
   }
 },
 { isStatic: true,angle: radians(20),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 1020, y: 8800, w: 150, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_F8.play();
   }
 },
 { isStatic: true,angle: radians(-60),restitution: 0 }
 ));

 //ACHTUNG ACHTUNG AB HIER GEHT ES WEITER MIT MUSIK
//Part A
//Schnelle Wechsel 
 blocks.push(new BlockCore(
  world,
  {
    x: 900, y: 9000, w: 200, h: 10, color: ('#FFDF03'), 
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
    x: 640, y:  9200, w: 150, h: 10, color: ('#D95100'), 
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
    x: 800, y:  9400, w: 150, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(35),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 950, y:  9500, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-40),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 850, y:  9600, w: 100, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 950, y:  9650, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:850, y:  9700, w: 100, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:950, y:  9750, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:850, y: 9800, w: 100, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:950, y: 9850, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x:850, y: 9950, w: 100, h: 10, color: ('#FFDF03'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A1.play();
   }
 },
 { isStatic: true,angle: radians(50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 1000, y: 10000, w: 100, h: 10, color: ('#D95100'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A2.play();
   }
 },
 { isStatic: true,angle: radians(-50),restitution: 0 }
 ));

 //Bis hier Triller
 //Ab jetzt dumdidumduum

//Nächster Teil
 blocks.push(new BlockCore(
  world,
  {
    x: 900, y: 10250, w: 200, h: 10, color: ('#B5443B'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A3.play();
   }
 },
 { isStatic: true,angle: radians(-10),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 740, y: 10500, w: 150, h: 10, color: ('#F7491B'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A4.play();
   }
 },
 { isStatic: true,angle: radians(-20),restitution: 0 }
 ));

 blocks.push(new BlockCore(
  world,
  {
    x: 550, y: 10700, w: 200, h: 10, color: ('#FFFF00'), 
    trigger: (ball, blocks) => { //Trigger für Musik
     //console.log("Trigger", ball, blocks); 
     elise_A5.play();
   }
 },
 { isStatic: true,angle: radians(-50),restitution: 0 }
 ));

 blocks.push(new BlockCore(
   world,
   {
     x: 100, y: 13000, w: 10000, h: 10, color: ('#D17F09'),
     trigger: (ball, blocks) => { //Trigger für Musik
      //console.log("Trigger", ball, blocks); 
      //elise_A6.play();
    }
  },
  { isStatic: true,angle: radians(0),restitution: 0}
  ));

//   //ENDE
//   //ENDE
//   //ENDE
//   //ENDE

 }
 
