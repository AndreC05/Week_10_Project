import rough from "roughjs";

const rc = rough.canvas(document.getElementById("canvas2"));

//--------------------
rc.rectangle(10, 10, 100, 100);

rc.rectangle(140, 10, 100, 100, {
  roughness: 3,
});

rc.rectangle(280, 10, 100, 100, {
  roughness: 5,
  bowing: 3,
});

//--------------------
rc.circle(60, 180, 100);

rc.circle(190, 180, 100, {
  roughness: 3,
});

rc.circle(330, 180, 100, {
  roughness: 5,
  bowing: 2,
});

//--------------------
rc.ellipse(60, 290, 100, 70);

rc.ellipse(190, 290, 100, 50, {
  roughness: 3,
});

rc.ellipse(330, 290, 100, 60, {
  roughness: 5,
  bowing: 2,
});

//--------------------
rc.rectangle(10, 360, 100, 100, {
  roughness: 3,
  strokeWidth: 5,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc.circle(60, 410, 50, {
  roughness: 2,
  strokeWidth: 2,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});

rc.rectangle(140, 360, 100, 100, {
  roughness: 2,
  bowing: 4,
  strokeWidth: 2,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc.circle(190, 410, 50, {
  roughness: 3,
  strokeWidth: 5,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});

rc.rectangle(280, 360, 100, 100, {
  roughness: 3,
  bowing: 6,
  strokeWidth: 3,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc.circle(330, 410, 50, {
  roughness: 3,
  strokeWidth: 1,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});
