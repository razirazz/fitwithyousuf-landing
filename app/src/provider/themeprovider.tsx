'use client';

import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextProps = {
    theme: "light" | "dark",
    toggleTheme: () => void;
}

const defaultValue: ThemeContextProps = {
    theme: "dark",
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

export const ThemeProvider = ({ children}: { children: ReactNode}) => {

    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const toggleTheme = () => {
        setTheme(theme => theme === "dark" ? "light": "dark");
        if (theme === "dark") {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext)