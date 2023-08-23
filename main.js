import * as THREE from "three"

//scene
const scene = new THREE.Scene();

//create our sphere
const geometry = new THREE.SphereGeometry(3, 64. 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Camera
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)