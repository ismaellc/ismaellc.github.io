function setup(){
	robot = new Robot();
	robot.position.y = 1;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(15,.1,15),new THREE.MeshPhongMaterial({color: 0xffffff}));

	var iluminacion = new THREE.PointLight(0xffffff);
	iluminacion.position.y=50;
	//var iluminacion = new THREE.AmbientLight(0xffffff);
	
	escena= new THREE.Scene();
	escena.add(robot);
	escena.add(base);
	escena.add(iluminacion);

	camara= new THREE.PerspectiveCamera();
	camara.position.z=30;
	camara.position.y=10;
	camara.rotation.x-=0.05;
	

	renderer= new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
	document.body.appendChild(renderer.domElement);
	
	renderer.shadowMap.enabled = true;
	robot.castShadow = true;
	base.receiveShadow = true;
	iluminacion.castShadow = true;
}

function loop(){
	requestAnimationFrame(loop);

	robot.rotation.y += 0.01;
	

	renderer.render(escena,camara);
}

var camara, escena, renderer, robot;
setup();
loop();
