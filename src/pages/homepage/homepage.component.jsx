import Hero from '../../layout/hero/hero.component';
import Sales from '../../layout/home-sale/sales.component';
import Navbar from '../../layout/navbar/navbar.component';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Hero />
      <Sales />
    </div>
  );
};

export default HomePage;
