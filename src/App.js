import logo from './logo.svg';
import './App.css';
import Hero from './assets/scripts/Hero';
import Plans from './assets/scripts/Plans';
import Features from './assets/scripts/Features';
import HeroCarouselSmooth from './assets/scripts/HeroCarouselSmooth';

function App() {
  return (
    <div className="App">
      < Hero />
      < HeroCarouselSmooth />
      < Plans />
      < Features />
    </div>
  );
}

export default App;
