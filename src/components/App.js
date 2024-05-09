import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message))
      .catch(error => console.error('Error fetching dog image:', error));
  }, []);

  return (
    <div className="container">
      {!dogImage ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" className="dog-image" />
      )}
    </div>
  );
};

export default App;