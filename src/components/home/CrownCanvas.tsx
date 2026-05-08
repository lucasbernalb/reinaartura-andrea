'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CrownCanvasProps {
  width?: number;
  height?: number;
}

export default function CrownCanvas({ width = 180, height = 180 }: CrownCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    console.log('[CrownCanvas] Iniciando...');

    // Variables declaradas fuera del try para que el cleanup pueda accederlas
    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number | null = null;
    let cubeRenderTarget: THREE.WebGLCubeRenderTarget | null = null;
    let baseGeo: THREE.CylinderGeometry | null = null;
    let coneGeo: THREE.ConeGeometry | null = null;
    let pearlGeo: THREE.SphereGeometry | null = null;
    let material: THREE.MeshPhysicalMaterial | null = null;
    let crown: THREE.Group | null = null;
    let scene: THREE.Scene | null = null;

    try {
      // 1. ESCENA
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111111); // Gris oscuro para verificar

      // 2. CÁMARA
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.set(0, 1.5, 3.5);
      camera.lookAt(0, 0.2, 0);

      // 3. RENDERER
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        // Sin alpha para ver el canvas
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);

      // 4. ENVIRONMENT MAP (crítico para materiales metálicos)
      cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
      });
      const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);

      const envScene = new THREE.Scene();
      envScene.background = new THREE.Color(0xff00ff); // Rosa neón
      const envLight = new THREE.AmbientLight(0xffffff, 2);
      envScene.add(envLight);
      
      cubeCamera.position.set(0, 0, 0);
      cubeCamera.update(renderer, envScene);

      // 5. CORONA
      crown = new THREE.Group();

      // MATERIAL: Rosa neón brillante
      material = new THREE.MeshPhysicalMaterial({
        color: 0xff00ff,           // Rosa neón (HOT PINK)
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        emissive: 0xff00ff,
        emissiveIntensity: 0.5,
        envMap: cubeRenderTarget.texture,
        envMapIntensity: 2.0,
      });

      // Base
      baseGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.5, 32);
      const base = new THREE.Mesh(baseGeo, material);
      base.position.y = 0;
      crown.add(base);

      // 5 puntas
      const numPoints = 5;
      coneGeo = new THREE.ConeGeometry(0.25, 1.0, 8);
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const cone = new THREE.Mesh(coneGeo, material);
        cone.position.x = Math.cos(angle) * 1.0;
        cone.position.z = Math.sin(angle) * 1.0;
        cone.position.y = 0.75;
        crown.add(cone);
      }

      // Perlas
      pearlGeo = new THREE.SphereGeometry(0.12, 16, 16);
      for (let i = 0; i < numPoints; i++) {
        const angle = ((i + 0.5) / numPoints) * Math.PI * 2;
        const pearl = new THREE.Mesh(pearlGeo, material);
        pearl.position.x = Math.cos(angle) * 1.0;
        pearl.position.z = Math.sin(angle) * 1.0;
        pearl.position.y = 0.3;
        crown.add(pearl);
      }

      // 6. LUCES (tus especificaciones)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const mainLight = new THREE.PointLight(0xffffff, 2, 10);
      mainLight.position.set(2, 3, 2);
      scene.add(mainLight);

      const fillLight = new THREE.PointLight(0xc084fc, 1, 10);
      fillLight.position.set(-2, 1, -1);
      scene.add(fillLight);

      const rimLight = new THREE.PointLight(0xe879f9, 0.8, 10);
      rimLight.position.set(0, -2, 2);
      scene.add(rimLight);

      scene.add(crown);
      console.log('[CrownCanvas] Escena lista, animando...');

      // 7. ANIMACIÓN
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (crown) {
          crown.rotation.y += 0.008;
          crown.position.y = Math.sin(Date.now() * 0.001) * 0.05;
        }
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };
      animate();

      // 8. CLEANUP
      return () => {
        console.log('[CrownCanvas] Cleanup');
        if (animationId) cancelAnimationFrame(animationId);
        
        if (container.contains(renderer!.domElement)) {
          container.removeChild(renderer!.domElement);
        }
        
        // Dispose en orden correcto
        if (cubeRenderTarget) cubeRenderTarget.dispose();
        if (baseGeo) baseGeo.dispose();
        if (coneGeo) coneGeo.dispose();
        if (pearlGeo) pearlGeo.dispose();
        if (material) material.dispose();
        if (renderer) renderer.dispose();
        
        if (scene) {
          scene.remove(crown!);
          scene.remove(ambientLight);
          scene.remove(mainLight);
          scene.remove(fillLight);
          scene.remove(rimLight);
        }
      };
    } catch (error) {
      console.error('[CrownCanvas] ERROR CRÍTICO:', error);
    }
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: '3px solid lime',
        pointerEvents: 'none' as const,
      }}
    />
  );
}
