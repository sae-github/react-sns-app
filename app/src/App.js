import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Single } from './pages/single/Single';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';
import { Mypage } from './pages/mypage/Mypage';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

import './reset.css';
import './style.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
