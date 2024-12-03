import rough from "roughjs";

const rc = rough.svg(svg);
let node = rc.path("m50 0, v70, h30, l-40 40, l-40 -40, h30, v-70, z", {
  stroke: "blue",
  fill: "green",
});
svg.appendChild(node);

let node2 = rc.path(
  "m100 30, h90, l-10 -20, l50 40, l-50 40, l10 -20 h-90, z",
  {
    strokeWidth: 2.5,
    roughness: 2,
    bowing: 1.2,
    fillStyle: "cross-hatch",
    fill: "turquoise",
    stroke: "orange",
  }
);
svg.appendChild(node2);

let node3 = rc.circle(60, 180, 100, {
  fillStyle: "dots",
  fill: "red",
  hachureGap: 8,
});
svg.appendChild(node3);

let node4 = rc.circle(180, 180, 100, {
  fillStyle: "dots",
  fill: "red",
  hachureGap: 4,
});
svg.appendChild(node4);

let node5 = rc.polygon(
  [
    [290, 130],
    [390, 140],
    [350, 240],
    [290, 220],
  ],
  { fill: "orange", fillStyle: "solid", roughness: 2, bowing: 2, seed: 62 }
);
svg.appendChild(node5);

let node6 = rc.path("m300 0, v70, h30, l-40 40, l-40 -40, h30, v-70, z", {
  fill: "blue",
  stroke: "green",
  hachureAngle: 70,
  hachureGap: 6,
});
svg.appendChild(node6);
