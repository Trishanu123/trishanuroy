import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

interface StarsProps {
  count?: number;
  radius?: number;
  speed?: number;
}

const Stars = ({ count = 7000, radius = 1.5, speed = 1 }: StarsProps) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(count), { radius })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * (0.1 * speed);
      ref.current.rotation.y -= delta * (0.15 * speed);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#4c9fff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          fog={true}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ 
          background: 'transparent',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas; 