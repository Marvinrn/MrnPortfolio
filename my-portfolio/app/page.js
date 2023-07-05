import React from 'react';
import RootLayout from './layout';
import IntroPart from './pages/IntroPart';
import About from './pages/About';

const mainPage = () => {
  return (
    <RootLayout>
      <IntroPart />
      <About />
    </RootLayout>
  );
};

export default mainPage;