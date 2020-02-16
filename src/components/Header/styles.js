import styled from "styled-components";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  height: 150px;

  justify-content: center;
  align-items: center;
  padding: 50px 25px;
`;

export const Title = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-size: ${calculateRem(45)};
`;
