import React from 'react';
import RootLayout from './layout';
import IntroPart from './components/IntroPart';
import BackGround2 from './components/BackGround2';

const mainPage = () => {
  return (
    <RootLayout>
      <IntroPart />
      <BackGround2 />
    </RootLayout>
  );
};

export default mainPage;