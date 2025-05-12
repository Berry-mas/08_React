"use client";

import { useState, useEffect } from "react";

export default function AfterStateUpdateExample() {
  const [isOn, setIsOn] = useState(false);

  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOn ? "green" : "red",
    transition: "0.5s",
    marginBottom: "1rem",
  };

  const handleWrongClick = () => {
    setIsOn(!isOn);
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다."); // 여기서 isOn은 바뀌기 전의 값임 (아직 렌더링 전이니까)
    // 즉 false -> isOn 상태값 바꾸고 (렌더링 전) -> 아직 렌더링 안된 값인 isOn을 출력하고 -> 이제야 렌더링

    /*
      setIsOn(!isOn): 처음에 불이 꺼져 있는 상태에서 불을 켠 것
      console.log()는 부탁만 듣고 결과를 기다리지 않고 바로 말해버림
    */
  };

  // useEffect hook 사용
  useEffect(() => {
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다.");
  }, [isOn]); // isOn이라는 상태값이 바뀔 때 함수 내용 호출함 (렌더링이 되고 나서)

  return (
    <>
      <div style={style}></div>

      <button onClick={handleWrongClick}>❌ 잘못된 처리</button>

      <button onClick={() => setIsOn((prev) => !prev)}>⭕ 올바른 처리</button>
    </>
  );
}
