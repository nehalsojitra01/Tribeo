import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeContextType = {
    theme: "light" | "dark";
    setTheme: (mode: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => { },
});

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        (async () => {
            const saved = await AsyncStorage.getItem("APP_THEME");
            if (saved === "dark" || saved === "light") {
                setTheme(saved);
            }
        })();
    }, []);

    const updateTheme = async (value: "light" | "dark") => {
        setTheme(value);
        await AsyncStorage.setItem("APP_THEME", value);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
