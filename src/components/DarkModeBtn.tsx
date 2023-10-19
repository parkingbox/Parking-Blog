"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(true);
  }, []);
  return (
    <div>
      {isDark && currentTheme === "dark" ? (
        <button
          type="button"
          className="rounded-full bg-[#F7ECDC] p-2 text-black hover:bg-[#F7ECDC]"
          title="Toggle dark mode"
          onClick={() => setTheme("light")}
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          type="button"
          className="rounded-full bg-[#F7ECDC] p-2 text-black  hover:[#F7ECDC]"
          title="Toggle dark mode"
          onClick={() => setTheme("dark")}
        >
          <MdDarkMode />
        </button>
      )}
    </div>
  );
}

export default DarkModeBtn;
