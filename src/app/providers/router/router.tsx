import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../widgets/MainLayout/MainLayout';
import Header from '../../../widgets/Header/Header';
import Footer  from '../../../widgets/Footer/Footer';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import Registration from '../../../features/Registration/ui/Registration';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout
                header={<Header />}
                content={<Outlet />}
                footer={<Footer />}
            />
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'registration',
                element: <Registration />,
            },
        ],
    },
]);

export default router;
