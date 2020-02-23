import styled from "styled-components";
import { colors, Utils, breakpoints } from "../../constants";

const { calculateRem, neumorphism, readColor } = Utils;

export const Wrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 0 auto;
  grid-gap: 20px;
  align-content: center;
  justify-items: center;
`;

export const OopsMessage = styled.p`
  grid-column: 1 / -1;
  font-size: ${calculateRem(35)};
  line-height: ${calculateRem(40)};
  font-weight: bolder;
  text-align: center;
  display: block;
`;

export const ShareButton = styled.div`
  width: 100%;
  height: 75px;
  padding: 10px;
  color: black;
  ${neumorphism(colors.white)}
  outline: none;
  border: none;

  display: grid;
  grid-template-columns: 70% 1fr;

  text-transform: uppercase;
  svg {
    path {
      fill: black;
    }
  }

  & > span:first-child {
    font-size: ${calculateRem(20)};
    line-height: ${calculateRem(20)};
    text-transform: uppercase;
    text-align: center;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;

    align-self: center;
  }
`;

export const Share = styled.span`
  svg {
    width: 30px;
    height: 30px;
    margin: 0 auto;

    path {
      fill: ${readColor(colors.darkText)};
    }
  }

  align-self: center;
  justify-self: center;

  @media ${breakpoints.mediumDevice} {
    grid-column: 2 / 3;
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
