import ProfileImage from "../ui/imageContainer/imageContainer.tsx";
import Socials from "./Socials.tsx";
import Alien from "../ui/background/space/Alien.tsx";

const HeroSection = () => {
    return (
        <div className="h-[100%] flex flex-col justify-center align-center text-3xl md:text-4xl text-light-gray-100 font-semibold gap-0.25 lg:gap-0">
            <ProfileImage
  src="./assets/images/me.webp"
  alt="profile"
  containerClass="hidden lg:block h-[200px] w-[200px] rounded-full bg-glass shadow-xl ring-2 ring-teal-400/30 hover:ring-blue-400/40 transition-all duration-300"
  imgClass="h-[200px] w-[200px] rounded-full shadow-[0_8px_32px_0_rgba(56,189,248,0.18),0_2px_8px_0_rgba(20,184,166,0.12)]"
/>
            <div className="flex flex-nowrap items-center gap-1.5 mt-2 lg:mt-14">
                <p className="text-4xl md:text-5xl font-semibold inline-block m-0 p-0 whitespace-nowrap">
                    Hello, I'm 
                    <span className="font-bold tracking-wider" id="myName"> Nassim. </span>
                </p>
                <Alien />
            </div>
            <p className="text-light-gray-200 w-[98%] sm:w[100%]" id="introductiontext">
                <span className="text-teal-500 font-bold">Full-Stack</span> developer based in <span className="text-blue-600 font-bold">Morocco</span>.
                I write logic that moves <span className="text-teal-500 font-bold">pixels</span> and <span className="text-teal-500 font-bold">data</span>
                <span>,</span> <span className="font-bold text-gradient"> Let's connect!</span>
            </p>
            <Socials />
        </div>
    )
}

export default HeroSection;