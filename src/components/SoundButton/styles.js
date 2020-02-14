import styled from "styled-components";
import _ from "lodash";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, neumorphism, calculateRem } = Utils;

const buttonColor = _.sample(colors.buttons);

export const Box = styled.div`
  width: 150px;
  height: 150px;
  color: ${buttonColor.isDark() ? "white" : readColor(colors.darkText)};
  ${neumorphism(buttonColor)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Label = styled.span`
  font-size: ${calculateRem(20)};
  text-transform: uppercase;
  width: 100%;
  padding: 15px;
  text-align: center;
`;
