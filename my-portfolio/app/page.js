import React from 'react';
import RootLayout from './layout';
import IntroPart from './pages/IntroPart';
import MyProjects from './pages/MyProjects';
import About from './pages/About';
import Contact from './pages/Contact';

const mainPage = () => {
  return (
    <RootLayout >
      <IntroPart />
      <About />
      <MyProjects />
      <Contact />
    </RootLayout>
  );
};

export default mainPage;