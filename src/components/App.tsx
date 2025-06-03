import HeroSection from "./heroSection/Hero";
import SkillSection from "./aboutSection/About";
import Projects from "./projectsSection/Projects";

function App() {
  return (
    <div id="app" className="min-h-auto lg:min-h-screen flex justify-center items-center my-2 lg:my-0 py-4 lg:py-0">
      <div id="appContainer" className="min-h-full w-[90vw] xl:w[60vw] lg:w-screen flex flex-col justify-baseline items-center gap-4 lg:gap-20 lg:h-screen lg:flex-row lg:justify-center lg:items-center">
        <div id="heroContainer" className="w-[96%] h-auto lg:w-[44%] xl:w-[38%] lg:h-[94%] mx-2 animate-appear-bottom">
          <HeroSection />
        </div>
        <div id="infoContainer" className="flex flex-col justify-center gap-4 w-[96%] h-auto lg:w-[34%] xl:w-[30%] lg:h-[94%] mx-2 animate-appear-bottom">
          <SkillSection />
          <Projects />
        </div>
      </div> 
    </div>
  )
}

export default App
