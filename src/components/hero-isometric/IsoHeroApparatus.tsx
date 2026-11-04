"use client";

import * as React from "react";
import {
  Dots,
  Line,
  Solid,
} from "../iso/draw";
import { pathOf } from "../iso/iso-kit";
import {
  BUSINESS_ART,
  FLOW_PATHS,
  GEARS_ART,
  PC_ART,
  PHONE_ART,
  STUDIO_ART,
} from "./geometry";
import {
  HEIGHT,
  WIDTH,
} from "./view";
import "../iso/iso.css";

interface IsoHeroApparatusProps {
  activeIdx: 0 | 1 | 2;
  onSelect: (idx: 0 | 1 | 2) => void;
  onHoverChange?: (hovered: boolean) => void;
}

export function IsoHeroApparatus({
  activeIdx,
  onSelect,
  onHoverChange,
}: IsoHeroApparatusProps) {
  const bizToStudioPath = pathOf([
    FLOW_PATHS.bizToStudio.from,
    FLOW_PATHS.bizToStudio.to,
  ]);

  const activeOutputRoute = FLOW_PATHS.studioToOutputs[activeIdx];
  const activeOutputPath = activeOutputRoute.d;

  return (
    <div
      className="iso w-full select-none"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div className="relative w-full flex items-center justify-center">
        <svg
          className="iso-svg w-full h-auto max-h-[410px] overflow-visible"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label="De la idea al producto funcionando en Asymmetric"
          focusable="false"
        >
          {/* ======================================================== */}
          {/* LAYER 1: GROUND CONDUIT LINES (STRAIGHT + BRACKET LLAVE) */}
          {/* ======================================================== */}
          <g id="iso-ground-flows">
            {/* Straight static line: Tu Negocio -> Asymmetric (no ball) */}
            <Line d={bizToStudioPath} tone="mid" />
            <path
              d={bizToStudioPath}
              stroke="var(--accent)"
              strokeWidth="1.8"
              fill="none"
            />
            <circle
              cx={FLOW_PATHS.bizToStudio.from[0]}
              cy={FLOW_PATHS.bizToStudio.from[1]}
              r="2.4"
              fill="var(--accent)"
            />
            <circle
              cx={FLOW_PATHS.bizToStudio.to[0]}
              cy={FLOW_PATHS.bizToStudio.to[1]}
              r="2.4"
              fill="var(--accent)"
            />

            {/* Inactive bracket branches first (so active branch draws cleanly on top) */}
            {FLOW_PATHS.studioToOutputs.map((route, idx) => {
              if (activeIdx === idx) return null;
              return (
                <g key={`flow-branch-inactive-${idx}`}>
                  <Line d={route.d} tone="lo" />
                  <circle
                    cx={route.to[0]}
                    cy={route.to[1]}
                    r="1.8"
                    fill="var(--anatomy-lo)"
                  />
                </g>
              );
            })}

            {/* Active bracket branch on top */}
            <g key={`flow-branch-active-${activeIdx}`}>
              <path
                d={activeOutputPath}
                stroke="var(--accent)"
                strokeWidth="2.1"
                fill="none"
                strokeLinecap="round"
              />
              <circle
                cx={activeOutputRoute.to[0]}
                cy={activeOutputRoute.to[1]}
                r="2.8"
                fill="var(--accent)"
              />
            </g>

            {/* Single unified origin node on Asymmetric where the 3 branches split */}
            <circle
              cx={FLOW_PATHS.outputOrigin[0]}
              cy={FLOW_PATHS.outputOrigin[1]}
              r="3"
              fill="var(--accent)"
            />
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: BLOQUE 1 - TU NEGOCIO (STOREFRONT / TIENDA)     */}
          {/* ======================================================== */}
          <g id="iso-block-business">
            <path className="iso-halo" d={BUSINESS_ART.halo} />

            {/* Tiled Sidewalk Base */}
            <Solid paths={BUSINESS_ART.sidewalk} tone="mid" crease="faint" />
            <Line d={BUSINESS_ART.tileLines} tone="faint" />

            {/* Main Rectangular Shop Building */}
            <Solid paths={BUSINESS_ART.body} tone="hi" crease="lo" lit />

            {/* Storefront Windows & Door under Awning (+X face) */}
            <Line d={BUSINESS_ART.leftWindow} tone="mid" />
            <Line d={BUSINESS_ART.doorFrame} tone="mid" />
            <Line d={BUSINESS_ART.doorGlass} tone="lo" />
            <Line d={BUSINESS_ART.doorHandle} tone="accent" />
            <Line d={BUSINESS_ART.shopWindowOuter} tone="mid" />
            <Line d={BUSINESS_ART.shopWindowGrid} tone="lo" />

            {/* Side Wall Window & Banner (+Y face) */}
            <Line d={BUSINESS_ART.sideWindow} tone="mid" />
            <Line d={BUSINESS_ART.sideWindowMullions} tone="lo" />
            <Line d={BUSINESS_ART.sideBanner} tone="mid" />
            <Line d={BUSINESS_ART.sideBannerLine} tone="accent" />

            {/* Roof Cornice Moldings & Recessed Parapet Roof */}
            <Solid paths={BUSINESS_ART.corniceLower} tone="mid" crease="faint" />
            <Solid paths={BUSINESS_ART.corniceUpper} tone="hi" crease="lo" />
            <Solid paths={BUSINESS_ART.parapet} tone="mid" crease="lo" />
            <Line d={BUSINESS_ART.roofRecessFloor} tone="faint" />
            <Line d={BUSINESS_ART.roofRecessInner} tone="lo" />

            {/* Sloped Striped Storefront Awning (Toldo inclinado) */}
            <g className="iso-solid" data-lit="">
              <path className="iso-top" d={BUSINESS_ART.awningSlopeTop} />
              <path
                className="iso-shade"
                data-shade="1"
                d={BUSINESS_ART.awningValance}
              />
              <path
                className="iso-shade"
                data-shade="0"
                d={BUSINESS_ART.awningSideRight}
              />
              {/* Alternating accent stripes on the sloped awning */}
              <path
                d={BUSINESS_ART.awningStripeFills}
                fill="var(--accent)"
                fillOpacity="0.45"
              />
              <Line d={BUSINESS_ART.awningStripeLines} tone="mid" />
              <Line d={BUSINESS_ART.awningOutline} tone="hi" />
            </g>

            {/* Potted Shrub / Tree at front corner of sidewalk */}
            <Solid paths={BUSINESS_ART.planterPot} tone="mid" crease="faint" />
            <Solid paths={BUSINESS_ART.bushLower} tone="hi" crease="lo" />
            <Solid paths={BUSINESS_ART.bushUpper} tone="hi" crease="faint" lit />
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: BLOQUE 2 - ASYMMETRIC (EMPRESA / EQUIPO TECH)   */}
          {/* ======================================================== */}
          <g id="iso-block-studio">
            <path className="iso-halo" d={STUDIO_ART.halo} />

            {/* Plinth Base */}
            <Solid paths={STUDIO_ART.plinth} tone="mid" crease="faint" />

            {/* Two-Story Modern Tech Headquarters */}
            <Solid paths={STUDIO_ART.lowerBody} tone="mid" crease="lo" />
            <Line d={STUDIO_ART.lowerWindow} tone="mid" />
            <Line d={STUDIO_ART.sideLowerWindow} tone="lo" />

            <Solid paths={STUDIO_ART.fasciaBand} tone="hi" crease="lo" lit />

            <Solid paths={STUDIO_ART.upperBody} tone="mid" crease="lo" />
            <Line d={STUDIO_ART.upperWindow} tone="mid" />
            <Line d={STUDIO_ART.sideUpperWindow} tone="lo" />
            <Line d={STUDIO_ART.mullions} tone="faint" />

            <Solid paths={STUDIO_ART.roofCap} tone="hi" crease="lo" />
            <Line d={STUDIO_ART.roofInset} tone="lo" />

            {/* Rooftop Server & Comms Module */}
            <Solid paths={STUDIO_ART.serverHub} tone="mid" crease="faint" />
            <Solid paths={STUDIO_ART.antennaMast} tone="hi" crease="none" />
            <Line d={STUDIO_ART.antennaRing} tone="mid" />
            <circle
              cx={STUDIO_ART.antennaTip[0]}
              cy={STUDIO_ART.antennaTip[1]}
              r="2.4"
              fill="var(--accent)"
            />

            {/* Asymmetric Facade Brand Plaque */}
            <Solid paths={STUDIO_ART.brandPlaque} tone="hi" crease="faint" lit />
            <circle
              cx={STUDIO_ART.brandAccentDot[0]}
              cy={STUDIO_ART.brandAccentDot[1]}
              r="2"
              fill="var(--accent)"
            />
            <Line d={STUDIO_ART.brandLine} tone="hi" />
          </g>

          {/* ======================================================== */}
          {/* LAYER 4: BLOQUE 3 - LOS 3 RESULTADOS (CLICKABLES)        */}
          {/* ======================================================== */}

          {/* -------------------------------------------------------- */}
          {/* 01. SITIOS & SISTEMAS WEB -> PC CON WEB ABIERTA          */}
          {/* -------------------------------------------------------- */}
          <g
            id="iso-out-web"
            className="cursor-pointer group focus:outline-none"
            role="button"
            tabIndex={0}
            aria-label="Seleccionar 01. Sitios & Sistemas Web"
            onClick={() => onSelect(0)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(0);
              }
            }}
          >
            <path className="iso-halo" d={PC_ART.halo} />
            <Solid
              paths={PC_ART.pad}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="faint"
            />

            {/* Stand Base & Neck */}
            <Solid
              paths={PC_ART.standBase}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="faint"
            />
            <Solid
              paths={PC_ART.standNeck}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="none"
            />

            {/* Widescreen Desktop Monitor */}
            <Solid
              paths={PC_ART.monitorBody}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="lo"
              lit={activeIdx === 0}
            />

            {/* Open Web Browser on Screen */}
            <Line
              d={PC_ART.screenBezel}
              tone={activeIdx === 0 ? "accent" : "mid"}
            />
            <Line
              d={PC_ART.browserBarLine}
              tone={activeIdx === 0 ? "mid" : "lo"}
            />
            <Dots
              points={PC_ART.windowDots}
              size={0.65}
              tone={activeIdx === 0 ? "hi" : "mid"}
            />
            <Line
              d={PC_ART.addressBar}
              tone={activeIdx === 0 ? "mid" : "lo"}
            />
            <Line
              d={PC_ART.webHeroBox}
              tone={activeIdx === 0 ? "accent" : "lo"}
            />
            <Line
              d={PC_ART.webHeroLines}
              tone={activeIdx === 0 ? "hi" : "lo"}
            />
            <Line
              d={PC_ART.webCards}
              tone={activeIdx === 0 ? "accent" : "lo"}
            />

            {/* Keyboard & Mouse in front of Monitor */}
            <Solid
              paths={PC_ART.keyboard}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="faint"
              lit={activeIdx === 0}
            />
            <Line
              d={PC_ART.keyboardKeys}
              tone={activeIdx === 0 ? "mid" : "lo"}
            />
            <Solid
              paths={PC_ART.mouse}
              tone={activeIdx === 0 ? "hi" : "mid"}
              crease="faint"
            />
          </g>

          {/* -------------------------------------------------------- */}
          {/* 02. APPS PARA CELULARES -> UN CELULAR SMARTPHONE         */}
          {/* -------------------------------------------------------- */}
          <g
            id="iso-out-phone"
            className="cursor-pointer group focus:outline-none"
            role="button"
            tabIndex={0}
            aria-label="Seleccionar 02. Apps para Celulares"
            onClick={() => onSelect(1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(1);
              }
            }}
          >
            <path className="iso-halo" d={PHONE_ART.halo} />
            <Solid
              paths={PHONE_ART.pad}
              tone={activeIdx === 1 ? "hi" : "mid"}
              crease="faint"
            />

            {/* Charging Dock */}
            <Solid
              paths={PHONE_ART.dock}
              tone={activeIdx === 1 ? "hi" : "mid"}
              crease="faint"
            />

            {/* Smartphone Body */}
            <Solid
              paths={PHONE_ART.phoneBody}
              tone={activeIdx === 1 ? "hi" : "mid"}
              crease="lo"
              lit={activeIdx === 1}
            />

            {/* Smartphone Screen & Mobile App UI */}
            <Line
              d={PHONE_ART.screenBezel}
              tone={activeIdx === 1 ? "accent" : "mid"}
            />
            <Line
              d={PHONE_ART.dynamicIsland}
              tone={activeIdx === 1 ? "hi" : "mid"}
            />
            <Line
              d={PHONE_ART.appHeader}
              tone={activeIdx === 1 ? "mid" : "lo"}
            />
            <Line
              d={PHONE_ART.appHeroCard}
              tone={activeIdx === 1 ? "accent" : "lo"}
            />
            <Line
              d={PHONE_ART.appHeroLines}
              tone={activeIdx === 1 ? "hi" : "lo"}
            />
            <Line
              d={PHONE_ART.appListCards}
              tone={activeIdx === 1 ? "accent" : "lo"}
            />
            <Line
              d={PHONE_ART.homeIndicator}
              tone={activeIdx === 1 ? "hi" : "mid"}
            />
          </g>

          {/* -------------------------------------------------------- */}
          {/* 03. AUTOMATIZACIÓN & IA -> ENGRANAJES MECÁNICOS          */}
          {/* -------------------------------------------------------- */}
          <g
            id="iso-out-gears"
            className="cursor-pointer group focus:outline-none"
            role="button"
            tabIndex={0}
            aria-label="Seleccionar 03. Automatización & IA"
            onClick={() => onSelect(2)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(2);
              }
            }}
          >
            <path className="iso-halo" d={GEARS_ART.halo} />
            <Solid
              paths={GEARS_ART.pad}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="faint"
            />
            <Line
              d={GEARS_ART.circuitTraces}
              tone={activeIdx === 2 ? "accent" : "lo"}
            />

            {/* Large Primary 3D Cogwheel */}
            <Solid
              paths={GEARS_ART.mainGear}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="lo"
              lit={activeIdx === 2}
            />
            <Solid
              paths={GEARS_ART.mainHub}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="faint"
            />
            <Line
              d={GEARS_ART.mainHubRing}
              tone={activeIdx === 2 ? "accent" : "lo"}
            />
            <Solid
              paths={GEARS_ART.mainAxle}
              tone="hi"
              crease="none"
              lit={activeIdx === 2}
            />

            {/* Secondary Interlocking 3D Cogwheel */}
            <Solid
              paths={GEARS_ART.secGear}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="lo"
              lit={activeIdx === 2}
            />
            <Solid
              paths={GEARS_ART.secHub}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="faint"
            />
            <Solid
              paths={GEARS_ART.secAxle}
              tone="hi"
              crease="none"
            />

            {/* Automation Servo Actuator Block */}
            <Solid
              paths={GEARS_ART.servoMotor}
              tone={activeIdx === 2 ? "hi" : "mid"}
              crease="faint"
            />
            <Line
              d={GEARS_ART.servoTopRing}
              tone={activeIdx === 2 ? "accent" : "lo"}
            />
            <circle
              cx={GEARS_ART.servoBeacon[0]}
              cy={GEARS_ART.servoBeacon[1]}
              r="2.2"
              fill={activeIdx === 2 ? "var(--accent)" : "var(--anatomy-mid)"}
            />
          </g>

          {/* ======================================================== */}
          {/* LAYER 5: BOLITA VERDE ANIMADA (SOLO LADO DERECHO)        */}
          {/* ======================================================== */}
          <g id="iso-flow-pulses" className="pointer-events-none">
            {/* Animated green ball ONLY from Asymmetric -> Resultado Activo */}
            <g key={`pulse-branch-${activeIdx}`}>
              <circle r="6.5" fill="var(--accent)" opacity="0.3">
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  path={activeOutputPath}
                />
              </circle>
              <circle r="3.6" fill="var(--accent)">
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  path={activeOutputPath}
                />
              </circle>
            </g>
          </g>

          {/* ======================================================== */}
          {/* LAYER 6: TOP-LEVEL LABELS (NEVER OCCLUDED BY 3D SOLIDS)  */}
          {/* ======================================================== */}
          <g id="iso-top-labels">
            {/* Label: TU NEGOCIO */}
            <g
              transform={`translate(${BUSINESS_ART.labelPos[0]}, ${BUSINESS_ART.labelPos[1]})`}
            >
              <rect
                x="-44"
                y="-9"
                width="88"
                height="17"
                className="fill-background stroke-border-subtle"
                strokeWidth="1"
              />
              <circle cx="-34" cy="-0.5" r="2.5" fill="var(--accent)" />
              <text
                x="4"
                y="3"
                textAnchor="middle"
                className="fill-foreground font-mono font-bold text-[9px] tracking-wider uppercase"
              >
                TU NEGOCIO
              </text>
            </g>

            {/* Label: ASYMMETRIC */}
            <g
              transform={`translate(${STUDIO_ART.labelPos[0]}, ${STUDIO_ART.labelPos[1]})`}
            >
              <rect
                x="-46"
                y="-9"
                width="92"
                height="17"
                className="fill-surface-contrast stroke-foreground"
                strokeWidth="1"
              />
              <circle cx="-35" cy="-0.5" r="2.5" fill="var(--accent)" />
              <text
                x="5"
                y="3"
                textAnchor="middle"
                className="fill-background font-mono font-bold text-[9px] tracking-wider uppercase"
              >
                ASYMMETRIC
              </text>
            </g>

            {/* Label: 01. SITIOS & WEB (shifted right, clickable) */}
            <g
              transform={`translate(${PC_ART.labelPos[0]}, ${PC_ART.labelPos[1]})`}
              className="cursor-pointer group"
              onClick={() => onSelect(0)}
            >
              <rect
                x="-48"
                y="-9"
                width="96"
                height="17"
                className={
                  activeIdx === 0
                    ? "fill-accent stroke-foreground"
                    : "fill-background stroke-border-subtle group-hover:stroke-foreground"
                }
                strokeWidth="1"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                className={
                  activeIdx === 0
                    ? "fill-accent-foreground font-mono font-bold text-[8.5px] tracking-wider uppercase"
                    : "fill-foreground font-mono font-semibold text-[8.5px] tracking-wider uppercase"
                }
              >
                01. SITIOS &amp; WEB
              </text>
            </g>

            {/* Label: 02. APPS MÓVILES (shifted right, clickable) */}
            <g
              transform={`translate(${PHONE_ART.labelPos[0]}, ${PHONE_ART.labelPos[1]})`}
              className="cursor-pointer group"
              onClick={() => onSelect(1)}
            >
              <rect
                x="-48"
                y="-9"
                width="96"
                height="17"
                className={
                  activeIdx === 1
                    ? "fill-accent stroke-foreground"
                    : "fill-background stroke-border-subtle group-hover:stroke-foreground"
                }
                strokeWidth="1"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                className={
                  activeIdx === 1
                    ? "fill-accent-foreground font-mono font-bold text-[8.5px] tracking-wider uppercase"
                    : "fill-foreground font-mono font-semibold text-[8.5px] tracking-wider uppercase"
                }
              >
                02. APPS MÓVILES
              </text>
            </g>

            {/* Label: 03. AUTOMATIZACIÓN (shifted right, clickable) */}
            <g
              transform={`translate(${GEARS_ART.labelPos[0]}, ${GEARS_ART.labelPos[1]})`}
              className="cursor-pointer group"
              onClick={() => onSelect(2)}
            >
              <rect
                x="-54"
                y="-9"
                width="108"
                height="17"
                className={
                  activeIdx === 2
                    ? "fill-accent stroke-foreground"
                    : "fill-background stroke-border-subtle group-hover:stroke-foreground"
                }
                strokeWidth="1"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                className={
                  activeIdx === 2
                    ? "fill-accent-foreground font-mono font-bold text-[8.5px] tracking-wider uppercase"
                    : "fill-foreground font-mono font-semibold text-[8.5px] tracking-wider uppercase"
                }
              >
                03. AUTOMATIZACIÓN
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
