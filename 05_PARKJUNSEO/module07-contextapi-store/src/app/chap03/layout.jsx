"use client";

import ThemeProvider from "./contexts/ThemeContext";
import LanguageProvider from "./contexts/LanguageContext";
import UserProvider from "./contexts/UserContext";

function Layout({ children }) {
  return (
    <LanguageProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

export default Layout;
