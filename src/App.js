import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/header';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skill from './components/Skills/Skill';
import Talk from './components/Talks/Talk';

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Intro/>
      <Skill/>
      <Project/>
      <Blogs/>
      <Talk/>
      <Contact/>
    </div>
  );
}

export default App;
