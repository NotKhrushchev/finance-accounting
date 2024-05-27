import { ReactNode } from 'react';
import { cn } from '../../shared/lib/cn/cn';

interface PageProps {
    children: ReactNode;
    className?: string;
}

const Page = (props: PageProps) => {
    const { children, className } = props;

    return <main className={cn("flex min-h-[calc(100vh-74px)] w-full flex-col", className)}>{children}</main>;
};

export default Page;
