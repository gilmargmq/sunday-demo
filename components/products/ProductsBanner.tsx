import { FC } from "react";

const ProductsBanner: FC = () => {
    return (
        <div className="h-[10vh] w-full relative">
            <img
                className="w-full h-full object-cover"
                alt='bg'
                src='./sample-bg.jpg'
            />
            <div className='absolute inset-0 flex flex-col items-center text-center justify-center space-y-4'>
                <span className='text-4xl text-white font-bold'>
                    PRODUCTOS
                </span>
            </div>
        </div>
    );
}

export default ProductsBanner