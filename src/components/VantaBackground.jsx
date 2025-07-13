import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 5.0,
         backgroundColor: 0x000000, // ✅ Must be set here first...
        backgroundAlpha: 0.0,  
        color1: 0xffffff,
        color2: 0xff0000,
        quantity: 3,
        alignment: 10.0 ,
        cohesion: 10.0, 
        separation: 20.0,
      })
      );
    }


    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '98vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -5,
      }}
    />
  );
};

export default VantaBackground;
