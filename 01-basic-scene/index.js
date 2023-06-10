//import 'everything' with the alias 'THREE' from our import map 'three' (from index.html)
//using a module enable us to use import syntax
import * as THREE from 'three';

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

//create a sphere
let geometry = new THREE.SphereGeometry(1, 16, 16);
let material = new THREE.MeshBasicMaterial({ color: 'white' });
let mesh = new THREE.Mesh(geometry, material);

//add the sphere to the scene
scene.add(mesh);

//render the scene from our camera view and show it in the <canvas>
renderer.render(scene, camera);
