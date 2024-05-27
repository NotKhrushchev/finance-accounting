import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    const redirect = () => {
        navigate('/');
    };

    return (
        <div
            id={'error-page'}
            className="flex flex-col gap-8 justify-center items-center h-screen text-white bg-[#141526]"
        >
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="text-slate-400">
                <i>{errorMessage}</i>
            </p>
            <Button onClick={redirect} text="Back" />
        </div>
    );
};

export default ErrorPage;
