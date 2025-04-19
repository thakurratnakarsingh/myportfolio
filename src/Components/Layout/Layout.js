import React from 'react';
import Nevbar from './Nevbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Nevbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout; 