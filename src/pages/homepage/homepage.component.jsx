import { useSelector } from 'react-redux';
import SignIn from '../../layout/authentication/sign-in/sign-in.component';
import SignUp from '../../layout/authentication/sign-up/sign-up.component';
import Footer from '../../layout/footer/footer.component';
import Contactors from '../../layout/home-page/contractors/contractors.component';
import Hero from '../../layout/home-page/hero/hero.component';
import HotArea from '../../layout/home-page/hot-area/hotarea.component';
import Rent from '../../layout/home-page/rent/rent.component';
import Sales from '../../layout/home-page/sale/sales.component';
import Navbar from '../../layout/navbar/navbar.component';

const HomePage = () => {
  const authModal = useSelector((state) => {
    return state.toggle.checked;
  });

  const signUpState = useSelector((state) => state.modal.signupForm);
  return (
    <div className='homepage'>
      <Navbar />
      {/* {/* sign in overlay */}
      {authModal && !signUpState && <SignIn />}

      {authModal && signUpState && <SignUp />}

      <Hero />
      <Sales />
      <Rent />
      <Contactors />
      <HotArea />
      <Footer />
    </div>
  );
};

export default HomePage;
