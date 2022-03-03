import { HeroContainer, HeroCenter, Overlay } from './hero.styled';

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroCenter>
        <h1>Heading here</h1>
        <h2>Toggle Button</h2>
        <h2>Mega Search Bar</h2>
      </HeroCenter>
    </HeroContainer>
  );
};

export default Hero;
