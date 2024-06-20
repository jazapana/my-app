import './App.css';
import SecondPage from './SecondPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import joelPic from './assets/IMG_7721.jpg';
import logo from './assets/IMG_7720.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex items-center p-4">
          <Link to="/" className="w-16 h-16 flex items-center justify-center">
            <img src={logo} className="h-full w-full object-cover" />
          </Link>
          <nav className="ml-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-xl hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/experience" className="text-xl hover:underline">Experience</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/experience" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const FirstPage = () => {
  const [highlightedBoxId, setHighlightedBoxId] = useState(null);
  const boxes = [
    { id: 1, text: "INTRO"},
    { id: 2, text: "BIO"},
    { id: 3, text: "SKILLS"},
    { id: 4, text: "LINKEDIN"}
  ];
  const handleBoxClick = (id) => {
    if (id == 4) {
      window.open('https://www.linkedin.com/in/joel-zapana-079965230/', '_blank');
    }
    else {
      setHighlightedBoxId(id === highlightedBoxId ? null : id);
    }
  };
  const renderParagraph = () => {
    switch (highlightedBoxId) {
      case 1:
        return <p className="text-xl mb-6">Hi, my name is Joel Zapana. Welcome to my portfolio page! Here, you can read about me and my experience as a Software Engineer. Feel free to explore this site and learn a thing or two about me. Thank you for visiting!</p>;
      case 2:
        return <p className="text-xl mb-6">Born and raised in San Jose, Joel grew up impressed by the technology that surrounded his daily life. He wanted to partake in the advancement of society and was determined to do whatever it takes. Thus, he attended SJSU and worked hard throughout all the semesters. Eventually, he graduated as a Software Engineer!</p>
      case 3:
        return <p className="text-xl mb-6">Joel's skills include: Java, Python, HTML, CSS, C++, C, PHP, JavaScript, TypeScript, MySQL, SQLite, Firebase, React Native, Flask, and Spring.</p>
      default:
        return <p className="text-xl mb-6">Please click on these boxes to learn more about Joel Zapana!</p>
    }
  };

  return (
  <div className="p-4">
    <div className="w-full mx-auto h-64 mb-10 flex items-center justify-center">
      <img src={joelPic} className="h-full w-full object-cover" />
    </div>
    <div className="h-40 flex items-center justify-center mt-4 mb-4">{renderParagraph()}</div>
    <div className="grid grid-cols-2 gap-4 mb-10">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`bg-gray-300 p-4 h-24 flex items-center justify-center text-xl cursor-pointer ${highlightedBoxId === box.id ? 'bg-green-400' : ''}`}
            onClick={() => handleBoxClick(box.id)}
          >
            {box.text}
          </div>
        ))}
      </div>
      <p className="text-xl mb-4">Joel Zapana created this website using Amazon Web Services and Create-React-App.</p>
  </div>
);
}

export default App;