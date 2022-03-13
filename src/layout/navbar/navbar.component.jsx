import { useDispatch } from 'react-redux';
import Toggle from '../../components/toggle-switch/toggle.component';
import { toggleActions } from '../../store/slices/toggleSlice';
import { Nav } from './navbar.styled';

const Navbar = () => {
  // const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleButtonChange = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <Nav>
      <h2>Logo Here</h2>
      <Toggle Name='Sign In' onChange={handleButtonChange} />
    </Nav>
  );
};

export default Navbar;
