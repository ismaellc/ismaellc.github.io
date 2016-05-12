function setup(){
	var material = new THREE.MeshPhongMaterial({color: 0xff0000});
	material.transparent = true;
	material.opacity =0;
	malla= new THREE.Mesh(new THREE.CylinderGeometry(1,1,4),material);
	
	var pared = new THREE.Mesh(new THREE.BoxGeometry(8,8,.1),new THREE.MeshBasicMaterial({color: 0x00ff00}));
	pared.position.z = -5;
	
	var iluminacion = new THREE.PointLight(0xffffff);
	iluminacion.position.y=0;
	iluminacion.position.z=0;
	iluminacion.position.x=0;

	escena= new THREE.Scene();
	escena.add(malla);
	escena.add(pared);
	escena.add(iluminacion);

	camara= new THREE.PerspectiveCamera();
	camara.position.z=10;
	//camara.position.x=3;
	//camara.lookAt(new THREE.Vector3(0,0,0));

	renderer= new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
	document.body.appendChild(renderer.domElement);
	
	renderer.shadowMapEnabled = true;
	malla.castShadow = true;
	pared.receiveShadow = true;
	iluminacion.castShadow = true;
	step=0.01;
}

function loop(){
	requestAnimationFrame(loop);
	if(malla.material.opacity >= 1)
		step = -0.005;
	if(malla.material.opacity <= 0)
		step = 0.005;
	
	malla.material.opacity += step;
	
	renderer.render(escena,camara);
}

var camara, escena, renderer, malla, step;
setup();
loop();
