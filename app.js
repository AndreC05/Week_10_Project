import rough from "roughjs";
import Elevator from "elevator.js";

const rc = rough.canvas(document.getElementById("canvas"));

rc.rectangle(10, 10, 100, 100);
rc.rectangle(140, 10, 100, 100, {
  fill: "rgba(255,0,0,0.2)",
  fillStyle: "solid",
  roughness: 2,
});

//Elevator Button
window.onload = function () {
  const elevator = new Elevator({
    element: document.getElementById("ElevatorBtn"),
    mainAudio: "node_modules/elevator.js/demo/music/elevator.mp3",
    endAudio: "node_modules/elevator.js/demo/music/ding.mp3",
  });
};
