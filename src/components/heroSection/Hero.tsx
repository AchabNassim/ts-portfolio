import ProfileImage from "../ui/imageContainer/imageContainer.tsx";
import Socials from "./Socials.tsx";
import Alien from "../ui/background/space/Alien.tsx";

const HeroSection = () => {
    return (
        <div className="h-auto lg:h-[94%] xl:h-[84%] flex flex-col justify-end align-center text-2xl md:text-4xl text-light-gray-100 font-semibold gap-0.25 lg:gap-0">
            <ProfileImage
                src="./assets/images/me.webp"
                alt="profile"
                containerClass="hidden lg:block h-[230px] w-[230px] xl:h-[260px] xl:w-[260px] rounded-full"
                imgClass="h-[230px] w-[230px] xl:h-[260px] xl:w-[260px] rounded-full image-shadow animate-float"
            />
            <div className="flex flex-nowrap items-center gap-1.5 mt-2 lg:mt-14">
                <p className="text-3xl md:text-5xl font-semibold inline-block m-0 p-0 whitespace-nowrap">
                    Hello, I'm 
                    <span className="font-bold tracking-wider" id="myName"> Nassim. </span>
                </p>
                <Alien />
            </div>
            <p className="text-light-gray-200 w-[100%] sm:w-[100%] text-balance" id="introductiontext">
                <span className="font-bold blue-teal-highlight">Passionate </span> developer  with <span className="font-bold teal-highlight">love</span> for building elegant, performant web apps.
                <br />
                <span className="font-bold blue-teal-highlight"> Let's connect!</span>
            </p>
            <Socials />
        </div>
    )
}

export default HeroSection;