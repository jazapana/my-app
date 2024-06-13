import React, { useState } from 'react';

const SecondPage = () => {
  const [highlightedBoxId, setHighlightedBoxId] = useState(null);
  const boxes = [
    { id: 1},
    { id: 2},
    { id: 3}
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
    <div className="flex items-center justify-center grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gray-300 w-full mx-auto h-80 mb-4 flex items-center justify-center text-xl">
        (IMAGE)
      </div>
      <p className="text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-8">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`bg-gray-300 p-4 h-32 flex items-center justify-center text-xl ${highlightedBoxId === box.id ? 'bg-red-400' : ''}`}
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

export default SecondPage;