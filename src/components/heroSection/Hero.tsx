import ImageContainer from "../ui/imageContainer/imageContainer.tsx";
import GithubIcon from "../ui/icons/GithubIcon";
import GmailIcon from "../ui/icons/GmailIcon";
import LinkedinIcon from "../ui/icons/LinkedinIcon";
import Alien from "../ui/background/space/Alien.tsx";

const HeroSection = () => {
    return (
        <div className="h-auto lg:h-[94%] xl:h-[84%] flex flex-col justify-end align-center text-2xl md:text-4xl text-light-gray-100 font-semibold gap-2.5 lg:gap-0 mb-6 lg:mb-0">
            <ImageContainer
                src="./assets/images/me.webp"
                alt="profile"
                containerClass="hidden lg:block h-[230px] w-[230px] xl:h-[260px] xl:w-[260px] rounded-full"
                imgClass="h-[230px] w-[230px] xl:h-[260px] xl:w-[260px] rounded-full image-shadow animate-float"
            />
            <div className="flex flex-nowrap items-center gap-2 mt-2 lg:mt-14">
                <p className="text-3xl md:text-5xl font-semibold inline-block m-0 p-0 whitespace-nowrap">
                    Hello, I'm 
                    <span className="font-bold tracking-wider" id="myName"> Nassim. </span>
                </p>
                <Alien />
            </div>
            <p className="text-light-gray-200 w-full sm:w-full text-balance lg:mb-1" id="introductiontext">
                <span className="font-bold blue-teal-highlight">Passionate</span> developer with <span className="font-bold blue-teal-highlight"> love</span> for building Elegant, Performant web experiences.
                <br className="block lg:hidden" />
                <span className="font-bold blue-teal-highlight"> Let's connect!</span>
            </p>
            {/* <div className="flex items-center gap-2 mt-1 lg:flex-col lg:items-baseline lg:mt-0"> */}
                {/* <div> */}
                {/* </div> */}
                <div className="flex gap-2 lg:mt-2">
                    <GithubIcon url="https://github.com/AchabNassim" />
                    <GmailIcon url="mailto:nassim.aacb@gmail.com" />
                    <LinkedinIcon url="https://linkedin.com/in/nassim-achab-97a179301" />
                </div>
            {/* </div> */}
        </div>
    )
}

export default HeroSection;