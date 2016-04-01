function setup() {
//se plantean las geometrias a utilizar
var formacabeza = new THREE.BoxGeometry(8,6,8);
var formacuerpo = new THREE.BoxGeometry(6,6,6);
var formabrazo = new THREE.BoxGeometry(1.5,4,1.5);
var formapiena = new THREE.BoxGeometry(2,3,2);
//para generar una forma combinada se requiere de las mallas para poder desplazar las formas en el espacio virtual.
var cabeza = new THREE.Mesh(formacabeza);
var cuerpo = new THREE.Mesh(formacuerpo);
var brazoD = new THREE.Mesh(formabrazo);
var brazoI = new THREE.Mesh(formabrazo);
var piernaD = new THREE.Mesh(formapiena);
var piernaI = new THREE.Mesh(formapiena);
// se desplazan las mallas.
cabeza.position.y = 12;
cuerpo.position.y = 6;
brazoI.position.x = -3.75;
brazoI.position.y = 6;
brazoD.position.x = 3.75;
brazoD.position.y = 6;
piernaD.position.x = 1;
piernaD.position.y = 1.5;
piernaI.position.x = -1;
piernaI.position.y = 1.5;
//se genera una forma (geometria) abstracta.
var forma= new THREE.Geometry();
//se utiliza el paquete GeometryUtils para conjugar las formas.
THREE.GeometryUtils.merge(forma,cabeza);
THREE.GeometryUtils.merge(forma,cuerpo);
THREE.GeometryUtils.merge(forma,brazoD);
THREE.GeometryUtils.merge(forma,brazoI);
THREE.GeometryUtils.merge(forma,piernaD);
THREE.GeometryUtils.merge(forma,piernaI);
//se genera la malla a partir de la forma.
malla = new THREE.Mesh(forma);
escena= new THREE.Scene();
escena.add(malla)
//se inicializa la camara y el *renderer*.
camara = new THREE.PerspectiveCamera();
camara.position.z=20;
camara.position.y=10;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
function loop(){
  requestAnimationFrame(loop);
  
  renderer.render(escena,camara);
}
  var escena, camara, renderer, malla;
  setup();
  loop();