import {
  cylinder,
  extrude,
  haloOf,
  insetPlan,
  lineOnTop,
  pathOf,
  planOutline,
  ring,
  slabOf,
  type Flat,
  type Plane,
  type Point3,
  type SolidPaths,
} from "../iso/iso-kit";
import {
  at,
  BUSINESS_CENTER,
  GEARS_CENTER,
  P,
  PC_CENTER,
  PHONE_CENTER,
  STUDIO_CENTER,
} from "./view";

// Helper to generate a 2D gear polygon ring with teeth
export function gearRing(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  teeth = 10
): Plane[] {
  const points: Plane[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const a1 = a0 + step * 0.22;
    const a2 = a0 + step * 0.52;
    const a3 = a0 + step * 0.74;

    points.push([cx + rInner * Math.cos(a0), cy + rInner * Math.sin(a0)]);
    points.push([cx + rOuter * Math.cos(a1), cy + rOuter * Math.sin(a1)]);
    points.push([cx + rOuter * Math.cos(a2), cy + rOuter * Math.sin(a2)]);
    points.push([cx + rInner * Math.cos(a3), cy + rInner * Math.sin(a3)]);
  }
  return points;
}

// Helper to draw a closed 3D quad or polygon on a face
const poly3 = (pts: Point3[], closed = false) =>
  pathOf(pts.map((pt) => at(pt)), closed);

// ========================================================
// 1. BLOQUE 1: TU NEGOCIO (STOREFRONT / LOCAL COMERCIAL)
//    Proporción rectangular (no cuadrada), mirando a la derecha (+X)
// ========================================================
export const BUSINESS_ART = (() => {
  const [bx, by] = BUSINESS_CENTER;

  // Tiled Sidewalk Plinth
  const sidewalkPlan = {
    x: bx - 18,
    y: by - 31,
    w: 42,
    d: 62,
    r: 1.5,
  };
  const halo = haloOf(sidewalkPlan, 0, 2.5, P);
  const sidewalk = slabOf(sidewalkPlan, 0, 2.5, P, 4, 0.4);

  // Sidewalk pavement tile lines on front (+X) and side (+Y) aprons
  const tileLines: string[] = [];
  for (let y = sidewalkPlan.y + 6; y <= sidewalkPlan.y + sidewalkPlan.d - 6; y += 8) {
    tileLines.push(
      lineOnTop([bx + 13, y], [sidewalkPlan.x + sidewalkPlan.w - 0.5, y], 2.5, P)
    );
  }
  for (let x = sidewalkPlan.x + 5; x <= bx + 13; x += 8) {
    tileLines.push(
      lineOnTop([x, by + 26], [x, sidewalkPlan.y + sidewalkPlan.d - 0.5], 2.5, P)
    );
  }

  // Main Shop Building Volume (narrower depth w=28, wider storefront d=52)
  const buildingPlan = {
    x: bx - 15,
    y: by - 26,
    w: 28,
    d: 52,
    r: 1,
  };
  const body = slabOf(buildingPlan, 2.5, 29.5, P, 4, 0.5);

  // Projecting Roof Cornice Moldings & Recessed Parapet Roof (like reference photo)
  const corniceLowerPlan = {
    x: buildingPlan.x - 1,
    y: buildingPlan.y - 1,
    w: buildingPlan.w + 2,
    d: buildingPlan.d + 2,
    r: 1,
  };
  const corniceLower = slabOf(corniceLowerPlan, 32, 2, P, 4, 0.3);

  const corniceUpperPlan = {
    x: buildingPlan.x - 1.5,
    y: buildingPlan.y - 1.5,
    w: buildingPlan.w + 3,
    d: buildingPlan.d + 3,
    r: 1,
  };
  const corniceUpper = slabOf(corniceUpperPlan, 34, 2.2, P, 4, 0.3);

  const parapetPlan = {
    x: buildingPlan.x + 0.5,
    y: buildingPlan.y + 0.5,
    w: buildingPlan.w - 1,
    d: buildingPlan.d - 1,
    r: 0.8,
  };
  const parapet = slabOf(parapetPlan, 36.2, 4.8, P, 4, 0.4);
  const roofRecessInner = planOutline(insetPlan(parapetPlan, 2.8), 41, P);
  const roofRecessFloor = planOutline(insetPlan(parapetPlan, 2.8), 38.5, P);

  const frontX = buildingPlan.x + buildingPlan.w; // x = bx + 13
  const sideY = buildingPlan.y + buildingPlan.d;  // y = by + 26

  // Sloped Storefront Awning (Toldo inclinado con caída y franjas) on +X face
  const awY0 = by - 24;
  const awY1 = by + 24;
  const awX0 = frontX;
  const awX1 = frontX + 10;
  const awZTop = 25.5;
  const awZMid = 19.5;
  const awZBot = 17.0;

  // Awning polygons: sloped roof, front vertical valance, and left/right side triangles
  const awningSlopeTop = poly3(
    [
      [awX0, awY0, awZTop],
      [awX1, awY0, awZMid],
      [awX1, awY1, awZMid],
      [awX0, awY1, awZTop],
    ],
    true
  );
  const awningValance = poly3(
    [
      [awX1, awY0, awZMid],
      [awX1, awY0, awZBot],
      [awX1, awY1, awZBot],
      [awX1, awY1, awZMid],
    ],
    true
  );
  const awningSideRight = poly3(
    [
      [awX0, awY1, awZTop],
      [awX1, awY1, awZMid],
      [awX1, awY1, awZBot],
      [awX0, awY1, awZBot],
    ],
    true
  );

  // Alternating Awning Stripes (filled stripe bands + seam lines)
  const stripeCount = 10;
  const stripeStep = (awY1 - awY0) / stripeCount;
  const awningStripeFills: string[] = [];
  const awningStripeLines: string[] = [];

  for (let i = 0; i < stripeCount; i++) {
    const sy0 = awY0 + i * stripeStep;
    const sy1 = sy0 + stripeStep;
    if (i > 0) {
      awningStripeLines.push(
        poly3([
          [awX0, sy0, awZTop],
          [awX1, sy0, awZMid],
          [awX1, sy0, awZBot],
        ])
      );
    }
    if (i % 2 === 0) {
      awningStripeFills.push(
        poly3(
          [
            [awX0, sy0, awZTop],
            [awX1, sy0, awZMid],
            [awX1, sy1, awZMid],
            [awX0, sy1, awZTop],
          ],
          true
        )
      );
    }
  }

  const awningOutline = [
    awningSlopeTop,
    awningValance,
    awningSideRight,
  ].join("");

  // Storefront Facade details under Awning (+X face at frontX)
  const fx = frontX + 0.2;
  // 1) Small left window
  const leftWindow = poly3(
    [
      [fx, by - 22.5, 6.5],
      [fx, by - 22.5, 16.5],
      [fx, by - 15.5, 16.5],
      [fx, by - 15.5, 6.5],
    ],
    true
  );

  // 2) Entrance Door with upper glass window & handle
  const doorFrame = poly3(
    [
      [fx, by - 13, 2.5],
      [fx, by - 13, 16.5],
      [fx, by - 3.5, 16.5],
      [fx, by - 3.5, 2.5],
    ],
    true
  );
  const doorGlass = poly3(
    [
      [fx + 0.1, by - 11.5, 8.5],
      [fx + 0.1, by - 11.5, 15],
      [fx + 0.1, by - 5, 15],
      [fx + 0.1, by - 5, 8.5],
    ],
    true
  );
  const doorHandle = poly3([
    [fx + 0.2, by - 5.2, 6.2],
    [fx + 0.2, by - 5.2, 7.8],
  ]);

  // 3) Multi-Pane Shop Display Window (3x2 grid)
  const winY0 = by - 0.5;
  const winY1 = by + 22.5;
  const winZ0 = 5.5;
  const winZ1 = 16.5;
  const shopWindowOuter = poly3(
    [
      [fx, winY0, winZ0],
      [fx, winY0, winZ1],
      [fx, winY1, winZ1],
      [fx, winY1, winZ0],
    ],
    true
  );
  const shopWindowGrid = [
    // Horizontal divider
    poly3([
      [fx + 0.1, winY0, (winZ0 + winZ1) / 2],
      [fx + 0.1, winY1, (winZ0 + winZ1) / 2],
    ]),
    // 2 Vertical mullions (creating 3 columns)
    poly3([
      [fx + 0.1, winY0 + (winY1 - winY0) / 3, winZ0],
      [fx + 0.1, winY0 + (winY1 - winY0) / 3, winZ1],
    ]),
    poly3([
      [fx + 0.1, winY0 + ((winY1 - winY0) * 2) / 3, winZ0],
      [fx + 0.1, winY0 + ((winY1 - winY0) * 2) / 3, winZ1],
    ]),
  ].join("");

  // Side Wall (+Y face at sideY) Window & Signboard Banner (like reference image)
  const sy = sideY + 0.2;
  const sideWinX0 = bx - 11.5;
  const sideWinX1 = bx + 9.5;
  const sideWindow = poly3(
    [
      [sideWinX0, sy, 6],
      [sideWinX0, sy, 17],
      [sideWinX1, sy, 17],
      [sideWinX1, sy, 6],
    ],
    true
  );
  const sideWindowMullions = [
    poly3([
      [sideWinX0 + 7, sy + 0.1, 6],
      [sideWinX0 + 7, sy + 0.1, 17],
    ]),
    poly3([
      [sideWinX0 + 14, sy + 0.1, 6],
      [sideWinX0 + 14, sy + 0.1, 17],
    ]),
  ].join("");

  // Signboard banner above side window
  const sideBanner = poly3(
    [
      [sideWinX0, sy, 19.5],
      [sideWinX0, sy, 26],
      [sideWinX1, sy, 26],
      [sideWinX1, sy, 19.5],
    ],
    true
  );
  const sideBannerLine = poly3([
    [sideWinX0 + 3, sy + 0.1, 22.8],
    [sideWinX1 - 3, sy + 0.1, 22.8],
  ]);

  // Potted Plant / Small Tree at front corner of sidewalk
  const potPlan = {
    x: frontX + 3.5,
    y: by - 28.5,
    w: 5.5,
    d: 5.5,
    r: 0.6,
  };
  const planterPot = slabOf(potPlan, 2.5, 4.2, P, 2, 0.3);
  const bushLower = cylinder(frontX + 6.25, by - 25.75, 3.8, 6.7, 3.5, P, 20, 0.6);
  const bushUpper = cylinder(frontX + 6.25, by - 25.75, 2.8, 10.2, 2.5, P, 18, 0.5);

  // Flow output port & bottom label anchor
  const terminalPoint = at([sidewalkPlan.x + sidewalkPlan.w, by - 16, 2]);
  const labelPos = at([bx + 2, sidewalkPlan.y + sidewalkPlan.d + 8, 0]);

  return {
    halo,
    sidewalk,
    tileLines: tileLines.join(""),
    body,
    corniceLower,
    corniceUpper,
    parapet,
    roofRecessInner,
    roofRecessFloor,
    awningSlopeTop,
    awningValance,
    awningSideRight,
    awningStripeFills: awningStripeFills.join(""),
    awningStripeLines: awningStripeLines.join(""),
    awningOutline,
    leftWindow,
    doorFrame,
    doorGlass,
    doorHandle,
    shopWindowOuter,
    shopWindowGrid,
    sideWindow,
    sideWindowMullions,
    sideBanner,
    sideBannerLine,
    planterPot,
    bushLower,
    bushUpper,
    terminalPoint,
    labelPos,
  };
})();

// ========================================================
// 2. BLOQUE 2: ASYMMETRIC (EMPRESA / EQUIPO DE DESARROLLO)
// ========================================================
export const STUDIO_ART = (() => {
  const [sx, sy] = STUDIO_CENTER;

  // Plinth Base
  const plinthPlan = {
    x: sx - 20,
    y: sy - 28,
    w: 40,
    d: 56,
    r: 2,
  };
  const halo = haloOf(plinthPlan, 0, 2.5, P);
  const plinth = slabOf(plinthPlan, 0, 2.5, P, 4, 0.4);

  // Lower Floor Architectural Volume
  const lowerPlan = {
    x: sx - 16,
    y: sy - 24,
    w: 32,
    d: 48,
    r: 2,
  };
  const lowerBody = slabOf(lowerPlan, 2.5, 17, P, 5, 0.5);

  // Middle Fascia Band (between Floor 1 and Floor 2)
  const fasciaPlan = {
    x: sx - 17,
    y: sy - 25,
    w: 34,
    d: 50,
    r: 2,
  };
  const fasciaBand = slabOf(fasciaPlan, 19.5, 3.5, P, 5, 0.4);

  // Upper Studio Floor
  const upperBody = slabOf(lowerPlan, 23, 16, P, 5, 0.5);

  // Roof Overhang Cornice
  const roofCap = slabOf(fasciaPlan, 39, 2.5, P, 5, 0.5);
  const roofInset = planOutline(insetPlan(fasciaPlan, 2.5), 41.5, P);

  // Rooftop Tech Hub (Server & Comms Unit)
  const serverHubPlan = {
    x: sx - 10,
    y: sy - 14,
    w: 18,
    d: 26,
    r: 1.5,
  };
  const serverHub = slabOf(serverHubPlan, 41.5, 6.5, P, 3, 0.4);
  const antennaMast = cylinder(sx - 2, sy - 6, 1.3, 48, 11, P, 14);
  const antennaRing = ring(sx - 2, sy - 6, 4.2, 54, P, 20);
  const antennaTip = at([sx - 2, sy - 6, 59]);

  // Curtain Wall Windows on +X face (x = sx + 16)
  const fx = sx + 16.2;
  const upperWindow = poly3(
    [
      [fx, sy - 20, 25],
      [fx, sy - 20, 36.5],
      [fx, sy + 20, 36.5],
      [fx, sy + 20, 25],
    ],
    true
  );
  const lowerWindow = poly3(
    [
      [fx, sy - 20, 5],
      [fx, sy - 20, 17],
      [fx, sy + 20, 17],
      [fx, sy + 20, 5],
    ],
    true
  );

  const mullions: string[] = [];
  for (const y of [sy - 10, sy, sy + 10]) {
    mullions.push(poly3([[fx + 0.1, y, 25], [fx + 0.1, y, 36.5]]));
    mullions.push(poly3([[fx + 0.1, y, 5], [fx + 0.1, y, 17]]));
  }

  // Side Curtain Windows on +Y face (y = sy + 24)
  const fy = sy + 24.2;
  const sideUpperWindow = poly3(
    [
      [sx - 12, fy, 25],
      [sx - 12, fy, 36.5],
      [sx + 12, fy, 36.5],
      [sx + 12, fy, 25],
    ],
    true
  );
  const sideLowerWindow = poly3(
    [
      [sx - 12, fy, 5],
      [sx - 12, fy, 17],
      [sx + 12, fy, 17],
      [sx + 12, fy, 5],
    ],
    true
  );

  // Prominent Brand Plaque on +X Fascia
  const plaquePlan = {
    x: sx + 16.5,
    y: sy - 13,
    w: 2.2,
    d: 26,
    r: 0.8,
  };
  const brandPlaque = slabOf(plaquePlan, 18, 6.5, P, 2, 0.3);
  const brandAccentDot = at([sx + 19, sy - 9.5, 21.2]);
  const brandLine = poly3([
    [sx + 19, sy - 6, 21.2],
    [sx + 19, sy + 9.5, 21.2],
  ]);

  // Conduit Connection Points (Single unified output port on the +X plinth face)
  const inputPoint = at([plinthPlan.x, sy + 7, 2]);
  const outputOrigin = at([plinthPlan.x + plinthPlan.w, sy - 6, 2]);

  const labelPos = at([sx + 2, plinthPlan.y + plinthPlan.d + 8, 0]);

  return {
    halo,
    plinth,
    lowerBody,
    fasciaBand,
    upperBody,
    roofCap,
    roofInset,
    serverHub,
    antennaMast,
    antennaRing,
    antennaTip,
    upperWindow,
    lowerWindow,
    mullions: mullions.join(""),
    sideUpperWindow,
    sideLowerWindow,
    brandPlaque,
    brandAccentDot,
    brandLine,
    inputPoint,
    outputOrigin,
    labelPos,
  };
})();

// ========================================================
// 3. OUTPUT 01: PC CON WEB ABIERTA (SITIOS & SISTEMAS WEB)
// ========================================================
export const PC_ART = (() => {
  const [px, py] = PC_CENTER;

  // Platform Pad
  const padPlan = {
    x: px - 14,
    y: py - 26,
    w: 30,
    d: 52,
    r: 2.5,
  };
  const halo = haloOf(padPlan, 0, 2.5, P);
  const pad = slabOf(padPlan, 0, 2.5, P, 4, 0.4);

  // Monitor Stand Base & Neck
  const standBase = slabOf(
    { x: px - 6, y: py - 7, w: 9, d: 14, r: 1.2 },
    2.5,
    1.8,
    P,
    3,
    0.3
  );
  const standNeck = cylinder(px - 2, py, 2.2, 4.3, 8.5, P, 16);

  // Widescreen Desktop Monitor Body
  const monitorPlan = {
    x: px - 3,
    y: py - 22,
    w: 4.5,
    d: 44,
    r: 1.8,
  };
  const monitorBody = slabOf(monitorPlan, 12, 28, P, 4, 0.5);

  // Screen Face (+X face at x = px + 1.5)
  const fx = px + 1.7;
  const screenBezel = poly3(
    [
      [fx, py - 20, 14],
      [fx, py - 20, 38],
      [fx, py + 20, 38],
      [fx, py + 20, 14],
    ],
    true
  );

  // Browser Top Bar Divider
  const browserBarLine = poly3([
    [fx + 0.1, py - 20, 34.2],
    [fx + 0.1, py + 20, 34.2],
  ]);

  // 3 Browser Window Dots [● ● ●]
  const windowDots: Flat[] = [
    at([fx + 0.15, py - 17.5, 36.1]),
    at([fx + 0.15, py - 14.8, 36.1]),
    at([fx + 0.15, py - 12.1, 36.1]),
  ];

  // URL Address Bar
  const addressBar = poly3(
    [
      [fx + 0.15, py - 8, 35.2],
      [fx + 0.15, py - 8, 37],
      [fx + 0.15, py + 14, 37],
      [fx + 0.15, py + 14, 35.2],
    ],
    true
  );

  // Open Web Page Content (Hero Banner + 3 Feature Cards)
  const webHeroBox = poly3(
    [
      [fx + 0.15, py - 17.5, 25],
      [fx + 0.15, py - 17.5, 32.2],
      [fx + 0.15, py + 17.5, 32.2],
      [fx + 0.15, py + 17.5, 25],
    ],
    true
  );
  const webHeroLines = [
    poly3([[fx + 0.2, py - 15, 29.8], [fx + 0.2, py + 2, 29.8]]),
    poly3([[fx + 0.2, py - 15, 27.4], [fx + 0.2, py - 3, 27.4]]),
    // CTA button inside hero
    poly3(
      [
        [fx + 0.2, py + 7, 27],
        [fx + 0.2, py + 7, 30.2],
        [fx + 0.2, py + 15, 30.2],
        [fx + 0.2, py + 15, 27],
      ],
      true
    ),
  ].join("");

  // 3 Feature Cards below Hero
  const webCards = [
    poly3(
      [
        [fx + 0.15, py - 17.5, 16],
        [fx + 0.15, py - 17.5, 23],
        [fx + 0.15, py - 7, 23],
        [fx + 0.15, py - 7, 16],
      ],
      true
    ),
    poly3(
      [
        [fx + 0.15, py - 5.2, 16],
        [fx + 0.15, py - 5.2, 23],
        [fx + 0.15, py + 5.2, 23],
        [fx + 0.15, py + 5.2, 16],
      ],
      true
    ),
    poly3(
      [
        [fx + 0.15, py + 7, 16],
        [fx + 0.15, py + 7, 23],
        [fx + 0.15, py + 17.5, 23],
        [fx + 0.15, py + 17.5, 16],
      ],
      true
    ),
  ].join("");

  // Keyboard & Mouse on Pad in front of Monitor
  const keyboardPlan = {
    x: px + 5,
    y: py - 14,
    w: 6.5,
    d: 21,
    r: 0.8,
  };
  const keyboard = slabOf(keyboardPlan, 2.5, 1.5, P, 3, 0.2);
  const keyboardKeys = [
    lineOnTop([px + 6.8, py - 12], [px + 6.8, py + 5], 4.1, P),
    lineOnTop([px + 8.5, py - 12], [px + 8.5, py + 5], 4.1, P),
    lineOnTop([px + 10.2, py - 9], [px + 10.2, py + 2], 4.1, P),
  ].join("");

  const mouse = slabOf(
    { x: px + 5.8, y: py + 10, w: 5, d: 3.5, r: 1.4 },
    2.5,
    1.4,
    P,
    3,
    0.2
  );

  const terminalPoint = at([padPlan.x, py + 12, 2]);
  // Shifted well to the right of the PC pad (and upper-right in Y) so it stays completely clear of the Smartphone below
  const labelPos = at([px + 28, py - 10, 0]);

  return {
    halo,
    pad,
    standBase,
    standNeck,
    monitorBody,
    screenBezel,
    browserBarLine,
    windowDots,
    addressBar,
    webHeroBox,
    webHeroLines,
    webCards,
    keyboard,
    keyboardKeys,
    mouse,
    terminalPoint,
    labelPos,
  };
})();

// ========================================================
// 4. OUTPUT 02: CELULAR / SMARTPHONE (APPS PARA CELULARES)
// ========================================================
export const PHONE_ART = (() => {
  const [mx, my] = PHONE_CENTER;

  // Platform Pad
  const padPlan = {
    x: mx - 13,
    y: my - 21,
    w: 26,
    d: 42,
    r: 2.5,
  };
  const halo = haloOf(padPlan, 0, 2.5, P);
  const pad = slabOf(padPlan, 0, 2.5, P, 4, 0.4);

  // Charging Dock Stand
  const dock = slabOf(
    { x: mx - 6, y: my - 12, w: 12, d: 24, r: 2 },
    2.5,
    3,
    P,
    3,
    0.4
  );

  // Large Isometric Smartphone Chassis
  const phonePlan = {
    x: mx - 2,
    y: my - 14.5,
    w: 4.2,
    d: 29,
    r: 3.8,
  };
  const phoneBody = slabOf(phonePlan, 5.5, 36, P, 5, 0.5);

  // Smartphone Glass Screen Face (+X face at x = mx + 2.2)
  const fx = mx + 2.4;
  const screenBezel = poly3(
    [
      [fx, my - 12.2, 7.5],
      [fx, my - 12.2, 39.5],
      [fx, my + 12.2, 39.5],
      [fx, my + 12.2, 7.5],
    ],
    true
  );

  // Top Dynamic Island / Speaker Notch
  const dynamicIsland = poly3(
    [
      [fx + 0.1, my - 3.8, 36.8],
      [fx + 0.1, my - 3.8, 38.2],
      [fx + 0.1, my + 3.8, 38.2],
      [fx + 0.1, my + 3.8, 36.8],
    ],
    true
  );

  // Mobile App UI Elements
  const appHeader = poly3([
    [fx + 0.1, my - 10, 34.2],
    [fx + 0.1, my + 10, 34.2],
  ]);

  // Featured App Banner Card
  const appHeroCard = poly3(
    [
      [fx + 0.1, my - 10, 25],
      [fx + 0.1, my - 10, 32],
      [fx + 0.1, my + 10, 32],
      [fx + 0.1, my + 10, 25],
    ],
    true
  );
  const appHeroLines = [
    poly3([[fx + 0.15, my - 7.5, 29.5], [fx + 0.15, my + 3, 29.5]]),
    poly3([[fx + 0.15, my - 7.5, 27.2], [fx + 0.15, my + 6, 27.2]]),
  ].join("");

  // 2 App List Cards
  const appListCards = [
    poly3(
      [
        [fx + 0.1, my - 10, 18.2],
        [fx + 0.1, my - 10, 23.2],
        [fx + 0.1, my + 10, 23.2],
        [fx + 0.1, my + 10, 18.2],
      ],
      true
    ),
    poly3(
      [
        [fx + 0.1, my - 10, 11.8],
        [fx + 0.1, my - 10, 16.8],
        [fx + 0.1, my + 10, 16.8],
        [fx + 0.1, my + 10, 11.8],
      ],
      true
    ),
  ].join("");

  // Bottom Home Indicator Bar
  const homeIndicator = poly3([
    [fx + 0.15, my - 4.5, 9.2],
    [fx + 0.15, my + 4.5, 9.2],
  ]);

  const terminalPoint = at([padPlan.x, my, 2]);
  // Shifted underneath and to the right of the Smartphone pad so the Gears never overlap it
  const labelPos = at([mx + 24, my + 14, 0]);

  return {
    halo,
    pad,
    dock,
    phoneBody,
    screenBezel,
    dynamicIsland,
    appHeader,
    appHeroCard,
    appHeroLines,
    appListCards,
    homeIndicator,
    terminalPoint,
    labelPos,
  };
})();

// ========================================================
// 5. OUTPUT 03: ENGRANAJES & HERRAMIENTAS (AUTOMATIZACIÓN & IA)
// ========================================================
export const GEARS_ART = (() => {
  const [gx, gy] = GEARS_CENTER;

  // Platform Pad
  const padPlan = {
    x: gx - 16,
    y: gy - 23,
    w: 34,
    d: 46,
    r: 2.5,
  };
  const halo = haloOf(padPlan, 0, 2.5, P);
  const pad = slabOf(padPlan, 0, 2.5, P, 4, 0.4);

  // Circuit Board Traces on Pad
  const circuitTraces = [
    lineOnTop([gx - 13, gy - 17], [gx - 4, gy - 17], 2.6, P),
    lineOnTop([gx - 13, gy + 17], [gx - 2, gy + 17], 2.6, P),
    lineOnTop([gx + 8, gy - 18], [gx + 15, gy - 18], 2.6, P),
  ].join("");

  // Large Main 3D Cogwheel (10 teeth)
  const mainGearPos: [number, number] = [gx - 1, gy - 5];
  const mainGearPoly = gearRing(mainGearPos[0], mainGearPos[1], 11.5, 16.5, 10);
  const mainGear = extrude(mainGearPoly, 2.5, 6.5, P, { bevel: 0.35 });
  const mainHub = cylinder(mainGearPos[0], mainGearPos[1], 5.5, 2.5, 8.5, P, 24, 0.3);
  const mainHubRing = ring(mainGearPos[0], mainGearPos[1], 3.8, 11, P, 20);
  const mainAxle = cylinder(mainGearPos[0], mainGearPos[1], 2.2, 2.5, 12, P, 18);

  // Secondary Interlocking 3D Cogwheel (8 teeth)
  const secGearPos: [number, number] = [gx + 9.5, gy + 11.5];
  const secGearPoly = gearRing(secGearPos[0], secGearPos[1], 7.5, 11, 8);
  const secGear = extrude(secGearPoly, 3.5, 5.5, P, { bevel: 0.3 });
  const secHub = cylinder(secGearPos[0], secGearPos[1], 3.4, 3.5, 7, P, 20);
  const secAxle = cylinder(secGearPos[0], secGearPos[1], 1.5, 3.5, 9.5, P, 16);

  // Automation Actuator / Tool Block beside the gears
  const servoPlan = {
    x: gx - 12.5,
    y: gy + 7.5,
    w: 10,
    d: 11,
    r: 1.5,
  };
  const servoMotor = slabOf(servoPlan, 2.5, 12, P, 3, 0.4);
  const servoTopRing = ring(gx - 7.5, gy + 13, 2.8, 14.5, P, 18);
  const servoBeacon = at([gx - 7.5, gy + 13, 14.5]);

  const terminalPoint = at([padPlan.x, gy - 4, 2]);
  // Shifted underneath and to the right of the Gears pad for consistent alignment
  const labelPos = at([gx + 24, gy + 16, 0]);

  return {
    halo,
    pad,
    circuitTraces,
    mainGear,
    mainHub,
    mainHubRing,
    mainAxle,
    secGear,
    secHub,
    secAxle,
    servoMotor,
    servoTopRing,
    servoBeacon,
    terminalPoint,
    labelPos,
  };
})();

// ========================================================
// 6. GROUND FLOW CONDUIT PATHS (UNIFIED BRACKET / LLAVE)
// ========================================================
export const FLOW_PATHS = (() => {
  // 1) Tu Negocio -> Asymmetric (100% straight line, no ball)
  const p0 = BUSINESS_ART.terminalPoint;
  const p1 = STUDIO_ART.inputPoint;

  // 2) Asymmetric -> 3 Outputs: All 3 emerge from ONE single origin point
  //    and fan out with smooth cubic Bézier bracket ("llave") curves
  const origin = STUDIO_ART.outputOrigin;
  const targets: [Flat, Flat, Flat] = [
    PC_ART.terminalPoint,
    PHONE_ART.terminalPoint,
    GEARS_ART.terminalPoint,
  ];

  const studioToOutputs = targets.map((to) => {
    const [x0, y0] = origin;
    const [x1, y1] = to;
    const dx = x1 - x0;
    const c1: Flat = [x0 + dx * 0.48, y0];
    const c2: Flat = [x1 - dx * 0.42, y1];
    const d = `M${x0.toFixed(1)},${y0.toFixed(1)} C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
    return {
      from: origin,
      to,
      d,
    };
  });

  return {
    bizToStudio: { from: p0, to: p1 },
    outputOrigin: origin,
    studioToOutputs,
  };
})();
