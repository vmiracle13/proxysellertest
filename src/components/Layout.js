
import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Logo from './Logo';

const Layout = ({ children }) => (
  <Container fluid className="p-4">
    <header>
      <Logo />
      <h1 className="py-4 text-center m-0">Hello, Proxy Seller!</h1>
    </header>

    <main>
      {children}
    </main>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
