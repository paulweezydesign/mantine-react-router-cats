import React from 'react';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
   <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Navbar />

      <Outlet />
      <Modal />
      </MantineProvider>
    </>
  );
}

export default App;
