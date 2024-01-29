import clsx from 'clsx';
import { H1 as H1Style } from "./header.css.ts";

export function H1({ className, hero, italic, ...rest }) {
  const classes = clsx(H1Style({ hero, italic }), className);
  return <h1 className={classes} {...rest} />;
}
