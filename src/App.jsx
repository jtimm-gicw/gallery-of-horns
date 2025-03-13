import './App.css';
import { useState } from 'react';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import Header from './Header';
import Footer from './Footer';
import  FilterForm from './FilterForm';
import data from './data.json'; // Import JSON data
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedBeast, setSelectedBeast] = useState(null); // Track selected beast
  const [filter, setFilter] = useState("all");
  const filterData = filter=== "all" ? data : data.filter(beast => beast.horns === Number(filter));
  return (
    <div>
      <Header />
      <h1>Horned Beasts</h1>
      <FilterForm setFilter = {setFilter}/>
      <Gallery data={filterData} setSelectedBeast={setSelectedBeast} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />}
  <Footer />
    </div>
  );
}

export default App;
