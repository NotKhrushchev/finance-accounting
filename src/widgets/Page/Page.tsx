import { ReactNode } from 'react';

interface PageProps {
    children: ReactNode;
}

const Page = (props: PageProps) => {
    const { children } = props;
    return <main className="flex h-full w-full flex-col">{children}</main>;
};

export default Page;
