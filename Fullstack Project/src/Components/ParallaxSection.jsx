// ParallaxSection.jsx
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSection = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {/* First Component with Parallax */}
      <Parallax y={[-20, 20]}>
        <div style={{ height: '100vh', background: ' ', textAlign: 'center', paddingTop: '50px' }}>
          <h1>First Component</h1>
        </div>
      </Parallax>

      {/* Second Component with Parallax Background */}
      <Parallax y={[20, -20]}>
        <div style={{ height: '100vh', background: ' ', backgroundSize: 'cover', textAlign: 'center', paddingTop: '50px' }}>
          <h1>Second Component</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
