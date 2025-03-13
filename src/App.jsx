import './App.css';
import { useState } from 'react';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import Header from './Header';
import Footer from './Footer';
import data from './data.json'; // Import JSON data
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedBeast, setSelectedBeast] = useState(null); // Track selected beast

  return (
    <div>
      <Header />
      <h1>Horned Beasts</h1>
      <Gallery data={data} setSelectedBeast={setSelectedBeast} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />}
  <Footer />
    </div>
  );
}

export default App;
