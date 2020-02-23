import Color from "color";
import { css } from "styled-components";

export const ICONS = {};

export const breakpoints = {
  smallDevice: "(min-width: 36em)",
  mediumDevice: "(min-width: 48em)",
  largeDevice: "(min-width: 62em)",
  fullHDevice: "(min-width: 90em)",
};

export const colors = {
  white: Color.rgb(243, 244, 239),
  darkText: Color.rgb(10, 19, 39).lighten(0.25),
  lightBackground: Color.rgb(255, 244, 241),
  buttons: [
    Color.rgb(72, 144, 243),
    Color.rgb(87, 245, 138),
    Color.rgb(180, 65, 245),
    Color.rgb(245, 67, 67),
    Color.rgb(236, 195, 11),
    Color.rgb(243, 119, 72),
    Color.rgb(203, 186, 237),
    Color.rgb(3, 252, 186),
    Color.rgb(228, 255, 26),
  ],
};

export const Utils = {
  readColor: color => color.hsl().string(),
  calculateRem: size => `${size / 16}rem`,
  customBreakpoint: min => `(min-width: ${min / 16}em)`,
  neumorphism: color => css`
    border-radius: 20px;
    background: ${color.hsl().string()};
    box-shadow: 8px 8px 25px
        ${color
          .lighten(0.2)
          .fade(0.45)
          .hsl()
          .string()},
      -8px -8px 25px
        ${color
          .darken(0.2)
          .fade(0.45)
          .hsl()
          .string()};
  `,
};
