import { FC, useEffect, useState } from "react";
import LeftToCenterButton from "./LeftToCenterButton";

interface Props {
    addToRefs: Function
}

const sample_imgs = [
    './index-banner-1.jpg',
    './index-banner-2.jpeg'
]

const IndexBanner: FC<Props> = ({ addToRefs }) => {

    const autoSlideInterval = 5000

    const [curr, setCurr] = useState(0)

    const next = () =>
        setCurr((curr) => (curr === sample_imgs.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="h-[91vh] w-full shadow-xl overflow-hidden relative">
            <div
                className="flex h-full w-full relative"
                style={{ transform: `translateX(-${curr * (100 / sample_imgs.length)}%)`, width: `${sample_imgs.length * 100}%` }}
            >
                {sample_imgs.map(
                    (image: any, index) => {
                        return <div key={index} className={`h-full w-full relative`}>
                            <img
                                className={`w-full h-full object-cover transition-opacity ease-out duration-200 ${curr === index ? "opacity-100" : "opacity-0"}`}
                                alt={'sample'}
                                src={image}
                            />
                        </div>
                    }
                )
                }
            </div>

            <div className='absolute inset-x-0 top-1/4 flex flex-col items-center text-center justify-center space-y-4'>
                <span className='text-4xl font-bold text-green-600'>
                    SunDay Tienda Vegan
                </span>
                <span>
                    Sub título
                </span>
                <LeftToCenterButton buttonRef={addToRefs} bgColor='bg-green-600' />
            </div>
        </div>
    );
}

export default IndexBanner