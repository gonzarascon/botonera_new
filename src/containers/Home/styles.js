import styled from "styled-components";
import _ from "lodash";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, neumorphism } = Utils;

export const Wrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 0 auto;
  grid-gap: 20px;
  align-content: center;
  justify-items: center;
`;

export const Box = styled.div`
  width: 150px;
  height: 150px;

  ${neumorphism(_.sample(colors.buttons))};
`;
