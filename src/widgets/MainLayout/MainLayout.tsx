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
                <section className="w-full max-w-[1280px]">{header}</section>
                <section className='w-full'>{content}</section>
                <section>{footer}</section>
            </div>
        </div>
    );
};

export default MainLayout;
