import { FC } from "react";

const ContactUsBanner: FC = () => {
    return (
        <div className="h-[15vh] w-full relative">
            <img
                className="w-full h-full object-cover"
                alt='bg'
                src='./sample-bg.jpg'
            />
            <div className='absolute inset-0 flex items-center text-center justify-center'>
                <span className='text-4xl text-white font-bold'>
                    ¡​CONTÁCTANOS!
                </span>
            </div>
        </div>
    );
}

export default ContactUsBanner