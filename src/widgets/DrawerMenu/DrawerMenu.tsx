import { cn } from '../../shared/lib/cn/cn';
import Icon from '../../shared/ui/Icon/Icon';
import Cross from '../../shared/assets/Cross-icon.svg';
import { NavLink } from 'react-router-dom';

interface IDrawerMenu {
    isOpen: boolean;
    setClose: () => void;
}

const NavLinks = () => {
    const auth = false;
    return (
        <ul className="font-light">
            {auth ? (
                <li className="flex gap-[40px] flex-col items-center">
                    <NavLink to={'/history'}>History</NavLink>
                    <NavLink to={'/analytics'}>Analytics</NavLink>
                </li>
            ) : (
                <li className="flex flex-col gap-[40px] items-center">
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

export const DrawerMenu = (props: IDrawerMenu) => {
    const { isOpen, setClose } = props;

    return (
        <div
            className={cn(
                'min-h-screen flex flex-col justify-center transition-all duration-100 left-[100%] top-0 absolute w-screen bg-black',
                { ['left-0']: isOpen },
            )}
        >
            <Icon
                className="absolute top-[17px] right-[17px]"
                clickable
                svg={Cross}
                onClick={setClose}
                alt="cross"
                width={48}
            />
            <NavLinks />
        </div>
    );
};
