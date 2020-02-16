import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Main } from "./styles";

import { Header, Footer } from "../../components";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
