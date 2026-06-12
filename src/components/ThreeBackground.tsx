"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function LedTube() {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 80; i++) {
      const t = i / 80;
      pts.push(
        new THREE.Vector3(
          Math.sin(t * Math.PI * 4) * 3.2 + Math.cos(t * Math.PI * 2) * 1.4,
          (t - 0.5) * 9,
          Math.cos(t * Math.PI * 3) * 2 - 1,
        ),
      );
    }
    return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
  }, []);

  const curve2 = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 60; i++) {
      const t = i / 60;
      pts.push(
        new THREE.Vector3(
          Math.cos(t * Math.PI * 3) * 2.4,
          (t - 0.5) * 7,
          Math.sin(t * Math.PI * 5) * 2.5 + 1.5,
        ),
      );
    }
    return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
  }, []);

  // --- DER NEUE SOFT-BLUR AUFBAU ---
  // Wir machen die Geometrien extrem dick (bis zu Radius 2.8), entfernen den harten Kern 
  // und schichten sie wie Zwiebeln übereinander, um den weichen Farbverlauf zu kreieren.
  
  const geom1_1 = useMemo(() => new THREE.TubeGeometry(curve, 100, 0.4, 12, false), [curve]);
  const geom1_2 = useMemo(() => new THREE.TubeGeometry(curve, 100, 1.0, 12, false), [curve]);
  const geom1_3 = useMemo(() => new THREE.TubeGeometry(curve, 100, 1.8, 12, false), [curve]);
  const geom1_4 = useMemo(() => new THREE.TubeGeometry(curve, 100, 2.8, 12, false), [curve]);

  const geom2_1 = useMemo(() => new THREE.TubeGeometry(curve2, 100, 0.3, 12, false), [curve2]);
  const geom2_2 = useMemo(() => new THREE.TubeGeometry(curve2, 100, 0.8, 12, false), [curve2]);
  const geom2_3 = useMemo(() => new THREE.TubeGeometry(curve2, 100, 1.5, 12, false), [curve2]);
  const geom2_4 = useMemo(() => new THREE.TubeGeometry(curve2, 100, 2.5, 12, false), [curve2]);

  // Sattere, minimal dunklere Töne (Karamell/Beige-Gold), damit sie auf dem hellen Hintergrund gut sichtbar sind
  const color1 = "#c29b62";
  const color2 = "#d4b383";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group1Ref.current) {
      group1Ref.current.rotation.y = t * 0.03;
      group1Ref.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.y = -t * 0.02;
      group2Ref.current.rotation.z = Math.cos(t * 0.015) * 0.08;
    }
  });

  // WICHTIG: Kein AdditiveBlending mehr! Wir nutzen Standard-Transparenz, 
  // damit es wie eine rauchige, weiche Farbe wirkt und nicht wie Licht.
  return (
    <>
      <group ref={group1Ref}>
        <mesh geometry={geom1_1}><meshBasicMaterial color={color1} transparent opacity={0.25} depthWrite={false} /></mesh>
        <mesh geometry={geom1_2}><meshBasicMaterial color={color1} transparent opacity={0.12} depthWrite={false} /></mesh>
        <mesh geometry={geom1_3}><meshBasicMaterial color={color1} transparent opacity={0.06} depthWrite={false} /></mesh>
        <mesh geometry={geom1_4}><meshBasicMaterial color={color1} transparent opacity={0.02} depthWrite={false} /></mesh>
      </group>

      <group ref={group2Ref}>
        <mesh geometry={geom2_1}><meshBasicMaterial color={color2} transparent opacity={0.20} depthWrite={false} /></mesh>
        <mesh geometry={geom2_2}><meshBasicMaterial color={color2} transparent opacity={0.10} depthWrite={false} /></mesh>
        <mesh geometry={geom2_3}><meshBasicMaterial color={color2} transparent opacity={0.05} depthWrite={false} /></mesh>
        <mesh geometry={geom2_4}><meshBasicMaterial color={color2} transparent opacity={0.02} depthWrite={false} /></mesh>
      </group>
    </>
  );
}

export function ThreeBackground() {
  return (
    <div
      aria-hidden
      // Volle Opacity im Container, da die Transparenz jetzt perfekt im 3D-Material geregelt ist
      className="pointer-events-none fixed inset-0 z-0 opacity-100"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <LedTube />
      </Canvas>
    </div>
  );
}