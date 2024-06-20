import { useLayoutEffect, useState } from 'react';

interface IMatches {
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
}

const queries = [
    '(max-width: 767px)',
    '(min-width: 768px) and (max-width: 1023px)',
    '(min-width: 1024px)',
];

export const useMatchMedia = (): IMatches => {
    const mediaQueryList = queries.map((query) => matchMedia(query));
    const getMatches = () => mediaQueryList.map((mql) => mql.matches);

    const [matches, setMatches] = useState<boolean[]>(getMatches());

    useLayoutEffect(() => {
        const handler = () => setMatches(getMatches());

        mediaQueryList.forEach((query) => {
            query.addEventListener('change', handler);
        });
        return () =>
            mediaQueryList.forEach((query) => {
                query.removeEventListener('change', handler);
            });
    });

    return {
        isMobile: matches[0],
        isTablet: matches[1],
        isDesktop: matches[2],
    };
};
