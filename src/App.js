import './App.css';
import { MainPage, About, Navbar, Footer, Contact, Projects, Skills, Achievements, } from './components';

function App() {
  return (
    <div className="App">
     <MainPage />
     <Navbar />
     <About/>
     <Skills />
     <Projects/>
     <Achievements/>
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
