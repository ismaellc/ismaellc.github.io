function Pierna(){
	THREE.Object3D.call(this);
	this.pierna = new THREE.Mesh(new THREE.BoxGeometry(2,3,2));
	this.pierna.position.y = -1.5;
	this.add(this.pierna);
}

Pierna.prototype = new THREE.Object3D();

function setup() {
THREE.ImageUtils.crossOrigin='';
var texturaCabeza = THREE.ImageUtils.loadTexture('imagenes/cabeza.png');
//se plantean las geometrias a utilizar
var formacabeza = new THREE.BoxGeometry(8,6,8);
var formacuerpo = new THREE.BoxGeometry(6,6,6);
var formabrazo = new THREE.CylinderGeometry(.5,0,3);
var formahombro = new THREE.SphereGeometry(1);
var formamano = new THREE.SphereGeometry(.25);
var formaantena = new THREE.CylinderGeometry(0,.25,2);
var cabeza = new THREE.Mesh(formacabeza,new THREE.MeshBasicMaterial({map: texturaCabeza}));
var cuerpo = new THREE.Mesh(formacuerpo);
piernaD = new Pierna();
piernaI = new Pierna();
var brazoD = new THREE.Mesh(formabrazo);
var brazoI = new THREE.Mesh(formabrazo);
var hombroD = new THREE.Mesh(formahombro);
var hombroI = new THREE.Mesh(formahombro);
var manoI = new THREE.Mesh(formamano);
var manoD = new THREE.Mesh(formamano);
var antena = new THREE.Mesh(formaantena);
var antenab = new THREE.Mesh(formamano);

// se desplazan las mallas.
cabeza.position.y = 12;
cuerpo.position.y = 6;
piernaD.position.x = 1;
piernaD.position.y = 3;
piernaI.position.x = -1;
piernaI.position.y = 3;
brazoI.position.x = -4;
brazoI.position.y = 5.5;
brazoD.position.x = 4;
brazoD.position.y = 5.5;
hombroI.position.x = -4;
hombroI.position.y = 7.5;
hombroD.position.x = 4;
hombroD.position.y = 7.5;
manoI.position.x = -4;
manoI.position.y = 4;
manoD.position.x = 4;
manoD.position.y = 4;
antena.position.y = 16;
antenab.position.y = 17;

step=.01;

escena = new THREE.Scene();
escena.add(cabeza);
escena.add(cuerpo);
escena.add(antena);
escena.add(antenab);
escena.add(hombroD);
escena.add(hombroI);
escena.add(brazoD);
escena.add(brazoI);
escena.add(manoD);
escena.add(manoI);
escena.add(piernaD);
escena.add(piernaI);

//se inicializa la camara y el *renderer*.
camara = new THREE.PerspectiveCamera();
camara.position.z=25;
camara.position.y=10;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame(loop);
  renderer.render(escena,camara);
  
  if(Math.abs(piernaD.rotation.x)>.5)
      step = -step;
      
    piernaD.rotation.x += step;
    piernaI.rotation.x -= step;
}
  var escena, camara, renderer;
  var step, piernaD, piernaI;
  setup();
  loop();
