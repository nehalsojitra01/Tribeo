import { useContext } from "react";
import { ThemeContext } from "./../component/ThemeContext";

// For functional components
export const useThemeStyles = (styleFn: (isDark: boolean) => any) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";
    const styles = styleFn(isDark);
    return { theme, isDark, styles };
};

// For class components
export const getThemeStylesForClass = (
    context: any,
    styleFn: (isDark: boolean) => any
) => {
    const theme = context.theme;
    const isDark = theme === "dark";
    const styles = styleFn(isDark);
    return { theme, isDark, styles };
};

export const getThemeForClass = (context: any) => {
    const theme = context.theme;
    const isDark = theme === "dark";
    return { theme, isDark };
};