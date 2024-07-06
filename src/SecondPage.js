import React, { useState } from 'react';
import caliPic from './assets/IMG_7812.jpg';
import authentifiedPic from './assets/IMG_7814.jpg';
import stylePic from './assets/IMG_7810.jpg';
import gamePic from './assets/IMG_7807Replace.jpg';

const SecondPage = () => {
  const [selectedBox, setSelectedBox] = useState({
    id: 1,
    image: caliPic,
    description: '<strong>Front End Intern</strong><br><br>Contributed to the development of an open-source educational website, providing study materials for civil engineering licensure exams<br><br>Developed a page displaying images from the ASCE7 textbook, enabling visitors to view textbook excerpts online for study purposes'
  });

  const boxes = [
    { id: 1, image: caliPic, title: "Front End Intern", description: '<strong>Front End Intern</strong><br><br>Contributed to the development of an open-source educational website, providing study materials for civil engineering licensure exams<br><br>Developed a page displaying images from the ASCE7 textbook, enabling visitors to view textbook excerpts online for study purposes' },
    { id: 2, image: authentifiedPic, title: "Acquisition Specialist", description: '<strong>Acquisition Specialist</strong><br><br>Promoted our services to seniors and recent graduates, as well as up and coming companies<br><br>Services included providing endorsements to other companies, and connecting companies with our verified and qualified members' },
    { id: 3, image: stylePic, title: "Virtual Wardrobe", description: "<strong>Virtual Wardrobe</strong><br><br>Developed an application that could generate outfits in a team for the Senior Design Project I & II courses<br><br>Designed an algorithm to generate outfits with the uploaded clothing of the user based on weather and style preferences, and to assign outfits to specific calendar dates<br><br>Stylized the home and calendar planner pages using CSS and TypeScript<br><br>Click here to view test footage of the app: <a href='https://youtu.be/iSm62BElw0g?si=pMa9LJCAGyBJICMg'>https://youtu.be/iSm62BElw0g?si=pMa9LJCAGyBJICMg</a>" },
    { id: 4, image: gamePic, title: "2D Video Game with Dynamic Pursuit", description: "<strong>2D Video game with Dynamic Pursuit</strong><br><br>Developed a 2D video game where players dodge and shoot at enemy sprites for the Computer Game Design course<br><br>Enabled users to adjust difficulty settings<br><br>Utilized pixel art to design sprites and backgrounds, achieving a retro style<br><br>Click here to view gameplay: <a href='https://www.youtube.com/watch?v=NgYA5FFwkfo'>https://www.youtube.com/watch?v=NgYA5FFwkfo</a>" }
  ];

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-300 w-full mx-auto mx-h-500 mb-4 flex items-center justify-center text-xl">
          <img src={selectedBox.image} alt="Selected" className="h-full w-full object-cover" />
        </div>
        <p className="text-xl mb-4 text-left ml-6 mr-6" dangerouslySetInnerHTML={{ __html: selectedBox.description }}></p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`p-4 h-24 flex items-center justify-center text-xl cursor-pointer ${selectedBox.id === box.id ? 'bg-green-400' : 'bg-gray-300'}`}
            onClick={() => handleBoxClick(box)}
          >
            <p className="text-center">{`${box.title}`}</p>
          </div>
        ))}
      </div>

      <p className="text-xl mb-4">
        This page showcases my experience and projects. Click on the images above to learn more about each one.
      </p>
    </div>
  );
}

export default SecondPage;