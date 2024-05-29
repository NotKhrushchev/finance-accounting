import {
    HTMLInputAutoCompleteAttribute,
    InputHTMLAttributes,
    useState,
} from 'react';
import { cn } from '../../../lib/cn/cn';
import { Controller } from 'react-hook-form';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>;

interface IInputProps extends HTMLInputProps {
    name: string;
    isError?: boolean;
    label?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    error?: string;
    disabled?: boolean;
}

const InputForm = (props: IInputProps) => {
    const {
        label,
        isError,
        disabled,
        id,
        name,
        type,
        autoComplete,
        error,
        ...otherProps
    } = props;
    const [isFocus, setFocus] = useState(false);

    return (
        <Controller
            name={name}
            render={({ field: { onChange, value } }) => (
                <div className={cn('cursor-text relative w-full h-20', {['pointer-events-none']: disabled})}>
                    <label className="text-[15px] leading-6">
                        <input
                            className={cn(
                                'w-full h-14 border-gray-theme border-b-2 bg-inherit pt-5 px-1 transition duration-500 font-medium',
                                { ['text-gray-theme duration-100']: disabled },
                                { ['border-blue-theme']: isFocus },
                                { ['border-red-theme']: isError },
                            )}
                            type={type}
                            autoComplete={autoComplete}
                            id={id}
                            name={name}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            onChange={onChange}
                            value={value || ''}
                            disabled={disabled}
                            {...otherProps}
                        ></input>
                        <span
                            className={cn(
                                ' text-gray-theme absolute top-6 left-1 pointer-events-none transition-all duration-200 font-medium',
                                { ['top-2 text-xs text-blue-theme']: isFocus },
                                { ['top-2 text-xs']: value },
                                { [' text-red-theme']: isError },
                            )}
                        >
                            {label}
                        </span>
                    </label>
                    {error && (
                        <span className="px-1 text-sm text-red-theme font-light transition-all duration-500">
                            {error}
                        </span>
                    )}
                </div>
            )}
        ></Controller>
    );
};

export default InputForm;
