'use client'
import React from 'react';
import WordCloud from 'react-wordcloud';

const WordCloudComponent = () => {
  // Sample word data
  const words = [
    { text: 'React', value: 1000 },
    { text: 'JavaScript', value: 800 },
    { text: 'CSS', value: 600 },
    { text: 'HTML', value: 400 },
    { text: 'Node.js', value: 300 },
    { text: 'Web Development', value: 200 },
    { text: 'Frontend', value: 150 },
    { text: 'Backend', value: 100 },
    { text: 'ReactJS', value: 90 },
    { text: 'Component', value: 80 },
    { text: 'Java', value: 70 },
    { text: 'Angular', value: 60 },
    { text: 'Vue', value: 50 },
  ];

  const options: any = {
    // Setting the number of rotations for the words
    rotations: 1, // Reduced to a single rotation for simplicity
    rotationAngles: [0], // Horizontal words for simplicity

    // Font and style customizations
    fontFamily: 'Verdana, sans-serif', // Using a different font for better readability
    fontWeight: 'bold',
    fontSize: '20px', // Setting a base font size
    color: 'random-light', // Color scheme for words

    // Layout and positioning adjustments
    spiral: 'archimedean', // Adjust the spiral layout type to control word density
    gridSize: 8, // Grid size that impacts word density

    // Additional design tweaks
    backgroundColor: '#ffffff', // White background
    padding: 5, // Padding around the words
    width: 700, // Adjusted width of the WordCloud component
    height: 400, // Adjusted height
    scale: 'log', // Adjust the scale for word size (logarithmic scale)
  };

  return (
    <div style={{ width: '100%', height: '400px', padding: '20px', backgroundColor: '#000' }}>
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default WordCloudComponent;
