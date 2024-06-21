import * as THREE from 'three';

export class MyCube {
    constructor(x, y, z, scene) {
        let geo = new THREE.BoxGeometry(1, 1, 1);
        let mat = new THREE.MeshBasicMaterial({ color: 'blue' });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, y, z);
        scene.add(this.mesh);


    }

    update(speed) {

        this.mesh.rotation.x += speed;
        this.mesh.rotation.z += speed;
    }


}