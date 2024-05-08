import { cn } from "../../lib/cn/cn";

interface IButtonProps {
    onClick: () => void,
    text?: string,
    className?: string
}

export const Button = (props: IButtonProps) => {
    const {text, className, onClick} = props;
    return (
        <button className={cn('border border-fuchsia-500 rounded px-4 py-2', className)} onClick={onClick}>
            {text}
        </button>
    );
};