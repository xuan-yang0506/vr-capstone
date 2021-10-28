var COLLIDER = {
  // entityId: {bodyPropertyString: "", shapePropertyString: ""}
  // exampleId: {bodyPropertyString: "shape: none", shapePropertyString: ["shape: box; halfExtents: 2.5 2.5 2.5; offset: -2 1.5 -4.5"]},
  // exampleId2: {bodyPropertyString: "shape: auto", shapePropertyString: []},
  // exampleId3: {bodyPropertyString: "shape: hull", shapePropertyString: []},
  meetingSofa: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 100 18 35; offset: -20 22 -40", 
      "shape: box; halfExtents: 100 25 10; offset: -20 30 -65", 
      "shape: box; halfExtents: 35 18 100; offset: 40 22 20",
      "shape: box; halfExtents: 10 25 100; offset: 60 30 20", 
    ]
  },
  meetingCoffeetable: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: cylinder; height: 900; radiusTop: 250; radiusBottom: 650; offset: 300 300 600; numSegments: 16"
    ]
  }, 
  meetingLibraryshelf: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 150 130 20; offset: -150 130 0", 
    ]
  },
  mettingTwistshelf: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 30 80 30; offset: 0 80 -80", 
    ]
  }, 
  meetingBookshelf: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 15 21 4; offset: 4 4 0", 
    ]
  },
  meetingPlant: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 3 10 3; offset: 0 11 0", 
    ]
  },
  lucasSink: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 150 280 250; offset: 50 290 0",
      "shape: box; halfExtents: 40 330 30; offset: -50 330 0"
    ]
  },
  lucasBathtub: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 5 0.7 2.5; offset: 0 0.5 0",
      "shape: box; halfExtents: 0.2 2.5 2.5; offset: 5 2.5 0",
      "shape: box; halfExtents: 0.2 2 2.5; offset: -4.5 2 0",
      "shape: box; halfExtents: 5 2 0.3; offset: 0 2 -2.3",
      "shape: box; halfExtents: 5 2 0.3; offset: 0 2 2.3"
    ]
  },
  lucasHamper: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.8 0.5 0.8; offset: 0 0.5 0",
      "shape: box; halfExtents: 0.8 1.5 0.05; offset: 0 1.5 -0.6",
      "shape: box; halfExtents: 0.8 1.5 0.05; offset: 0 1.5 0.6",
      "shape: box; halfExtents: 0.05 1.5 0.8; offset: 0.6 1.5 0",
      "shape: box; halfExtents: 0.05 1.5 0.8; offset: -0.6 1.5 0"
    ]
  },
  lucasMirror: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.1 0.4 0.6; offset: 0 0 0",
    ]
  },
  lucasDoll: {
    bodyPropertyString: "shape: box",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1 1; offset: 0 0 0; orientation: 0.1 0 0.2 0.2",
    ]
  },
  lucasKey: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.08 0.03 0.25; offset: 0 0 0;",
    ]
  },
  lucasBed: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 85 25 113; offset: 2 32 -23;",
      "shape: box; halfExtents: 88 50 7; offset: 0 55 82;",
      "shape: box; halfExtents: 30 35 25; offset: 40 35 50;",
      "shape: box; halfExtents: 30 35 25; offset: -30 35 50;",
    ]
  },
  lucasSkeleton: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.5 1.8 0.2; offset: 0 -0.5 0;",
    ]
  },
  lucasPillowOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 20 8 25; offset: -5 25 -2;",
    ]
  },
  lucasPillowTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 20 8 25; offset: -5 25 -2;",
    ]
  },
  lucasPhoneOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 30 10 80; offset: 0 0 4;",
    ]
  },
  lucasTableOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 8 0.5 8; offset: 0 25 0;",
      "shape: box; halfExtents: 8 0.5 8; offset: 0 18 0;",
      "shape: box; halfExtents: 8 1 8; offset: 0 0 0;",
      "shape: box; halfExtents: 8 12.5 0.2; offset: 0 12.5 8;",
      "shape: box; halfExtents: 0.2 12.5 0.2; offset: -8 12.5 8;",
      "shape: box; halfExtents: 0.2 12.5 0.2; offset: 8 12.5 -8;",
      "shape: box; halfExtents: 0.2 12.5 0.2; offset: -8 12.5 -8;",
    ]
  },
  lucasNoteOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 60 13 80; offset: 0 0 0;",
    ]
  },
  lucasLamp: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.2 0.25 0.2; offset: -0.1 0.3 -0.2;",
    ]
  },
  lucasBookTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.8 1 1.5; offset: -1.5 1.2 -1;",
    ]
  },
  lucasBoxOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.5 1.2 1.5; offset: 0 0.2 0;",
    ]
  },
  lucasPhoneTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 35 5 80; offset: 0 0 4;",
    ]
  },
  lucasSet: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 4 1.5 2.5; offset: 5 1.5 0;",
      "shape: box; halfExtents: 4 1.5 2.5; offset: -5 1.5 0;",
      "shape: box; halfExtents: 9 3 0.5; offset: 0 3 -3;",
      "shape: box; halfExtents: 5 1.8 3.5; offset: 0 1.8 8.25;",
      "shape: cylinder; height: 3; radiusTop: 2; radiusBottom: 2; offset: 8 1.5 9.5; numSegments: 16",
      "shape: cylinder; height: 3; radiusTop: 2; radiusBottom: 2; offset: -8 1.5 9.5; numSegments: 16"
    ]
  },
  lucasBag: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1 1.1 0.5; offset: 0 0.35 0;",
    ]
  },
  lucasNoteThree: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 270 420 50; offset: 10 10 10;",
    ]
  },
  lucasDesk: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 2.5 1.35 1.2; offset: 0 -1.3 0;",
    ]
  },
  lucasChair: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.25 0.45 0.25; offset: -0.5 0.45 0.1",
    ]
  }, 
  lucasLaptop: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.5 1.3 2; offset: -0.5 1.3 0",
    ]
  },
  lucasNoteTwo: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.2 0.05 0.2; offset: 0 0.05 0",
    ]
  },
  lucasBookOne: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 1.8 1 1.5; offset: -1.5 1.2 -1;",
    ]
  },
  lucasMonalisa: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 33 45 3; offset: -8 50 -12;",
    ]
  },
  lucasPlant: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.3 0.7 0.3; offset: -0.25 0.7 0;",
    ]
  },
  lucasShelf: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.1 3.3 0.9; offset: 42.7 5.3 52.4;",
      "shape: box; halfExtents: 0.1 3.3 0.9; offset: 46.7 5.3 52.4;",
      "shape: box; halfExtents: 2 0.1 0.9; offset: 44.7 5.0 52.4;",
      "shape: box; halfExtents: 2 0.05 0.9; offset: 44.7 6.4 52.4;",
      "shape: box; halfExtents: 2 0.05 0.9; offset: 44.7 3.25 52.4;",
      "shape: box; halfExtents: 2 0.05 0.9; offset: 44.7 8.2 52.4;",
    ]
  },
  lucasCat: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 0.4 0.4 0.7; offset: 0 -0.5 0.2;",
    ]
  },
  house: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 25 1 25; offset: 0 -0.72 0;",
    ]
  },
  lucasRug: {
    bodyPropertyString: "shape: none",
    shapePropertyString: [
      "shape: box; halfExtents: 4.5 0.3 7.5; offset: 0 -0.1 0;",
    ]
  },
}

AFRAME.registerComponent("define-collider", {
  init: function() {
    let el = this.el;
    
    let bodyType = "";
    if (el.getAttribute("dynamic-body")) {
      bodyType = "dynamic-body";
    } else {
      bodyType = "static-body";
    }
    el.setAttribute(bodyType, COLLIDER[el.id].bodyPropertyString);
    
    let shapePropertyString = COLLIDER[el.id].shapePropertyString;
    if (shapePropertyString.length != 0) {
      for (let i = 0; i < shapePropertyString.length; i++) {
        el.setAttribute("shape"+"__"+i, shapePropertyString[i]);
      }
    }
  }
})