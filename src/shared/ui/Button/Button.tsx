import { cn } from '../../lib/cn/cn';

interface IButtonProps {
    onClick?: () => void;
    text?: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
}

const Button = (props: IButtonProps) => {
    const { text, className, type, disabled, onClick } = props;
    return (
        <button
            className={cn(
                'border font-medium border-fuchsia-500 rounded px-4 py-2 enabled:hover:border-white transition duration-200',
                { ['border-gray-theme text-gray-theme']: disabled },
                className,
            )}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
