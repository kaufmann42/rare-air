/* eslint-disable jsx-a11y/alt-text */
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Canvas,
  MeshBasicMaterialProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  useVideoTexture,
  useTexture,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";
import { Mesh, BufferGeometry, Material } from "three";

const GOLDENRATIO = 1.61803398875;

interface IImage {
  position: THREE.Vector3;
  rotation: number[];
  url: string;
}

export const Carousel = ({ images }: { images: IImage[] }) => {
  return (
    <section className="h-screen w-screen">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0, 20] }}>
        <fog attach="fog" args={["#191920", 0, 15]} />
        <Text
          maxWidth={0.9}
          position={[0, 2.5, 0]}
          textAlign="center"
          scale={[10, 10, 10]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Turn Your Audience Into SuperFans.
        </Text>
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              mirror={1}
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
        <Environment preset="studio" />
      </Canvas>
    </section>
  );
};

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}: {
  images: IImage[];
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}) {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D<THREE.Event>>();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current?.getObjectByName(params?.id || "/");
    if (clicked.current?.parent) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 1, 6.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt, 50);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt, 50);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(
        (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function VideoMaterial({
  url,
  ...props
}: MeshBasicMaterialProps & { url: string }) {
  const texture = useVideoTexture(url, {});
  return <meshBasicMaterial {...props} map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function Frame({
  url,
  c = new THREE.Color(),
  ...props
}: {
  url: string;
  c?: THREE.Color;
}) {
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <Suspense fallback={<FallbackMaterial url="assets/imac.png" />}>
          <VideoMaterial url="assets/video.mov" />
        </Suspense>
      </mesh>
    </group>
  );
}
