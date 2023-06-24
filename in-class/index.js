
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//rgbeloader for HDR image
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
//loader for GLTF model
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, gltfLoader;

function init() {
    //create a new scene
    scene = new THREE.Scene();

    //create a camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    //create a renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //appending the <canvas> to our browser
    document.body.appendChild(renderer.domElement);

    //add orbit controls
    controls = new OrbitControls(camera, renderer.domElement);

    //create a HDR image loader
    let rgbeLoader = new RGBELoader();
    rgbeLoader.load("little_paris_eiffel_tower_4k.hdr", function (hdr) {
        hdr.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = hdr;
    })

    //create a GLTFLoader
    gltfLoader = new GLTFLoader();
    loadModel();
}


function loadModel() {
    gltfLoader.load("tree_model/tree_small_02_1k.gltf", function (gltf) {
        scene.add(gltf.scene);
        console.log(gltf);
    })
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
render();



