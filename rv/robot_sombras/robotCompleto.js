function Pierna(){
	THREE.Object3D.call(this);
	this.pierna = new THREE.Mesh(new THREE.BoxGeometry(2,3,2),new THREE.MeshPhongMaterial({color: '#b9b9b9'}));
	this.pierna.position.y = -1.5;
	this.add(this.pierna);
}

Pierna.prototype = new THREE.Object3D();

function Brazo(){
	THREE.Object3D.call(this);
	var formabrazo = new THREE.CylinderGeometry(.5,0,3);
	var formahombro = new THREE.SphereGeometry(1);
	var formamano = new THREE.SphereGeometry(.25);

	this.brazo = new THREE.Mesh(formabrazo,new THREE.MeshPhongMaterial({color: '#b9b9b9'}));
	this.hombro = new THREE.Mesh(formahombro,new THREE.MeshPhongMaterial({color: '#00e7e7'}));
	this.mano = new THREE.Mesh(formamano,new THREE.MeshPhongMaterial({color: '#00e7e7'}));
	
	this.brazo.position.y = -2;
	this.mano.position.y = -3.5;
	
	this.add(this.hombro);
	this.add(this.brazo);
	this.add(this.mano);

}

Brazo.prototype = new THREE.Object3D();


function Robot(){
THREE.Object3D.call(this);
var formacabeza = new THREE.BoxGeometry(8,6,8);
var formacuerpo = new THREE.BoxGeometry(6,6,6);
var formabrazo = new THREE.CylinderGeometry(.5,0,3);
var formahombro = new THREE.SphereGeometry(1);
var formamano = new THREE.SphereGeometry(.25);
var formaantena = new THREE.CylinderGeometry(0,.25,2);
this.cabeza = new THREE.Mesh(formacabeza,new THREE.MeshPhongMaterial({color: '#b9b9b9'}));
this.cuerpo = new THREE.Mesh(formacuerpo,new THREE.MeshPhongMaterial({color: '#b9b9b9'}));
this.piernaD = new Pierna();
this.piernaI = new Pierna();
this.brazoD = new Brazo();
this.brazoI = new Brazo();
this.antena = new THREE.Mesh(formaantena,new THREE.MeshPhongMaterial({color: '#b9b9b9'}));
this.antenab = new THREE.Mesh(formamano,new THREE.MeshPhongMaterial({color: '#00e7e7'}));

THREE.ImageUtils.crossOrigin=''; //codigo para servidor
var texturaCabeza=THREE.ImageUtils.loadTexture("imagenes/cabeza.PNG");
var formacabezaCara = new THREE.BoxGeometry(7.998,6,8);
this.cabezaCara = new THREE.Mesh(formacabezaCara,new THREE.MeshPhongMaterial({map:texturaCabeza}));
this.cabezaCara.position.y = 3.5;
this.cabezaCara.position.z = 0.001;
this.add(this.cabezaCara);

/*var figura = new THREE.Shape(); // codigo para compu 
figura.moveTo(0,1);
for ( var i=0; i<7; i+=.01){
	figura.lineTo((Math.cos(i)),(Math.sin(i)));
}
var forma = new THREE.ShapeGeometry(figura);
this.ojo = new THREE.Mesh(forma,new THREE.MeshNormalMaterial());
this.ojo.position.y=3.5;
this.ojo.position.z=4.01;
this.add(this.ojo);*/


// se desplazan las mallas.
this.cabeza.position.y = 3.5;
this.cuerpo.position.y = -2.5;
this.piernaD.position.x = 1;
this.piernaD.position.y = -5.5;
this.piernaI.position.x = -1;
this.piernaI.position.y = -5.5;
this.brazoI.position.x = -4;
this.brazoI.position.y = -1;
this.brazoD.position.x = 4;
this.brazoD.position.y = -1;
this.antena.position.y = 7.5;
this.antenab.position.y = 8.5;

this.add(this.antenab);
this.add(this.antena);
this.add(this.cabeza);
this.add(this.cuerpo);
this.add(this.brazoD);
this.add(this.brazoI);
this.add(this.piernaD);
this.add(this.piernaI);

}

Robot.prototype = new THREE.Object3D();
