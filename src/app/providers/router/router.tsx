import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../widgets/MainLayout/MainLayout';
import { Header } from '../../../widgets/Header/Header';
import Footer from '../../../widgets/Footer/Footer';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import Login from '../../../features/Login/ui/Login';
import { RegistrationPage } from '../../../pages/RegistrationPage/RegistrationPage';
import HomePage from '../../../pages/HomePage/HomePage';

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
                path: '',
                element: <HomePage />,
            },
            {
                path: 'registration',
                element: <RegistrationPage />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

export default router;
