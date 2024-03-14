import { en_text } from '../../shared/texts/texts';
import Page from '../../widgets/Page/Page';
import arrowSVG from '../../shared/assets/arrow-narrow-down-svgrepo-com.svg';

export const HomePage = () => {
    return (
        <Page>
            <div>
                <div className="bg-landing-linear-gradient min-h-[calc(100vh-86px)] sm:min-h-[calc(100vh-143px)] flex flex-col items-center">
                    <div className="w-full max-w-[1280px] px-6 flex flex-col">
                        <h1 className="mt-[40px] slow font-bold text-[50px] leading-tight sm-:mt-[100px] sm-:text-[56px] sm:text-[88px] lg:text-[104px]">
                            {`${en_text.welcome_start}`} <span className='text-[#58c2ec]'>{en_text.consciously}</span> {en_text.welcome_end}
                        </h1>
                    </div>
                    <div className="mt-[auto] mb-[20px] flex flex-col items-center">
                        <img
                            draggable={false}
                            src={arrowSVG}
                            className="w-[40px] moveUpDown sm:w-[60px]"
                        />
                    </div>
                </div>
                <div className="min-h-[50px] bg-[#143d4d]"></div>
            </div>
        </Page>
    );
};
