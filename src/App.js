import './App.css';
import Header from './components/header';
import Intro from './components/Intro/Intro';
import Project from './components/Project/Project';
import Skill from './components/Skills/Skill';

function App() {

  return (
    <div>
      <Header/>
      <Intro/>
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
