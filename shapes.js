import rough from "roughjs";
import { annotate, annotationGroup } from "rough-notation";


const rc1 = rough.canvas(document.getElementById("canvas1"));
const rc2 = rough.canvas(document.getElementById("canvas2"));
const rc3 = rough.canvas(document.getElementById("canvas3"));
const rc4 = rough.canvas(document.getElementById("canvas4"));
//------------------------------------------------------------Rough Shapes


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

//------------------------------------------------------------Rough Notation
const text1Btn = document.getElementById("text1Btn");
const text4Btn = document.getElementById("text4Btn");

const a1 = annotate(document.getElementById("text1.1"), {
  type: `underline`,
  color: "red",
  strokeWidth: 3,
});

const a2 = annotate(document.getElementById("text1.2"), {
  type: `box`,
  color: "purple",
});

const a3 = annotate(document.getElementById("text1.3"), {
  type: `circle`,
  color: "green",
});

const a4 = annotate(document.getElementById("text1.4"), {
  type: `highlight`,
  color: "pink",
});

const a5 = annotate(document.getElementById("text2.1"), {
  type: `bracket`,
  color: "magenta",
  brackets: ["right", "left"],
});

const a6 = annotate(document.getElementById("text2.2"), {
  type: `box`,
  color: "blue",
  iterations: 3,
});

const a7 = annotate(document.getElementById("text2.3"), {
  type: `circle`,
  color: "gold",
  iterations: 5,
});

const group1 = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
text1Btn.addEventListener("click", () => {
  group1.show();
});

//--------------

const a8 = annotate(document.getElementById("text4.1"), {
  type: `underline`,
  color: "cyan",
  strokeWidth: 2,
});

const a9 = annotate(document.getElementById("text4.2"), {
  type: `box`,
  color: "grey",
  strokeWidth: 1,
});

const a10 = annotate(document.getElementById("text5.1"), {
  type: `bracket`,
  color: "orange",
  strokeWidth: 3,
  brackets: ["right", "left"],
});

const a11 = annotate(document.getElementById("text6.1"), {
  type: `bracket`,
  color: "purple",
  strokeWidth: 5,
  brackets: "bottom",
});

const a12 = annotate(document.getElementById("text6.2"), {
  type: `highlight`,
  color: "red",
  strokeWidth: 2,
});

const group2 = annotationGroup([a8, a9, a10, a11, a12]);
text4Btn.addEventListener("click", () => {
  group2.show();
});
