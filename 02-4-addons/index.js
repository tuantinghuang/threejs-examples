//import 'everything' with the alias 'THREE' from our import map 'three' (from index.html)
//using a module enable us to use import syntax
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//create a scene
let scene = new THREE.Scene();

//create a camera
let aspectRatio = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
camera.position.z = 5;

//set up a renderer to show the camera view of our scene on <canvas>
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//appending the <canvas> to our browser
document.body.appendChild(renderer.domElement);

//add orbit contols
let controls = new OrbitControls(camera, renderer.domElement);


//create a box
let geometry = new THREE.BoxGeometry(1, 1, 1);
//material other than MeshBasicMaterial is subject to light
let material = new THREE.MeshLambertMaterial({ color: 'white' });
let mesh = new THREE.Mesh(geometry, material);
//add the sphere to the scene
scene.add(mesh);


//add lights to the scene
//ambient light
let ambientLight = new THREE.AmbientLight(0xaaffee, 0.5);
scene.add(ambientLight);

//directionalLight 
let directionalLight = new THREE.DirectionalLight(0x0000ff, 0.5);
directionalLight.position.set(3, 1, 5)
scene.add(directionalLight);

function render() {
    //mesh.rotateY(0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();


