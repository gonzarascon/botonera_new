import React from "react";
import { Wrapper, Title, SearchInput } from "./styles";

import {
  useSearchDispatch,
  setSearchAction,
} from "../../contexts/searchContext";

export default function Header() {
  const searchDispatch = useSearchDispatch();

  function handleInputChange(value) {
    searchDispatch(setSearchAction(value));
  }

  return (
    <Wrapper>
      <Title>Botonera de memes</Title>
      <SearchInput
        placeholder="Buscá un sonido"
        onChange={e => handleInputChange(e.target.value)}
      />
    </Wrapper>
  );
}
