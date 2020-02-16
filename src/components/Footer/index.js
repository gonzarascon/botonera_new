import React from "react";
import SVG from "react-inlinesvg";
import { Wrapper, Title } from "./styles";

export default function Footer() {
  return (
    <Wrapper>
      <Title
        href="https://github.com/gonzarascon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SVG src="./assets/icons/github.svg" title="Github" />
        Hecho con amor a los memes
      </Title>
    </Wrapper>
  );
}
