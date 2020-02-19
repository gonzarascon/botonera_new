import styled from "styled-components";
import { Utils } from "../../constants";

const { calculateRem } = Utils;

export const Wrapper = styled.header`
  width: 100%;
  height: 250px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  padding: 50px 25px;
`;

export const Title = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-size: ${calculateRem(45)};
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  padding: 10px;
  background-color: transparent;
  font-size: ${calculateRem(20)};
  font-weight: lighter;
  margin: 20px auto;
  color: white;

  max-width: 500px;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
