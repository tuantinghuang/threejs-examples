import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { MyCube } from './myCube.js'

let scene, renderer, camera;
let cubes = [];

function init() {

    /*

    set up scene

    */
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    let controls = new OrbitControls(camera, renderer.domElement)


    /*

   create an array of objects

   */

    for (let i = 0; i < 10; i++) {
        let cube = new MyCube((i - 5) * 2, 0, 0, scene);
        cubes.push(cube);
    }



}

function render() {

    for (let i = 0; i < cubes.length; i++) {
        let speed = i + 1;
        cubes[i].update(speed);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
render();