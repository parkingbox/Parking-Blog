"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

function DarkModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(true);
  }, []);
  return (
    <>
      {isDark && currentTheme === "dark" ? (
        <button
          type="button"
          className="rounded-lg bg-[#F7ECDC] px-2 text-black hover:bg-[#F7ECDC]"
          title="Toggle dark mode"
          onClick={() => setTheme("light")}
        >
          Light
        </button>
      ) : (
        <button
          type="button"
          className="rounded-lg bg-[#F7ECDC] px-2 text-black  hover:[#F7ECDC]"
          title="Toggle dark mode"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      )}
    </>
  );
}

export default DarkModeBtn;
