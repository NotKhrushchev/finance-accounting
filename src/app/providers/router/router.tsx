import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../widgets/MainLayout/MainLayout';
import Header from '../../../widgets/Header/Header';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout
                header={<Header />}
                content={<Outlet />}
                footer={<footer></footer>}
            />
        ),
        children: [
            {
                path: '',
                lazy: () =>
                    import('../../../pages/HomePage/HomePage').then(
                        ({ HomePage }) => ({ Component: HomePage }),
                    ),
            },
        ],
    },
]);

export default router;
