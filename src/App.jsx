import './App.css';
import './data.json';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
        <Gallery />
        <Footer />
    </div>
  );
}

export default App;
