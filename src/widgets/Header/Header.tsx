import { NavLink } from 'react-router-dom';

const auth = false;

const NavLinks = () => {
    return (
        <ul className="font-light">
            {auth ? (
                <li className="flex gap-[40px] items-center">
                    <NavLink to={'/history'}>Аналитика</NavLink>
                    <NavLink to={'/analytics'}>История</NavLink>
                </li>
            ) : (
                <li className="flex gap-[40px] items-center">
                    <NavLink
                        to={'/login'}
                        className={'hover:opacity-60 transition'}
                    >
                        sign in
                    </NavLink>
                    <NavLink
                        to={'/registration'}
                        className={
                            'border border-teal-400 rounded p-2 hover:opacity-60 transition'
                        }
                    >
                        sign up
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

const Header = () => {
    return (
        <header className="w-full p-4 flex items-center justify-between font-light">
            <NavLink to={'/'} className="font-bold text-lg text-teal-400">
                FINANCE
            </NavLink>
            <NavLinks />
        </header>
    );
};

export default Header;
