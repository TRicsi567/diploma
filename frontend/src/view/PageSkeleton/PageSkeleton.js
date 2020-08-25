import React from 'react';
import Footer from 'view/Footer';
import Header from 'view/Header';

const PageSkeleton = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <div id='background' />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { PageSkeleton as default };
