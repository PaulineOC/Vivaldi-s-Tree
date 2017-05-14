


//To add elements to scene, need 2 functions:
//* Object function: actual geometry and meshes --> eg: creates sphere
//* Create function: create an instance of the object, sets initial position of object,  add to scene --> scene.add(sky.mesh);
//See SKY functions for reference



//COLORS
var Colors = {
    red: 0xf25346,
    white: 0xd8d0d1,
    brown: 0x59332e,
    pink: 0xF5986E,
    sub: 0xFFDF68,
    blue: 0x68c3c0,
    purple: 0x9c68a4,
    lightblue: 0x89dbec
};

// THREEJS RELATED VARIABLES

var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer, container;

//SCREEN & MOUSE VARIABLES

var HEIGHT, WIDTH,
    mousePos = {
        x: 0,
        y: 0
    };

//INIT THREE JS, SCREEN AND MOUSE EVENTS

function createScene() {

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', handleWindowResize, false);
}

// HANDLE SCREEN EVENTS

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}


// LIGHTS

var ambientLight, hemisphereLight, shadowLight;

function createLights() {

    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
    shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
}

///OBJECTS

var Starfish = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = "starfish";

    // Create leg 1
    var geomSubFin = new THREE.BoxGeometry(10, 5, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(60, 35, 0);
    this.mesh.add(subFin);

    // Create body
    var geomSubFin = new THREE.BoxGeometry(10, 10, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(70, 35, 0);
    this.mesh.add(subFin);

    // Create leg 2
    var geomSubFin = new THREE.BoxGeometry(5, 10, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(70, 45, 0);
    this.mesh.add(subFin);

    // Create leg 3
    var geomSubFin = new THREE.BoxGeometry(5, 14, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(65, 26, 0);
    this.mesh.add(subFin);

    // Create leg 4
    var geomSubFin = new THREE.BoxGeometry(5, 14, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(75, 26, 0);
    this.mesh.add(subFin);

    // Create leg 5
    var geomSubFin = new THREE.BoxGeometry(10, 5, 1, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.purple,
        // shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    // subFin.castShadow = true;
    // subFin.receiveShadow = true;
    subFin.position.set(80, 35, 0);
    this.mesh.add(subFin);
}

var AirPlane = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = "airPlane";

    // Create fin on top
    var geomSubFin = new THREE.BoxGeometry(40, 20, 40, 1, 1, 1);
    var matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.sub,
        shading: THREE.FlatShading
    });
    var subFin = new THREE.Mesh(geomSubFin, matCockpit);
    subFin.castShadow = true;
    subFin.receiveShadow = true;
    subFin.position.set(60, 35, 0);
    this.mesh.add(subFin);

    // Create the cabin
    var geomCockpit = new THREE.BoxGeometry(120, 50, 40, 1, 1, 1);
    matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.sub,
        shading: THREE.FlatShading
    });
    var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    cockpit.position.set(60, 0, 0);
    this.mesh.add(cockpit);

    // Create the tail join
    var geomTailJoin = new THREE.BoxGeometry(90, 20, 20, 1, 1, 1);
    matCockpit = new THREE.MeshPhongMaterial({
        color: Colors.sub,
        shading: THREE.FlatShading
    });
    var tailJoin = new THREE.Mesh(geomTailJoin, matCockpit);
    tailJoin.castShadow = true;
    tailJoin.receiveShadow = true;
    tailJoin.position.set(25, 0, 0);
    this.mesh.add(tailJoin);

    // Create TailSub
    var geomTailSub = new THREE.BoxGeometry(10, 40, 40, 1, 1, 1);
    var matTailPlane = new THREE.MeshPhongMaterial({
        color: Colors.sub,
        shading: THREE.FlatShading
    });
    var tailSub = new THREE.Mesh(geomTailSub, matTailPlane);
    tailSub.position.set(-25, 0, 0);
    tailSub.castShadow = true;
    tailSub.receiveShadow = true;
    this.mesh.add(tailSub);

    // Propeller

    var geomPropeller = new THREE.BoxGeometry(-10, 10, 5, 1, 1, 1);
    var matPropeller = new THREE.MeshPhongMaterial({
        color: Colors.brown,
        shading: THREE.FlatShading
    });
    this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    // Blades

    var geomBlade = new THREE.BoxGeometry(1, 50, 20, 1, 1, 1);
    var matBlade = new THREE.MeshPhongMaterial({
        color: Colors.sub,
        shading: THREE.FlatShading
    });

    var blade = new THREE.Mesh(geomBlade, matBlade);
    blade.position.set(-6, 0, 0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    this.propeller.add(blade);
    this.propeller.position.set(-35, 0, 0);
    this.mesh.add(this.propeller);
};

var Sky = function() {
    this.mesh = new THREE.Object3D();
    this.nSneks = 20;
    this.sneks = [];
    this.starfish = [];
    var stepAngle = Math.PI * 2 / this.nSneks;
    for (var i = 0; i < this.nSneks; i++) {
        var c = new Snek();
        var z = new Starfish();
        this.starfish.push(z);
        this.sneks.push(c);
        var a = stepAngle * i;
        var h = 750 + Math.random() * 200;
        z.mesh.position.y = Math.sin(a) * h;
        z.mesh.position.x = Math.cos(a) * h;
        z.mesh.position.z = -400 - Math.random() * 400;
        c.mesh.position.y = Math.sin(a) * h;
        c.mesh.position.x = Math.cos(a) * h;
        c.mesh.position.z = -400 - Math.random() * 400;
        // c.mesh.rotation.z = a + Math.PI/2;
        var s = 1 + Math.random() * 2;
        c.mesh.scale.set(s, s, s);
        this.mesh.add(c.mesh);
        z.mesh.scale.set(s, s, s);
        this.mesh.add(z.mesh);
    }
};

// var Sea = function(){
//   var geom = new THREE.CylinderGeometry(600,600,800,40,10);
//   geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
//   var mat = new THREE.MeshPhongMaterial({
//     color:Colors.blue,
//     transparent:true,
//     opacity:.6,
//     shading:THREE.FlatShading,
//   });
//   this.mesh = new THREE.Mesh(geom, mat);
//   this.mesh.receiveShadow = true;
// }

var Cloud = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = "cloud";
    var geom = new THREE.CubeGeometry(20, 20, 20);
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.white,
    });

    var nBlocs = 3 + Math.floor(Math.random() * 3);
    for (var i = 0; i < nBlocs; i++) {
        var m = new THREE.Mesh(geom.clone(), mat);
        m.position.x = i * 15;
        m.position.y = Math.random() * 10;
        m.position.z = Math.random() * 10;
        m.rotation.z = Math.random() * Math.PI * 2;
        m.rotation.y += Math.random() * Math.PI * 2;

        var s = 0.1 + Math.random() * 0.9;
        m.scale.set(s, s, s);
        m.castShadow = true;
        m.receiveShadow = true;
        this.mesh.add(m);
    }
};

var Snek = function() {
	this.mesh = new THREE.Object3D();
    this.mesh.name = "snek";
    var geom = new THREE.CubeGeometry(15, 15, 15);
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.red,
    });

    var nBlocs = 10 + Math.floor(Math.random() * 3);
    for (var i = 0; i < nBlocs; i++) {
        var m = new THREE.Mesh(geom.clone(), mat);
        m.position.x = i * 15;
        m.position.y = 15;
        m.position.z = Math.sin(i) * 15;

        var s = 1 - 0.1*i;
        m.scale.set(s, s, s);
        m.castShadow = true;
        m.receiveShadow = true;
        this.mesh.add(m);
    }

};

// starfish

var cuteBubbles = function(){
  this.mesh = new THREE.Object3D();
  this.mesh.name = "starfish";

  // var geometry = new THREE.TorusKnotGeometry( 5, 4, 2, 16 );
  // var material = new THREE.MeshBasicMaterial( {  color: Colors.purple } );
  // var torusKnot = new THREE.Mesh( geometry, material );

  var geometry = new THREE.SphereBufferGeometry( 1.5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: Colors.lightblue} );

  var bubbles = 100;
  for (var i = 0; i < bubbles; i++) {
      var bubble = new THREE.Mesh(geometry.clone(), material);
      bubble.position.x = getRndInteger(-300,300);
      bubble.position.y = getRndInteger(-300,300);
      this.mesh.add(bubble);
  }
}



var SeaCreature = function(){
  this.mesh = new THREE.Object3D();
    this.mesh.name ="seaCreature";
    var geometry = new THREE.TorusKnotGeometry( 1, 4, 10, 10 );
    var material = new THREE.MeshBasicMaterial( {  color: Colors.purple } );

    var torusKnot = new THREE.Mesh( geometry, material );

    for (var i = 0; i < 10; i++) {
      var creature = new THREE.Mesh(geometry.clone(), material);
      creature.position.x = getRndInteger(-300,300);
      creature.position.y = getRndInteger(-300,300);
      this.mesh.add(creature);
  }


}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// 3D Models
var airplane;
var myBubbles;
var creature;



function createStarfish() {
    var starfish = new Starfish();
    starfish.mesh.scale.set(0.25, 0.25, 0.25);
    starfish.mesh.position.y = 500;
    scene.add(starfish.mesh);
}

function createPlane() {
    airplane = new AirPlane();
    airplane.mesh.scale.set(0.25, 0.25, 0.25);
    airplane.mesh.position.y = 100;
    scene.add(airplane.mesh);
}

function createSky() {
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh);
}

// create starfish
function createBubbles(){
  myBubbles = new cuteBubbles();

  myBubbles.mesh.position.x = 100;
  myBubbles.mesh.position.y = -100;

  scene.add(myBubbles.mesh);

}

function createCreature(){
  creature = new SeaCreature();
  creature.mesh.position.x = 100;
  creature.mesh.position.y = -100;
  scene.add(creature.mesh);

}

function loop() {
    updatePlane();
    // sky.mesh.rotate.x += 0.1;
    sky.mesh.translateX(-5);

    if (sky.mesh.position.x < -2250) {
        sky.mesh.position.x = 2000;
    }

    // update starfish
    myBubbles.mesh.translateY(.5);

    if (myBubbles.mesh.position.y > 500) {
        myBubbles.mesh.position.y = -300 ;
    }

    // ocutupus
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

function updatePlane() {
    var targetY = normalize(mousePos.y, -0.75, 0.75, 25, 175);
    var targetX = normalize(mousePos.x, -0.75, 0.75, -100, 100);
    airplane.mesh.position.y = targetY;
    airplane.mesh.position.x = targetX;
    airplane.propeller.rotation.x += 0.3;
}

function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + (pc * dt);
    return tv;
}

function init(event) {
    document.addEventListener('mousemove', handleMouseMove, false);
    createScene();
    createLights();
    createPlane();
    createSky();

    createBubbles();

    createCreature();

    loop();
}

// HANDLE MOUSE EVENTS

var mousePos = {
    x: 0,
    y: 0
};

function handleMouseMove(event) {
    var tx = -1 + (event.clientX / WIDTH) * 2;
    var ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = {
        x: tx,
        y: ty
    };
}

window.addEventListener('load', init, false);
