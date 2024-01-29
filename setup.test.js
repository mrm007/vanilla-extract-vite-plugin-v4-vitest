import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import "@vanilla-extract/css/disableRuntimeStyles";
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;

// runs a cleanup after each test case (e.g. clearing jsdom)
// eslint-disable-next-line vitest/require-top-level-describe
afterEach(() => {
  cleanup();
});
