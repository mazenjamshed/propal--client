import './hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='overlay'></div>
      <div className='hero__top'>
        <h2>ProPal</h2>
        <h2>Create Account</h2>
      </div>
      <div className='hero__center'>
        <h1>Heading here</h1>
        <h2>Toggle Button</h2>
        <h2>Mega Search Bar</h2>
      </div>
    </div>
  );
};

export default Hero;
