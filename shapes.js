import rough from "roughjs";

const rc1 = rough.canvas(document.getElementById("canvas1"));
const rc2 = rough.canvas(document.getElementById("canvas2"));
const rc3 = rough.canvas(document.getElementById("canvas3"));
const rc4 = rough.canvas(document.getElementById("canvas4"));

//--------------------
rc1.rectangle(10, 10, 100, 100);

rc1.rectangle(140, 10, 100, 100, {
  roughness: 3,
});

rc1.rectangle(280, 10, 100, 100, {
  roughness: 5,
  bowing: 3,
});

//--------------------
rc2.circle(60, 60, 100);

rc2.circle(190, 60, 100, {
  roughness: 3,
});

rc2.circle(330, 60, 100, {
  roughness: 5,
  bowing: 2,
});

//--------------------
rc3.ellipse(60, 60, 100, 70);

rc3.ellipse(190, 60, 100, 50, {
  roughness: 3,
});

rc3.ellipse(330, 60, 100, 60, {
  roughness: 5,
  bowing: 2,
});

//--------------------
rc4.rectangle(10, 20, 100, 100, {
  roughness: 3,
  strokeWidth: 5,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc4.circle(60, 70, 50, {
  roughness: 2,
  strokeWidth: 2,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});

rc4.rectangle(140, 20, 100, 100, {
  roughness: 2,
  bowing: 4,
  strokeWidth: 2,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc4.circle(190, 70, 50, {
  roughness: 3,
  strokeWidth: 5,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});

rc4.rectangle(280, 20, 100, 100, {
  roughness: 3,
  bowing: 6,
  strokeWidth: 3,
  stroke: "red",
  fill: "blue",
  fillStyle: "zigzag",
});
rc4.circle(330, 70, 50, {
  roughness: 3,
  strokeWidth: 1,
  stroke: "orange",
  fill: "rgba(0,255,0,0.3)",
  fillStyle: "solid",
});
