import Linkedin from "../img/linkedin.png";
import Twitter from "../img/twitter.png";
import Telegram from "../img/telegram.png";
import Github from "../img/github.png";


const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/adelina-dev/"
                target="_blank"
                rel="noreferrer"
            >                
                <img src={Linkedin} alt="linkedin-link"/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/adel_web_dev"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Twitter} alt="twitter-link"/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://t.me/s_adele "
                target="_blank"
                rel="noreferrer"
            >
                <img src={Telegram} alt="telegram-link"/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500 "
                href="https://github.com/adelinadev"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Github} alt="github"/>
            </a>
        </div>
    )
}

export default SocialMediaIcons;

