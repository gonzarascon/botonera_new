import styled from "styled-components";
import { breakpoints, colors, Utils } from "../../constants";

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 50px 25px;
`;

export const Title = styled.a`
  font-weight: 100;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: ${calculateRem(20)};
  text-decoration: none;
  color: white;
  & svg {
    width: 100%;
    max-width: 25px;
    margin-right: 15px;
    path {
      fill: white;
    }
  }

  &:visited {
    text-decoration: none;
    color: white;
  }

  @media ${breakpoints.mediumDevice} {
    &:hover {
      opacity: 0.75;
    }
  }
`;
