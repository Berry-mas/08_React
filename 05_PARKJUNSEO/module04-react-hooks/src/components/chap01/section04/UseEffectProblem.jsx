"use client";
import { useState, useEffect } from "react";

export default function UseEffectProblem() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect 실행`);

    // setCount(count + 1);  // 여기에 이 코드를 넣으면 계속 리렌더링 되면서 무한루프에 빠짐
  }, [count]);

  return (
    <div>
      <h2>useEffect 문제 사례</h2>
      <p>현재 카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>수동으로 증가</button>
    </div>
  );
}
