import React from 'react';
import RootLayout from './layout';
import IntroPart from './components/IntroPart';
import About from './components/About';

const mainPage = () => {
  return (
    <RootLayout>
      <IntroPart />
      <About />
    </RootLayout>
  );
};

export default mainPage;