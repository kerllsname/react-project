import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/redusers';
import Header from './components/Header/Header';
import HomePage from './components/Wrapper/HomePage/HomePage';
import CardsPage from './components/Wrapper/CardsPage/CardsPage';
import AboutPage from './components/Wrapper/AboutPage/AboutPage';
import ErrorPage from './components/Wrapper/ErrorPage/ErrorPage';
import FormsPage from './components/Wrapper/FormsPage/FormsPage';
import PopUp from './components/Wrapper/HomePage/PopUp';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/card" element={<PopUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Provider>
  );
}
