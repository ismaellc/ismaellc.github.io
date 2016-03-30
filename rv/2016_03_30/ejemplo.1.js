function setup(){
cubo1 = new THREE.Mesh (new THREE.BoxGeometry(1,1,1), 
                        new THREE.MeshNormalMaterial());
cubo2 = new THREE.Mesh (new THREE.BoxGeometry(1,1,1), 
                        new THREE.MeshNormalMaterial());
cubo1.position.x = 0.7;
cubo2.position.x = -0.7;

camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

raycaster = new THREE.Raycaster();
raycaster.setFromCamera (new )

var cubo1, cubo2, escena, camara, renderer;
var raycaster, step;
setup();
loop();
