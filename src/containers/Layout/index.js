import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Main } from "./styles";

import { SearchContextProvider } from "../../contexts/searchContext";
import { Header, Footer } from "../../components";

function Layout({ children }) {
  return (
    <Wrapper>
      <SearchContextProvider>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </SearchContextProvider>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
