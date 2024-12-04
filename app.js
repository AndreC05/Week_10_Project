import rough from "roughjs";
import Elevator from "elevator.js";

//Elevator Button
window.onload = function () {
  const elevator = new Elevator({
    element: document.getElementById("ElevatorBtn"),
    mainAudio: "node_modules/elevator.js/demo/music/elevator.mp3",
    endAudio: "node_modules/elevator.js/demo/music/ding.mp3",
  });
};
