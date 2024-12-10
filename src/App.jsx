import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import PublicOffer from './components/PublicOffer';
import Payment from './components/Payment';
import Risks from './components/Risks';
import Pay from './components/Pay';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/offer'
          element={<PublicOffer />}
        />
        <Route
          path='/payment'
          element={<Payment />}
        />
        <Route
          path='/risks'
          element={<Risks />}
        />
        <Route
          path='/pay'
          element={<Pay />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
