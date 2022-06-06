import { Single } from './pages/single/Single';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css';
import './style.css';
import { NotFound } from './pages/notfound/NotFound';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
