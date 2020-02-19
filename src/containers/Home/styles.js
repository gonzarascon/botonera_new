import styled from "styled-components";
import { Utils } from "../../constants";

const { calculateRem } = Utils;

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
