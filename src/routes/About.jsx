import React from 'react';
import { Box, MantineProvider } from '@mantine/core';
const About = () => {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
    <section className="">
      <main className="">
        <h1 className="text-7xl font-black">About</h1>
      </main>
      <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    >
      Box lets you add inline styles with sx prop
    </Box>
    </section>
  </MantineProvider>
  );
};
export default About;
