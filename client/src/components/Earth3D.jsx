import Globe from "react-globe.gl";
import { useEffect, useRef, useState } from "react";
import "../style/Earth3D.css";
import { useNavigate } from "react-router-dom";

const Earth3D = () => {
  const globeRef = useRef();
  const containerRef = useRef();

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const navigate = useNavigate();

  useEffect(() => {
    const globe = globeRef.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.pointOfView({ altitude: 2.2 }, 0);

    // 🔁 Resize handler
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="earth-container" ref={containerRef}>
      <Globe
        ref={globeRef}
        width={size.width}
        height={size.height}

        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"

        atmosphereColor="#3a228a"
        atmosphereAltitude={0.35}

        backgroundColor="#000000"
        // backgroundImageUrl={bck}
      />

      <div className="earth-ui">
        <button className="earth-btn" onClick={() => navigate("/map")} >Explore World</button>
      </div>
    </div>
  );
};

export default Earth3D;
