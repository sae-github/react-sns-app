import { Single } from './pages/single/Single';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css';
import './style.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </Router>
  );
};
