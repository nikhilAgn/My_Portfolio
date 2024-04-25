import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App bg-black text-white">
       <Header />
       <HeroSection />
       <Projects />
    </div>
  );
}

export default App;
