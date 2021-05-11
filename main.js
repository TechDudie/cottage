function main() {
  const canvas = document.querySelector("#glCanvas");
  const gl = canvas.getContext("webgl");
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
}
const vertex = [
  // Ground
  16, 0, 16,
  -16, 0, 16,
  -16, 0, -16,
  16, 0, -16
];
window.onload = main;
