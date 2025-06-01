import GithubIcon from "../ui/icons/GithubIcon";
import GmailIcon from "../ui/icons/GmailIcon";
import LinkedinIcon from "../ui/icons/LinkedinIcon";

const Socials = () => {
    return (
        <div className="mt-4 flex gap-2">
            <GithubIcon url="https://github.com/AchabNassim" />
            <GmailIcon url="mailto: nassim.aacb@gmail.com" />
            <LinkedinIcon url="https://linkedin.com/in/nassim-achab-97a179301" />
        </div>
    )
}

export default Socials;