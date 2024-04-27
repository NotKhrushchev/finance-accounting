import { ReactElement } from 'react';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    footer: ReactElement;
}

const MainLayout = (props: MainLayoutProps) => {
    const { header, content, footer } = props;

    return (
        <div className="text-white bg-[#141526]">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full max-w-[1280px]">{header}</div>
                <div className="w-full">{content}</div>
                <div className='w-full'>{footer}</div>
            </div>
        </div>
    );
};

export default MainLayout;
