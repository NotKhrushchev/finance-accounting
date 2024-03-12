import { NavLink } from 'react-router-dom';
import { en_text } from '../../shared/texts/texts';

const NavLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to={'/history'} className={'opacity-transition'}>
                    {en_text.history_link}
                </NavLink>
            </li>
        </ul>
    );
};

const Header = () => {
    return (
        <header className="flex items-center justify-between h-[70px] p-[16px] font-[500]">
            <div>Logo</div>
            <NavLinks />
        </header>
    );
};

export default Header;
