"use client";

import { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function DomMeasure() {
  // 1. useRef (DOM 요소에 접근할 때 사용하는 hook)로 DOM 요소에 접근한다.
  // 2. useLayoutEffect로 요소의 크기를 읽는다.
  // 3. 필요한 경우 setState를 통해 상태를 업데이트한다.

  const boxRef = useRef(null); // 측정할 DOM 요소를 참조
  const [width, setWidth] = useState(0); // 측정한 width 값을 저장할 상태

  useEffect(() => {
    // 여기를 useEffect로 하면 깜빡이지 않음
    if (boxRef.current) {
      const boxWidth = boxRef.current.offsetWidth; // DOM의 offsetWidth를 읽어옴
      setWidth(boxWidth);
    }
  });

  return (
    <div>
      <h2>DOM 크기 측정 예제</h2>
      <div
        ref={boxRef}
        style={{ width: "50%", height: "100px", backgroundColor: "lightblue" }}
      >
        측정할 박스
      </div>
      <p>박스의 너비 : {width}px</p>
    </div>
  );
}
