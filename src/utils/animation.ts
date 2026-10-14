import type { CSSProperties } from "react";

/** Sets the `--delay` custom property consumed by the animation classes. */
export const delayStyle = (delayMs: number): CSSProperties =>
  ({ "--delay": `${delayMs}ms` }) as CSSProperties;

/** Class toggled on a section once it has been revealed. */
export const revealClass = (isVisible: boolean): string =>
  isVisible ? "reveal-visible" : "reveal-hidden";
