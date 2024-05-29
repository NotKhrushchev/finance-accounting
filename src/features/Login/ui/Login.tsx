import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import InputForm from '../../../shared/ui/TextFieldForm/InputForm/InputForm';
import Page from '../../../widgets/Page/Page';
import Button from '../../../shared/ui/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../model/types/zodLogSchema';

export interface ILoginForm {
    email: string;
    password: string;
}

const Login = () => {
    const methods = useForm<ILoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const {
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = methods;

    const { email, password } = watch();
    const isFormFilled = email && password;

    // Иммитация запроса на сервер
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(data), 3000);
        });

        const result = await promise;

        console.log(result);
    };

    return (
        <Page className={'justify-center'}>
            <div className={'flex flex-col items-center mt-[-20px]'}>
                <FormProvider {...methods}>
                    <form
                        className={'w-[400px] flex flex-col items-center'}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className={'text-2xl mb-6'}>Sign up</h1>
                        <div className={'w-full flex flex-col gap-2'}>
                            <InputForm
                                label={'Email'}
                                type={'text'}
                                name={'email'}
                                autoComplete={'email'}
                                error={errors?.email?.message}
                                disabled={isSubmitting}
                            />
                            <InputForm
                                label={'Password'}
                                type={'password'}
                                name={'password'}
                                autoComplete={'new-password'}
                                error={errors?.password?.message}
                                disabled={isSubmitting}
                            />
                        </div>
                        <Button
                            type={'submit'}
                            text={'sign in'}
                            className={'w-full mt-10'}
                            disabled={!isFormFilled || isSubmitting}
                        />
                    </form>
                </FormProvider>
            </div>
        </Page>
    );
};

export default Login;
