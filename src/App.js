import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { Skill } from './components/Skill';

function App() {
  return (
    <div className="App bg-green-500 text-black">
       <Header />
       <HeroSection />
       <Skill />
       <Projects />
    </div>
  );
}

export default App;
