import { NavLink } from 'react-router-dom';
import { en_text } from '../../shared/texts/texts';

const r = false;

const NavLinks = () => {
    return (
        <ul>
            {r ? (
                <li className="flex gap-[40px] items-center">
                    <NavLink to={'/history'} className={'opacity-transition'}>
                        {en_text.analytics_link}
                    </NavLink>
                    <NavLink to={'/analytics'} className={'opacity-transition'}>
                        {en_text.history_link}
                    </NavLink>
                </li>
            ) : (
                <li className="flex gap-[40px] items-center">
                    <NavLink to={'/login'} className={'opacity-transition'}>
                        {en_text.sign_in}
                    </NavLink>
                    <NavLink
                        to={'/registration'}
                        className={
                            'opacity-transition border rounded-md p-[8px]'
                        }
                    >
                        {en_text.sign_up}
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

const Header = () => {
    return (
        <header className="w-full p-[24px] flex items-center justify-between font-[400] text-[12px] sm:text-[18px] sm:p-[40px]">
            <NavLink
                to={'/'}
                className="font-[600] p-2 border-2 border-blue-600 rounded-[15px] sm:p-4"
            >
                FINANCE
            </NavLink>
            <NavLinks />
        </header>
    );
};

export default Header;
