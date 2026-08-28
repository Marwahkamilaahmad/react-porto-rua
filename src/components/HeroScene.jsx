import { useEffect, useRef } from "react";

/* ── Studio Scene: rotating wireframe icosahedron + orbital rings ────────
     Konsep berbeda dari referensi (panels falling) — ini sculpture geometris
     abstrak yang berputar, seperti artefak studio/arsitektur.
     Palette: ink/amber, opacity rendah, halus, tidak mencolok.
     three.js di-load via dynamic import → chunk terpisah (lazy).
   ──────────────────────────────────────────────────────────────────────── */

const MOUSE_SENSITIVITY = 0.002;
const RING_COUNT = 3;

function makeRings(THREE) {
  const rings = [];
  for (let i = 0; i < RING_COUNT; i++) {
    const radius = 2.2 + i * 0.6;
    const geo = new THREE.TorusGeometry(radius, 0.012, 16, 64);
    const dark = i % 2 === 0;
    const mat = new THREE.MeshBasicMaterial({
      color: dark ? "#57534e" : "#b45309",
      transparent: true,
      opacity: dark ? 0.2 : 0.1,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    const axis = new THREE.Vector3(
      Math.sin((i * Math.PI) / RING_COUNT),
      Math.cos((i * Math.PI) / RING_COUNT),
      Math.sin((i * Math.PI * 0.7) / RING_COUNT)
    ).normalize();
    const speed = 0.15 + i * 0.04;
    const phase = (i * Math.PI * 2) / RING_COUNT;
    rings.push({ mesh, axis, speed, phase });
  }
  return rings;
}

export default function HeroScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let renderer = null;
    let camera = null;
    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;

    // ── Lazy-load three.js ─────────────────────────────────────────────────
    const loadPromise = import("three").then((THREE) => {
      if (disposed) return;

      // Scene
      const scene = new THREE.Scene();

      // Kamera
      camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        20
      );
      camera.position.set(0, 0.2, 5.8);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // ── Sculpture: icosahedron wireframe + vertex points ──
      const icoGeo = new THREE.IcosahedronGeometry(1.6, 0);
      const edges = new THREE.EdgesGeometry(icoGeo);
      const icoLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: "#57534e",
          transparent: true,
          opacity: 0.42,
        })
      );
      icoLine.position.set(-1.1, 0.15, 0);
      scene.add(icoLine);

      const ptMesh = new THREE.Points(
        icoGeo,
        new THREE.PointsMaterial({
          color: "#b45309",
          size: 0.07,
          transparent: true,
          opacity: 0.6,
        })
      );
      ptMesh.position.copy(icoLine.position);
      scene.add(ptMesh);

      // ── Floor grid (perspektif studio/arsitektur) ──
      const grid = new THREE.GridHelper(9, 18, "#57534e", "#57534e");
      grid.position.set(-0.4, -2.1, 0);
      grid.material.transparent = true;
      grid.material.opacity = 0.22;
      scene.add(grid);

      // Orbital rings
      const rings = makeRings(THREE);
      rings.forEach((r) => {
        r.mesh.position.set(-1.1, 0.15, 0);
        scene.add(r.mesh);
      });

      // Background dust
      const particleCount = 50;
      const ptPos = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        ptPos[i] = (Math.random() - 0.5) * 12;
      }
      const ptGeo2 = new THREE.BufferGeometry();
      ptGeo2.setAttribute("position", new THREE.BufferAttribute(ptPos, 3));
      scene.add(
        new THREE.Points(
          ptGeo2,
          new THREE.PointsMaterial({
            color: "#57534e",
            size: 0.014,
            transparent: true,
            opacity: 0.18,
          })
        )
      );

      // ── Animation ──────────────────────────────────────────────────────
      const clock = new THREE.Clock();

      function animate() {
        if (disposed) return;
        const dt = clock.getDelta();
        const t = clock.getElapsedTime();

        const tx = mouseY * MOUSE_SENSITIVITY;
        const ty = mouseX * MOUSE_SENSITIVITY * 0.6;
        icoLine.rotation.x += (dt * 0.18 + tx * dt * 0.8 - icoLine.rotation.x) * Math.min(dt * 2, 1);
        icoLine.rotation.y += (dt * 0.22 + ty * dt * 0.8 - icoLine.rotation.y) * Math.min(dt * 2, 1);
        ptMesh.rotation.copy(icoLine.rotation);

        rings.forEach((r) => {
          r.mesh.quaternion.setFromAxisAngle(r.axis, t * r.speed + r.phase);
        });

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      }
      animate();
    });

    // ── Mouse parallax ────────────────────────────────────────────────────
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      if (!rect.width) return;
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    document.addEventListener("mousemove", onMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (camera && renderer) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      disposed = true;
      document.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0,
        animation: "heroSceneFadeIn 2s ease 0.2s forwards",
      }}
      aria-hidden="true"
    />
  );
}