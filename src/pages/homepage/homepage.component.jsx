import Hero from '../../layout/hero/hero.component';
import Navbar from '../../layout/navbar/navbar.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
