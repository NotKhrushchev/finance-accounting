import { cn } from '../../lib/cn/cn';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    svg: string;
    alt: string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

const Icon = (props: IconProps) => {
    const { clickable, svg, className, alt, width = 20, height = 20 } = props;

    const icon = (
        <img
            alt={alt}
            width={width}
            height={height}
            src={svg}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cn(
                    `bg-none h-min hover:opacity-70 transition border-none outline-none`,
                    className
                )}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }

    return icon;
};

export default Icon;
