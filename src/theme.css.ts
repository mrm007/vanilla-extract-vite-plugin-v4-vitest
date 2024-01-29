import { createTheme, createThemeContract } from "@vanilla-extract/css";

/**
 * Reusable breakpoints
 */
export const screens = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

export const media = {
  xs: `screen and (min-width: ${screens.xs})`,
  sm: `screen and (min-width: ${screens.sm})`,
  md: `screen and (min-width: ${screens.md})`,
  lg: `screen and (min-width: ${screens.lg})`,
  xl: `screen and (min-width: ${screens.xl})`,
};

/**
 * Reusable theme values
 */
const commons = {
  fontSize: {
    f1: "3rem", // 48
    f2: "2.5rem", // 40
    f3: "2rem", // 32
    f4: "1.75rem", // 28
    f5: "1.5rem", // 24
    f6: "1.25rem", // 20
    f7: "1.125rem", // 18
    f8: "1rem", // 16
    f9: ".875rem", // 14
    f10: ".75rem", // 12
    f11: ".675rem", // 10
    f12: ".5rem", // 8
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
    black: "900",
  },
  lineHeight: {
    lh1: "3rem", // 48
    lh2: "2.5rem", // 40
    lh3: "1.75rem", // 28
    lh4: "1.5rem", // 24
    lh5: "1.25rem", // 20
    lh6: "1rem", // 16
    lh7: ".75rem", // 12
  },
};

/**
 * SAS Theme contract
 * @see https://vanilla-extract.style/documentation/api/create-theme-contract/
 */
export const vars = createThemeContract({
  // This is to guarantee that be have the same color names in both themes
  color: { primary: "", secondary: "" },
  fontSize: {
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
    f11: "",
    f12: "",
  },
  fontWeight: {
    regular: "",
    medium: "",
    bold: "",
    black: "",
  },
  lineHeight: {
    lh1: "",
    lh2: "",
    lh3: "",
    lh4: "",
    lh5: "",
    lh6: "",
    lh7: "",
  },
});

/**
 * SAS Light Theme class
 * @see https://vanilla-extract.style/documentation/api/create-theme/
 */
export const theme = createTheme(vars, {
  color: { primary: "blue", secondary: "red" },
  ...commons,
});
