import { motion } from "framer-motion";

export default function Infinity() {
    let dots = [];
    let dots2 = [];
     for(let r=7.8,b=0.01,n=1 ; n <= 25 ; n++,r = r-0.2,b = b+0.02 ){
        console.log(r,b,n);
        dots2.push(
        <circle
        key={n}
          r={r}
          fill="#ca7affff"
          opacity={0.3}
          className="drop-shadow-[0_0_8px_#ca7affff]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin={b}>
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        )
    };
    for(let r=7.8,b=1.1,n=1 ; n <= 25 ; n++,r = r-0.2,b = b+0.02 ){
        console.log(r,b,n);
        dots.push(
        <circle
        key={n}
          r={r}
          fill="#f36ccaff"
          opacity={0.3}
          className="drop-shadow-[0_0_8px_#D8A7B1]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin={b}>
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        )
    };
  return (
    <div className="w-full h-[140px] mx-auto">
      <svg viewBox="0 0 300 100" className="w-full h-full">
        {/* Glowing Filter for Path */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="400%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#9B8FA3" />
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#9B8FA3" />
          </filter>
        </defs>

        {/* Infinity Path */}
        <path
          id="infinityPath"
          d="M10,50 C10,10 90,10 100,50 C110,90 190,90 190,50 C190,10 110,10 100,50 C90,90 10,90 10,50 Z"
          fill="none"
           /* stroke="#9B8FA3"
          strokeWidth="2"
          strokeDasharray="4"  */
          filter="url(#glow)"
        />

        {/* Main Ball */}
       {/*  <circle
          r="8"
          fill="#00FFFF"
          className="drop-shadow-[0_0_8px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="3s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle> */}

        {/* Ghost Ball 1 - very close */}
        
        {/* <circle
          r="7"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_6px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="3s" begin="0.01s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle> */}
 {dots} ;
      {dots2};  
        {/* <circle
          r="7"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_4px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.02s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>

        <circle
          r="7"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.03s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="7"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.04s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="7"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.06s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="6"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.08s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="4.5"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.1s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="4.5"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.11s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle>
        <circle
          r="4.5"
          fill="#00FFFF"
          opacity="0.2"
          className="drop-shadow-[0_0_2px_#00FFFF]"
        >
          <animateMotion repeatCount="indefinite" dur="4s" begin="0.12s">
            <mpath href="#infinityPath" />
          </animateMotion>
        </circle> */}
      </svg>
    </div>
  );
}


