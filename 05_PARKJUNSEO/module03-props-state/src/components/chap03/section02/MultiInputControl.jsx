"use client";

import { use, useState } from "react";

export default function MultiInputControl() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <h2>다중 입력값 제어</h2>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        placeholder="이름을 입력하세요."
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        placeholder="성을 입력하세요."
      />

      <hr />
      <p>
        입력한 이름: {formData.firstName} {formData.lastName}{" "}
      </p>
      <button onClick={handleReset}>입력 초기화</button>
    </div>
  );
}
