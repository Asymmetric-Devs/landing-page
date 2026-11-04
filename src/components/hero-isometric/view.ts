import {
  fitProjection,
  iso,
  depthOf,
  type Flat,
  type Point3,
  type Projection,
} from "../iso/iso-kit";

export const WIDTH = 660;
export const HEIGHT = 375;

// Station 1: Tu Negocio (Storefront Building, facing right +X)
export const BUSINESS_CENTER: [number, number] = [-78, 66];

// Station 2: Asymmetric Studio (Tech Hub / Equipo, center)
export const STUDIO_CENTER: [number, number] = [-6, 12];

// Station 3: The 3 Output Stations (Right column, vertically separated on screen)
export const PC_CENTER: [number, number] = [28, -92];
export const PHONE_CENTER: [number, number] = [86, -22];
export const GEARS_CENTER: [number, number] = [138, 42];

// Tight bounding points around the 5 stations and their shifted-right bottom labels
const BOUNDING_POINTS: Point3[] = [
  // Block 1: Tu Negocio
  [BUSINESS_CENTER[0] - 20, BUSINESS_CENTER[1] - 32, 0],
  [BUSINESS_CENTER[0] - 15, BUSINESS_CENTER[1] - 27, 42],
  [BUSINESS_CENTER[0] + 22, BUSINESS_CENTER[1] + 44, 0],

  // Block 2: Asymmetric Studio
  [STUDIO_CENTER[0] - 20, STUDIO_CENTER[1] - 28, 58],
  [STUDIO_CENTER[0] + 22, STUDIO_CENTER[1] + 42, 0],

  // Output 01: PC con Web (including shifted-right label)
  [PC_CENTER[0] - 14, PC_CENTER[1] - 26, 42],
  [PC_CENTER[0] + 42, PC_CENTER[1] - 22, 0],

  // Output 02: Celular (including shifted-right label)
  [PHONE_CENTER[0] - 13, PHONE_CENTER[1] - 20, 42],
  [PHONE_CENTER[0] + 34, PHONE_CENTER[1] + 10, 0],

  // Output 03: Engranajes (including shifted-right label)
  [GEARS_CENTER[0] - 16, GEARS_CENTER[1] - 22, 22],
  [GEARS_CENTER[0] + 34, GEARS_CENTER[1] + 34, 0],
];

export const P: Projection = fitProjection(BOUNDING_POINTS, WIDTH, HEIGHT, {
  pad: 18,
  azimuth: 42,
  elevation: 30,
});

export const at = (point: Point3): Flat => iso(point, P);
export const depth = (point: Point3): number => depthOf(point, P);
