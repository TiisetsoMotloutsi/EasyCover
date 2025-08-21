import logo from './logo.svg';
import './App.css';
import Hero from './assets/scripts/Hero';
import Plans from './assets/scripts/Plans';
import Features from './assets/scripts/Features';
import HeroCarouselSmooth from './assets/scripts/HeroCarouselSmooth';
import Footer from './assets/scripts/Footer';
import Navbar from './assets/scripts/Navbar';


function App() {
  return (
    <div className="App">
      < Navbar />
        < Hero />
      < HeroCarouselSmooth />
      < Plans />
      < Features />
      <Footer/>

    </div>
  );
}

export default App;