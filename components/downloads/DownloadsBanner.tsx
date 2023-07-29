import { FC } from "react";

const DownloadsBanner: FC = () => {
    return (
        <div className="h-[20vh] w-full relative">
            <img
                className="w-full h-full object-cover"
                alt='bg'
                src='./sample-bg.jpg'
            />
            <div className='absolute inset-0 flex flex-col items-center text-center justify-center space-y-4'>
                <span className='text-4xl text-white font-bold'>
                    DESCARGAS
                </span>
                <span className='text-xl text-white font-medium'>
                    Recetas y sugerencias
                </span>
            </div>
        </div>
    );
}

export default DownloadsBanner