/// <reference types="astro/client" />

// Raw-string imports of project README files for case-study bodies.
declare module '*.md?raw' {
  const text: string;
  export default text;
}