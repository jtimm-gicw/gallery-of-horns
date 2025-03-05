import './App.css';
import React, { useState } from 'react';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import data from './data.json'; // Import JSON data
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null); // Track selected beast

  return (
    <div>
      <h1>Horned Beasts</h1>
      <Gallery data={data} setSelectedBeast={setSelectedBeast} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />}
    </div>
  );
}

export default App;