import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css.ts";

export const H1 = recipe({
  base: {
    fontSize: vars.fontSize.f3,
    lineHeight: vars.lineHeight.lh2,
    color: vars.color.primary,
    fontWeight: vars.fontWeight.black,
    textTransform: "uppercase",
    margin: 0,
  },
  variants: {
    hero: {
      true: {
        fontSize: vars.fontSize.f2,
        fontWeight: vars.fontWeight.black,
        lineHeight: vars.lineHeight.lh1,
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
        textTransform: "none",
      },
    },
  },
  defaultVariants: {
    hero: false,
    italic: false,
  },
});
