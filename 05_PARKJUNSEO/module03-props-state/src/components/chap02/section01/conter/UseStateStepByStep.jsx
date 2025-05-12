"use client";
import { useState } from "react";

export default function UseStateStepByStep() {
  console.log("=======> 컴포너트 리렌더링 됨"); // 상태 변경 시마다 호출

  const [message, setMessage] = useState("기본상태");
  const onClickEnter = () => setMessage("안녕하세요?");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <>
      <h1 style={{ color, backgroundColor }}>{message}</h1>
      <div>
        <button onClick={() => setMessage("기본상태")}>기본</button>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>

      <div>
        <button onClick={() => setColor("black")}>기본</button>
        <button onClick={() => setColor("red")}>빨강</button>
        <button onClick={() => setColor("green")}>초록</button>
        <button onClick={() => setColor("blue")}>파랑</button>
      </div>

      <div>
        <button onClick={() => setBackgroundColor("white")}>배경색 기본</button>
        <button onClick={() => setBackgroundColor("red")}>배경색 빨강</button>
        <button onClick={() => setBackgroundColor("green")}>배경색 초록</button>
        <button onClick={() => setBackgroundColor("blue")}>배경색 파랑</button>
      </div>
    </>
  );
}
