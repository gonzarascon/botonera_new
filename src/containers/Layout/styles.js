import styled from "styled-components";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor } = Utils;

export const Wrapper = styled.div`
  width: 100%;
  font-family: "Rubik", sans-serif;
  color: ${readColor(colors.lightBackground)};
  background-color: ${readColor(colors.darkText)};
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 100px - 250px);
  padding: 25px 0;

  @media ${breakpoints.mediumDevice} {
    padding: 0;
  }
`;
