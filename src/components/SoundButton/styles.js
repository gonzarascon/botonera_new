import styled, { css } from "styled-components";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, neumorphism, calculateRem } = Utils;

export const Box = styled.div`
  width: 100%;
  height: 75px;
  color: ${props =>
    props.color.isDark() ? "white" : readColor(colors.darkText)};
  ${props => neumorphism(props.color)};
  display: grid;

  grid-template-columns: 70% 1fr 1fr;
  grid-template-rows: 1fr;

  place-content: center;
  transition: transform ease-in-out 0.3s;

  & > div {
    display: none;
  }

  @media ${breakpoints.smallDevice} {
    height: 100px;
  }

  @media ${breakpoints.mediumDevice} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80% 1fr;
    padding: 15px;
    height: 150px;
  }

  svg {
    width: 50%;
    height: 50%;
    grid-column: 1/-1;
    grid-row: 1/-1;

    circle {
      stroke: ${props =>
        props.color.isDark() ? "white" : readColor(colors.darkText)};
    }
  }

  .pause-icon {
    max-height: 50px;

    path {
      fill: ${props =>
        props.color.isDark() ? "white" : readColor(colors.darkText)};
    }
  }
`;

export const Label = styled.span`
  font-size: ${calculateRem(20)};
  line-height: ${calculateRem(20)};
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;

  align-self: center;

  @media ${breakpoints.mediumDevice} {
    grid-column: 1/ -1;
    grid-row: 1 / 2;
  }
`;

export const Play = styled.span`
  svg {
    width: 30px;
    height: 30px;
    margin: 0 auto;

    path {
      fill: ${props =>
        props.color.isDark() ? "white" : readColor(colors.darkText)};
    }
  }
      align-self: center;
    justify-self: center;

    ${props =>
      props.full &&
      css`
        grid-column: 2/-1;
      `}

  @media ${breakpoints.mediumDevice} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
justify-self: start;
    ${props =>
      props.full &&
      css`
        grid-column: 1/-1;
        justify-self: center;
      `}

    

    svg {
      width: 30px;
      height: 30px;
      margin: 0 auto;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Share = styled.span`
  svg {
    width: 30px;
    height: 30px;
    margin: 0 auto;

    path {
      fill: ${props =>
        props.color.isDark() ? "white" : readColor(colors.darkText)};
    }
  }

  align-self: center;
  justify-self: center;

  @media ${breakpoints.mediumDevice} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: end;

    svg {
      width: 30px;
      height: 30px;
      margin: 0 auto;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
