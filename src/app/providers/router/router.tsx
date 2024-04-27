import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../widgets/MainLayout/MainLayout';
import { Header } from '../../../widgets/Header/Header';
import { Footer } from '../../../widgets/Footer/Footer';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout
                header={<Header />}
                content={<Outlet />}
                footer={<Footer/>}
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
