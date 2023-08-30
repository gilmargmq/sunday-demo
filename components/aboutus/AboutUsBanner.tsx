import { FC } from "react";

const AboutUsBanner: FC = () => {
    return (
        <div className="h-[15vh] w-full relative">
            <img
                className="w-full h-full object-cover"
                alt='bg'
                src='./sobre-nosotros-banner.jpeg'
            />
            <div className='absolute inset-0 flex items-center text-center justify-center'>
                <span className='text-4xl text-white font-bold'>
                    SOBRE NOSOTROS
                </span>
            </div>
        </div>
    );
}

export default AboutUsBanner