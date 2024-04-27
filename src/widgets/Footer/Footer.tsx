import { Icon } from "../../shared/ui/Icon/Icon";
import Telegram from '@/shared/assets/Telegram-icon.svg'

export const Footer = () => {
    return (
        <footer className=" bg-violet-900 py-20 flex items-center flex-col">
            <p className="text-lg">Social</p>
            <hr className="w-[80%]"/>
            <ul>
                <li>
                    <Icon Svg={Telegram}>
                </li>
            </ul>
        </footer>
    );
};