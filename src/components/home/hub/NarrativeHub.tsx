import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

/*
  ? isLargerThanTablet renders essentially the same component, with mostly the same styles so i should probably break this into its own component
*/

export default function NarrativeHub() {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  return (
    <Grid templateColumns={{ base: '1fr' }} border='2px solid red'>
      <Grid
        border='2px solid red'
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        placeItems='center'
      >
        <GridItem>Img 1</GridItem>
        <GridItem>CTA A</GridItem>
      </Grid>

      {!isLargerThanTablet ? (
        <Grid
          border='2px solid red'
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          placeItems='center'
        >
          <GridItem>Img 2</GridItem>
          <GridItem>CTA B</GridItem>
        </Grid>
      ) : (
        <Grid
          border='2px solid red'
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          placeItems='center'
        >
          <GridItem>CTA B</GridItem>
          <GridItem>Img 2</GridItem>
        </Grid>
      )}
    </Grid>
  );
}
