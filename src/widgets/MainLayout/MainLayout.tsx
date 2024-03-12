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
        <div className="flex flex-col items-center text-white bg-[#141526]">
            <div className="w-full max-w-[1280px]">
                <section className="min-w-full mx-auto">{header}</section>
                <div className="flex w-full grow min-h-screen">
                    <section className="max-w-[1440px] mx-auto">
                        {content}
                    </section>
                </div>
                <section>{footer}</section>
            </div>
        </div>
    );
};

export default MainLayout;
