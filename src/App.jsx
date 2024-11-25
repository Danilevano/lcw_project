import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls, Text } from '@react-three/drei';
import { Lcw } from './components/lcw.jsx'
import './App.css';


const App = () => {
  return (
    <div className="container">
      <div className="canvas-container">
        <Canvas shadows camera={{position: [-12,8,7], fov:30 }}>
          <ScrollControls pages={4}> 
            <OrbitControls 
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}/>
            
            <ambientLight intensity={0.9} />

            <directionalLight
              position={[-5, 10, -1]}
              intensity={5}
              color="white"
              castShadow
            />

            <directionalLight
              position={[5, 10, 1]}
              intensity={5}
              color="white" 
            />

            <Lcw 
              position={[-1,0,0]}
              scale={0.5}
              />

            
            
            {/* Texto descriptivo dentro del plano */}
            <Text 
              position={[-1, 0, -3]} 
              fontSize={0.5} 
              color="grey" 
              anchorX="center" 
              anchorY="middle" 
              maxWidth={4} // Ajusta el ancho del texto
              rotation={[Math.PI/-2, 0, 0 ]} // Ajuste para rotar el texto
            >
              Scroll Down
            </Text>

            <Text 
              position={[-1, 0, 3]} 
              fontSize={0.2} 
              color="grey" 
              anchorX="center" 
              anchorY="middle" 
              maxWidth={4} // Ajusta el ancho del texto
              rotation={[Math.PI/-2, 0, 0 ]} // Ajuste para rotar el texto
            >
              Made by Daniel Levano with ❤
            </Text>

            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="white" />
              <shadowMaterial opacity={0.3} />
            </mesh>
            </ScrollControls>
        </Canvas>
        </div>
        <div className="description-container">
        <h2>Eames LCW</h2>
        <p>
        By 1945, when the Eames Molded Plywood Group was introduced to potential distribution partners, and 1946, when the Eames LCW (Lounge Chair Wood) was introduced to the public in a rather grand way, at the Museum of Modern Art, Charles and Ray had many years of plywood experience under their belt. Charles had used plywood for the Kleinhans Auditorium, the Crow Island School chairs, and the Organic Design competition chairs. Charles and Ray co-designed the Eames Leg Splint, molded of plywood with the compound curves characteristic of what they then called the “Eames process,” which was patented
        </p>
        <p>
        The Eames LCW is lightweight, and the parts were susceptible to mass production, using the “Eames process,” by which the actual sheets of plywood were formed at the same time as the compound curves were imposed. Using a homemade device, Charles and Ray called the “Kazaam” machine (referencing stage magicians, who put one object in a box and pull out a distinctly different one, Ala Kazaam!), perfected molding in their own residential apartment on Strathmore Avenue in West Los Angeles. The first plywood pieces got their shape from balloons, which Charles and Ray filled with air supplied by a bicycle pump! 
        </p>
        <p>
        With the important experience of the war years behind them, Charles and Ray pushed harder than ever. If there were a way to make a single-piece shell of molded plywood in complex curves, the Eames Office would find it. The office began working toward introducing the furniture at a December 1945 show at the Barclay Hotel, where the Eames LCW made its debut.
        </p>
        <p>
        Charles and Ray and the office staff were pushing—and pushing—the limits of the material. What was the honest use of molded plywood? Could it be a single-piece shell in complex curves? The cast of characters for the Barclay Hotel show was beginning to take shape in Charles’s mind, but the headliners (meaning the single-piece shells) were not ready. Legs developed that used curved wood. Three-legged chairs with metal legs, case goods, and tables, but always the frustration of the shell. Each time a split was necessary to make the curve work.
        </p>
        <p>
        In the end, they abandoned the idea of a single-piece shell and instead broke it into two parts: a seat and a back. They had finally uncovered the honest use of molded plywood. The Eames LCW, the chair that resulted in 1945, is now an icon of American design.
        </p>
        <p>
          From eamesoffice.com
        </p>
      </div>
    </div>
  );
};

export default App;
