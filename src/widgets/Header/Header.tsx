import { NavLink, useNavigate } from 'react-router-dom';
import { ProfileInfo } from '../../entities/ProfileInfo/ProfileInfo';
import Icon from '../../shared/ui/Icon/Icon';
import Gear from '../../shared/assets/Gear-icon.svg'

export const Header = () => {
    const navigate = useNavigate();

    const navigateToSettings = () => {
        navigate('/settings');
    };

    return (
        <header className="w-full py-4 px-6 flex justify-between font-light">
            <div>
                <ProfileInfo />
                <NavLink to={'/'} className="font-bold text-2xl">
                    Finance
                </NavLink>
            </div>
            <Icon
                svg={Gear}
                alt="settings-bth"
                clickable
                onClick={navigateToSettings}
                width={22}
                className='p-1 mb-1 self-end bg-gray-800 rounded-full'
            />
        </header>
    );
};
