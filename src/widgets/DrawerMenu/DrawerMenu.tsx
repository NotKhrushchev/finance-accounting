import { cn } from '../../shared/lib/cn/cn';
import Icon from '../../shared/ui/Icon/Icon';
import Cross from '../../shared/assets/Cross-icon.svg';

interface IDrawerMenu {
    isOpen: boolean;
    setClose: () => void;
}

export const DrawerMenu = (props: IDrawerMenu) => {
    const { isOpen, setClose } = props;

    return (
        <div
            className={cn(
                'min-h-screen transition-all duration-100 left-[100%] top-0 absolute w-screen bg-black',
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
        </div>
    );
};
