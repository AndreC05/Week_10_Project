import rough from "roughjs";

const rc1 = rough.svg(svg1);
const rc2 = rough.svg(svg2);

let node1 = rc1.path("m80 0, v90, h30, l-50 50, l-50 -50, h30, v-90, z", {
  stroke: "blue",
  fill: "green",
});
svg1.appendChild(node1);

let node2 = rc1.path(
  "m120 40, h100, l-20 -30, l70 50, l-70 50, l20 -30 h-100, z",
  {
    strokeWidth: 2.5,
    roughness: 2,
    bowing: 1.2,
    fillStyle: "cross-hatch",
    fill: "turquoise",
    stroke: "orange",
  }
);
svg1.appendChild(node2);

let node3 = rc1.path("m320 145, v-90, h-40, l60 -50, l60 50, h-40, v90, z", {
  fill: "blue",
  stroke: "green",
  hachureAngle: 70,
  hachureGap: 6,
});
svg1.appendChild(node3);

let node4 = rc2.circle(60, 60, 100, {
  fillStyle: "dots",
  fill: "red",
  hachureGap: 8,
});
svg2.appendChild(node4);

let node5 = rc2.circle(180, 60, 100, {
  fillStyle: "dots",
  fill: "red",
  hachureGap: 4,
});
svg2.appendChild(node5);

let node6 = rc2.polygon(
  [
    [270, 20],
    [370, 30],
    [330, 130], //110
    [270, 110], //80
  ],
  { fill: "orange", fillStyle: "solid", roughness: 2, bowing: 2, seed: 62 }
);
svg2.appendChild(node6);
