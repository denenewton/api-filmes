import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import './global.css';

const root = document.getElementById('root');
const Root = createRoot(root);
Root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
