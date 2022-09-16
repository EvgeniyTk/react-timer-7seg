import React, { useState } from "react";
import { useEffect } from "react";
function Hours() {
    let [a, setA] = useState('#DDDDDD');
    let [b, setB] = useState('#DDDDDD');
    let [c, setC] = useState('#DDDDDD');
    let [d, setD] = useState('#DDDDDD');
    let [e, setE] = useState('#DDDDDD');
    let [f, setF] = useState('#DDDDDD');
    let [g, setG] = useState('#DDDDDD');
    const [value, setValue] = useState(0);

    const toggleClick = (prop, func) => {
        if ( prop === '#DDDDDD') {
            func('#FF0000')
        } else {
            func('#DDDDDD')
        }
    }

    const reset = () => {
         setA('#DDDDDD');
         setB('#DDDDDD');
         setC('#DDDDDD');
         setD('#DDDDDD');
         setE('#DDDDDD');
         setF('#DDDDDD');
         setG('#DDDDDD');

    }

    const num = (prop) => {
        if (prop === '1') {
            reset();
            toggleClick(b, setB);
            toggleClick(c, setC);
        } else if (prop === '2') {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(g, setG);
            toggleClick(e, setE);
            toggleClick(d, setD);
        } else if (prop === '3') {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(g, setG);
            toggleClick(c, setC);
            toggleClick(d, setD);
        } else if (prop === '4') {
            reset();
            toggleClick(f, setF);
            toggleClick(b, setB);
            toggleClick(g, setG);
            toggleClick(c, setC);
        } else if (prop === '5') {
            reset();
            toggleClick(a, setA);
            toggleClick(f, setF);
            toggleClick(g, setG);
            toggleClick(c, setC);
            toggleClick(d, setD);
        } else if (prop === '6') {
            reset();
            toggleClick(a, setA);
            toggleClick(f, setF);
            toggleClick(g, setG);
            toggleClick(c, setC);
            toggleClick(d, setD);
            toggleClick(e, setE);
        } else if (prop === '7') {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(c, setC);
        } else if (prop === '8') {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(g, setG);
            toggleClick(c, setC);
            toggleClick(d, setD);
            toggleClick(e, setE);
            toggleClick(f, setF);
        } else if (prop === '9') {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(g, setG);
            toggleClick(c, setC);
            toggleClick(d, setD);
            toggleClick(f, setF);
        }  else {
            reset();
            toggleClick(a, setA);
            toggleClick(b, setB);
            toggleClick(e, setE);
            toggleClick(c, setC);
            toggleClick(d, setD);
            toggleClick(f, setF);
        }
    }

    const timer = () => {
        if (value < 10) {
          var inter = setInterval(function() {
            setValue((prev) => prev + 1)
          }, 1000);
        } else {
            clearInterval(inter);
            setValue(0);
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
      
    }, [a,b,c,d,e,f,g]);

      return (
        <>
        <button onClick={timer}>timer</button>
        <input 
            type="text"
            onChange={onChange}
            value={value}
            onKeyUp={() => num(value)}
         />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192px"
      height="320px"
      viewBox="-1 -1 12 20"
    >
      <g
        id="ceg"
        style={{
          fillRule: "evenodd",
          stroke: "#FFFFFF",
          strokeWidth: "0.25",
          strokeOpacity: "1",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
      >
        <polygon
          id="a"
          onClick={() => toggleClick(a, setA)}
          points=" 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2"
          fill={a}
        />
        <polygon
          id="b"
          points=" 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2"
          onClick={() => toggleClick(b, setB)}
          fill={b}
        />
        <polygon
          
          id="c"
          points=" 9, 9 10,10 10,16  9,17  8,16  8,10"
          onClick={() => toggleClick(c, setC)}
          fill={c}
        />
        <polygon
          id="d"
          points=" 9,17  8,18  2,18  1,17  2,16  8,16"
          onClick={() => toggleClick(d, setD)}
          fill={d}
        />
        <polygon
          id="e"
          points=" 1,17  0,16  0,10  1, 9  2,10  2,16"
          onClick={() => toggleClick(e, setE)}
          fill={e}
        />
        <polygon
          id="f"
          points=" 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8"
          onClick={() => toggleClick(f, setF)}
          fill={f}
        />
        <polygon
          id="g"
          points=" 1, 9  2, 8  8, 8  9, 9  8,10  2,10"
          onClick={() => toggleClick(g, setG)}
          fill={g}
    />
      </g>
    </svg>
    </>
  );
}

export { Hours };
