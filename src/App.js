import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import store from './store/store';
import GlobalStyle from './styles/globalStyles';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HomePage />
    </Provider>
  );
}

export default App;
