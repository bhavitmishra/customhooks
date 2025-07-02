import { useEffect } from "react";
import { useState } from "react";

function useMouseMove() {
  const handlemove = (e) => {
    setMousePosi({ x: e.clientX, y: e.clientY });
  };
  const [mousePosi, setMousePosi] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handlemove(e));
    return window.removeEventListener("mousemove", handlemove);
  }, []);
  return mousePosi;
}

export default function Mousemoove() {
  const mouseposi = useMouseMove();
  return (
    <div>
      <div>
        X : {mouseposi.x} ,
        <br />Y : {mouseposi.y}
      </div>
    </div>
  );
}
