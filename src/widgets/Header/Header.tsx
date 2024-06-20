import { NavLink } from 'react-router-dom';
import { ProfileInfo } from '../../entities/ProfileInfo/ProfileInfo';
import Icon from '../../shared/ui/Icon/Icon';
import BurgerMenu from '../../shared/assets/BurgerMenu-icon.svg';
import { useState } from 'react';
import { DrawerMenu } from '../DrawerMenu/DrawerMenu';

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

export const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const onOpenDrawer = () => {
        setDrawerOpen(true);
    };

    const onCloseDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <header className="w-full py-4 px-6 flex items-center justify-between font-light">
            <div>
                <ProfileInfo />
                <NavLink to={'/'} className="font-bold text-2xl">
                    Finance
                </NavLink>
            </div>
            <Icon
                svg={BurgerMenu}
                alt="burger-menu"
                clickable
                onClick={onOpenDrawer}
                width={36}
            />
            <DrawerMenu isOpen={isDrawerOpen} setClose={onCloseDrawer} />
        </header>
    );
};
