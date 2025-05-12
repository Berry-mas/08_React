"use client"; // Next.js의 13+ 서버 컴포넌트 구조에서 클라이언트 컴포넌트임을 명시

import { useState } from "react"; // React내의 useState 훅을 불러온다.

/*
  state란?
  state는 컴포넌트 내우베엇 바뀔 수 있는 값을 의미하며,
  props는 외부에서 전달되어 읽기만 가능하지만,
  state는 컴포넌트 내부에서 설정하고 수정할 수 있다. 

  React에서는 클래스형 컴포넌트에서 this.state로 state를 관리하지만, 함수형 컴포넌트에서는
  useState를 통해서 state를 관리한다.
*/

export default function Counter() {
  const [number, setNumber] = useState(3);
  console.log("rendering");
  let count = 0;
  const handler = () => {
    count = count - 1;
    console.log("check");
  };

  const handler2 = () => {
    count = count + 1;
    console.log("check");
  };

  return (
    <>
      <h1>{number}</h1>
      <h2>{count}</h2>

      {/* 얘는 누를 때마다, 이 컴포넌트만 렌더링됨 (렌더링이 두 번씩 찍힘) */}
      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number + 1)}>+1</button>

      {/* 누를 때 렌더링 될 때마다 초기화되어서 count = 0으로 계속 찍힘. */}
      <button onClick={handler}>-1</button>
      <button onClick={handler2}>+1</button>
    </>
  );
}
