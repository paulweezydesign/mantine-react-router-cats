import React from 'react';
import { MantineProvider, Text, Center, TypographyStylesProvider, Paper } from '@mantine/core';




const Home = () => {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
    <Center>
    <section className="">
      <main>
    

      <Paper shadow="lg" p="md">
    <Text weight={'900'} size={"70px"}>Welcome to Mantine!</Text>
       <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
      </Paper>
    
      
      </main>
    </section>
    </Center>
    </MantineProvider>
  );
};

export default Home;
