import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
     {/* importing the navbar components on top */}
     <Navbar /> 
     {/* importing Home component */}
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Work shortContent= "fuck the whole mothafcuking planet"
     longContent="suck my mothafucking dick you stupid cunt" />
     <Contact/>
     </div>
  );
}

export default App;
