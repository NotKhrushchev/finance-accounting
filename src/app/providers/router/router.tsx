import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../widgets/MainLayout/MainLayout';
import Header from '../../../widgets/Header/Header';
import Footer  from '../../../widgets/Footer/Footer';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import Registration from '../../../features/Registration/ui/Registration';
import Login from '../../../features/Login/ui/Login';

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
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

export default router;
