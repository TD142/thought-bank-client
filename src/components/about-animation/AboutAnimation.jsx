import { MeshDistortMaterial } from "@react-three/drei";

const AboutAnimation = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[0.5, 1, 0]}>
      <sphereGeometry args={[3, 60, 60]} />
      <MeshDistortMaterial
        wireframe={true}
        color={"lightblue"}
        distort={1.3}
        speed={0.9}
      />
    </mesh>
  );
};

export default AboutAnimation;
