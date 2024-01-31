function addStars() {

  //Erste SternGruppe
  const fixed1 = new Ball(
    world, {
      x: 700,
      y: 1700,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed1.constrainTo(null, { pointB: { x: 700, y: 1700 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed1);

  const fixed2 = new Ball(
    world, {
      x: 780,
      y: 1700,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed2.constrainTo(null, { pointB: { x: 780, y: 1700 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed2);

  const fixed3 = new Ball(
    world, {
      x: 900,
      y: 1650,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed3.constrainTo(null, { pointB: { x: 900, y: 1650 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed3);

  const fixed4 = new Ball(
    world, {
      x: 1100,
      y: 1600,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed4.constrainTo(null, { pointB: { x: 1100, y: 1600 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed4);

  const fixed5 = new Ball(
    world, {
      x: 600,
      y: 1750,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed5.constrainTo(null, { pointB: { x: 600, y: 1750 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed5);

  const fixed6 = new Ball(
    world, {
      x: 500,
      y: 1770,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed6.constrainTo(null, { pointB: { x: 500, y: 1770 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed6);

  const fixed7 = new Ball(
    world, {
      x: 600,
      y: 1700,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed7.constrainTo(null, { pointB: { x: 600, y: 1700 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed7);

  const fixed8 = new Ball(
    world, {
      x: 850,
      y: 1680,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed8.constrainTo(null, { pointB: { x: 850, y: 1640 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed8);

//Zweite SternGruppe
  const fixed9 = new Ball(
    world, {
      x: 900,
      y: 4800,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed9.constrainTo(null, { pointB: { x: 900, y: 4800 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed9);

  const fixed10 = new Ball(
    world, {
      x: 1000,
      y: 4750,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed10.constrainTo(null, { pointB: { x: 1000, y: 4750 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed10);

  const fixed11 = new Ball(
    world, {
      x: 1100,
      y: 4730,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed11.constrainTo(null, { pointB: { x: 1100, y: 4730 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed11);

  const fixed12 = new Ball(
    world, {
      x: 1200,
      y: 4710,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed12.constrainTo(null, { pointB: { x: 1200, y: 4710 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed12);

  const fixed13 = new Ball(
    world, {
      x: 1300,
      y: 4660,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed13.constrainTo(null, { pointB: { x: 1300, y: 4660 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed13);

  const fixed14 = new Ball(
    world, {
      x: 700,
      y: 4880,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed14.constrainTo(null, { pointB: { x: 700, y: 4880 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed14);

  const fixed15 = new Ball(
    world, {
      x: 600,
      y: 4900,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed15.constrainTo(null, { pointB: { x: 600, y: 4900 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed15);

  const fixed16 = new Ball(
    world, {
      x: 650,
      y: 4850,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed16.constrainTo(null, { pointB: { x: 650, y: 4850 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed16);

  const fixed17 = new Ball(
    world, {
      x: 800,
      y: 4850,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed17.constrainTo(null, { pointB: { x: 800, y: 4850 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed17);

  const fixed18 = new Ball(
    world, {
      x: 930,
      y: 4720,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed18.constrainTo(null, { pointB: { x: 930, y: 4720 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed18);

  const fixed19 = new Ball(
    world, {
      x: 500,
      y: 4930,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed19.constrainTo(null, { pointB: { x: 500, y: 4930 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed19);

  //Dritte SternGruppe
  const fixed20 = new Ball(
    world, {
      x: 600,
      y: 6810,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed20.constrainTo(null, { pointB: { x: 600, y: 6810 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed20);

  const fixed21 = new Ball(
    world, {
      x: 500,
      y: 6790,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed21.constrainTo(null, { pointB: { x: 500, y: 6790 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed21);

  const fixed22 = new Ball(
    world, {
      x: 400,
      y: 6750,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed22.constrainTo(null, { pointB: { x: 400, y: 6750 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed22);

  const fixed23 = new Ball(
    world, {
      x: 300,
      y: 6700,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed23.constrainTo(null, { pointB: { x: 300, y: 6700 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed23);

  const fixed24 = new Ball(
    world, {
      x: 350,
      y: 6670,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed24.constrainTo(null, { pointB: { x: 350, y: 6670 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed24);

  const fixed25 = new Ball(
    world, {
      x: 530,
      y: 6740,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed25.constrainTo(null, { pointB: { x: 530, y: 6740 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed25);

  const fixed26 = new Ball(
    world, {
      x: 700,
      y: 6820,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed26.constrainTo(null, { pointB: { x: 700, y: 6820 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed26);

  const fixed27 = new Ball(
    world, {
      x: 800,
      y: 6910,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed27.constrainTo(null, { pointB: { x: 800, y: 6910 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed27);

  const fixed28 = new Ball(
    world, {
      x: 900,
      y: 6960,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed28.constrainTo(null, { pointB: { x: 900, y: 6960 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed28);

  const fixed29 = new Ball(
    world, {
      x: 1000,
      y: 6990,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed29.constrainTo(null, { pointB: { x: 1000, y: 6990 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed29);

  const fixed30 = new Ball(
    world, {
      x: 1100,
      y: 7030,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed30.constrainTo(null, { pointB: { x: 1100, y: 7030 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed30);

  const fixed31 = new Ball(
    world, {
      x: 1050,
      y: 7000,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed31.constrainTo(null, { pointB: { x: 1050, y: 7000 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed31);

  const fixed32 = new Ball(
    world, {
      x: 1200,
      y: 7070,
      r: 10,
    color: 'white'
  }, { isStatic: false }
  );
  fixed32.constrainTo(null, { pointB: { x: 1200, y: 7070 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed32);

  const fixed33 = new Ball(
    world, {
      x: 1350,
      y: 7090,
      r: 5,
    color: 'white'
  }, { isStatic: false }
  );
  fixed33.constrainTo(null, { pointB: { x: 1350, y: 7090 }, length: 150, color: 'rgba(255, 255, 255, 0)', draw: true });
  blocks.push(fixed33);

}