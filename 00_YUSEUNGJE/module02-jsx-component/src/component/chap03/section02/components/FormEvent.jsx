"use client";

export default function FormEvent() {
  // 입력 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    console.log("입력값 : ", e.target.value);
  };
}
