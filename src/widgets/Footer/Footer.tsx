import Icon from '../../shared/ui/Icon/Icon';
import Telegram from '../../shared/assets/Telegram-icon.svg';
import VK from '../../shared/assets/VK-icon.svg';
import Habr from '../../shared/assets/Habr-icon.svg';
import Github from '../../shared/assets/Github-icon.svg';
import Email from '../../shared/assets/Email-icon.svg';

const Footer = () => {
    return (
        <footer className="bg-violet-theme py-8 flex items-center flex-col max-h-[142px]">
            <p className="text-lg mb-5">Contact me!</p>
            <ul className="flex gap-8">
                <li>
                    <a href="https://t.me/iptvnkta" target="_blank">
                        <Icon
                            svg={Telegram}
                            alt="telegram icon"
                            width={30}
                            className="p-1 hover:border-b-2 border-rose-500"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://vk.com/notkhrushchev" target="_blank">
                        <Icon
                            svg={VK}
                            alt="vk icon"
                            width={30}
                            className="hover:border-b-2 border-rose-500"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://career.habr.com/notkhrushchev"
                        target="_blank"
                    >
                        <Icon
                            svg={Habr}
                            alt="habr career icon"
                            width={30}
                            className="p-1 hover:border-b-2 border-rose-500"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/NotKhrushchev" target="_blank">
                        <Icon
                            svg={Github}
                            alt="github icon"
                            width={30}
                            className="p-1 hover:border-b-2 border-rose-500"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:nikitafilemine1@gmail.com" target="_blank">
                        <Icon
                            svg={Email}
                            alt="email icon"
                            width={30}
                            className="hover:border-b-2 border-rose-500"
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
