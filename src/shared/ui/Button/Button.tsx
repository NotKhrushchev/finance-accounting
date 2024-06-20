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
                'border font-medium border-blue-theme rounded px-4 py-2 enabled:hover:border-white transition duration-200',
                { ['border-gray-600 text-gray-600']: disabled },
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
