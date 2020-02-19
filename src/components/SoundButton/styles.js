import styled from "styled-components";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, neumorphism, calculateRem } = Utils;

export const Box = styled.div`
  width: 100%;
  height: 75px;
  color: ${props =>
    props.color.isDark() ? "white" : readColor(colors.darkText)};
  ${props => neumorphism(props.color)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ease-in-out 0.3s;

  @media ${breakpoints.smallDevice} {
    height: 100px;
  }

  @media ${breakpoints.mediumDevice} {
    height: 150px;
  }

  svg {
    width: 50%;
    height: 50%;

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

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
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
`;
