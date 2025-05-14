// 테마상태를 전역에서 관리하기 위한 컨텍스트

/*
  [전역 상태 관리란?]

  - 전역 상태: 여러 컴포넌트에서 동시에 공유하는 데이터.
  예: 로그인 정보, 다크모드 설정, 장바구니 데이터

  - 핵심 역할:
  1. 저장 → 상태를 하나의 '공유 공간'에 보관
  2. 구독 → 필요한 컴포넌트가 해당 상태를 읽음
  3. 업데이트 → 상태 변경 시 구독 중인 컴포넌트에 알림
*/

"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
