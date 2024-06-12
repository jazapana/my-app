import './App.css';
import SecondPage from './SecondPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex items-center p-4">
          <Link to="/" className="w-16 h-16 bg-gray-300 flex items-center justify-center text-lg">
            (ICON)
          </Link>
          <nav className="ml-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-xl hover:underline">Link 1</Link>
              </li>
              <li>
                <Link to="/second" className="text-xl hover:underline">Link 2</Link>
              </li>
              <li>
                <a href="#" className="text-xl hover:underline">Link 3</a>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const FirstPage = () => {
  const [highlightedBoxId, setHighlightedBoxId] = useState(null);
  const boxes = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4}
  ];
  const toggleHighlight = (id) => {
    if (highlightedBoxId === id) {
      setHighlightedBoxId(null);
    } else {
      setHighlightedBoxId(id);
    }
  };

  return (
  <div className="p-4">
    <div className="bg-gray-300 w-full mx-auto h-64 mb-4 flex items-center justify-center text-xl">
      (IMAGE)
    </div>
    <p className="text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className="grid grid-cols-2 gap-4 mb-4">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`bg-gray-300 p-4 h-24 flex items-center justify-center text-xl ${highlightedBoxId === box.id ? 'bg-blue-300' : ''}`}
            onClick={() => toggleHighlight(box.id)}
          >
            (IMAGE)
          </div>
        ))}
      </div>
      <p className="text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
);
}

export default App;