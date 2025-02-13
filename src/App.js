import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import FinalMessage from './pages/FinalMessage';
import Print from './pages/Print';
import './App.css';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/message" element={<FinalMessage />} />
          <Route path="/print" element={<Print />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App; 