import { cn } from '../../lib/cn/cn';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = (props: IconProps) => {
    const { clickable, Svg, className, width = 20, height = 20 } = props;

    const icon = <Svg className={className} width={width} height={height} />;

    if (clickable) {
        return (
            <button
                type="button"
                className={cn('bg-none border-none outline-none')}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }

    return icon;
};
