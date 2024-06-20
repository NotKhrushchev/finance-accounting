import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import InputForm from '../../../shared/ui/TextFieldForm/InputForm/InputForm';
import Button from '../../../shared/ui/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '../model/types/zodRegSchema';

export interface IRegistrationForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Registration = () => {
    const methods = useForm<IRegistrationForm>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const {
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = methods;

    const { name, email, password, confirmPassword } = watch();
    const isFormFilled = name && email && password && confirmPassword;

    // Иммитация запроса на сервер
    const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(data), 3000);
        });

        const result = await promise;

        console.log(result);
    };

    return (
        <div className={'flex flex-col items-center mt-[-20px]'}>
            <FormProvider {...methods}>
                <form
                    className={
                        'w-full table:w-[400px] flex flex-col items-center'
                    }
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className={'text-xl table:text-2xl mb-6'}>Sign up</h1>
                    <div className={'w-full flex flex-col gap-2'}>
                        <InputForm
                            label={'Name'}
                            type={'text'}
                            name={'name'}
                            error={errors?.name?.message}
                            disabled={isSubmitting}
                        />
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
                        <InputForm
                            label={'Confirm password'}
                            type={'password'}
                            name={'confirmPassword'}
                            autoComplete={'new-password'}
                            error={errors?.confirmPassword?.message}
                            disabled={isSubmitting}
                        />
                    </div>
                    <Button
                        type={'submit'}
                        text={'sign up'}
                        className={'w-full mt-10'}
                        disabled={!isFormFilled || isSubmitting}
                    />
                </form>
            </FormProvider>
        </div>
    );
};

export default Registration;
