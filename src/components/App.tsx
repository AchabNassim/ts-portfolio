import HeroSection from "./heroSection/Hero";
import SkillSection from "./aboutSection/About";
import Projects from "./projectsSection/Projects";

function App() {
  return (
    <div id="app" className="min-h-auto lg:min-h-screen flex justify-center items-center my-10 lg:my-0">
      <div id="appContainer" className="min-h-screen w-[95vw] lg:w-screen flex flex-col justify-baseline items-center gap-4 lg:gap-0 lg:h-screen lg:flex-row lg:justify-around lg:items-center">
        <div id="heroContainer" className="w-full h-auto lg:w-[45%] lg:h-[96%] mx-2">
          <HeroSection />
        </div>
        <div id="infoContainer" className="flex flex-col justify-center gap-4 w-full h-auto lg:w-[34%] lg:h-[96%] mx-2">
          <SkillSection />
          <Projects />
        </div>
      </div> 
    </div>
  )
}

export default App
