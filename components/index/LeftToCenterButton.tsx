import { FC } from "react";

interface Props {
    buttonRef: any,
    bgColor: string,
}

const LeftToCenterButton: FC<Props> = ({ buttonRef, bgColor }) => {
    return (
        <button ref={buttonRef} className={`${bgColor} text-white rounded-full py-1.5 px-6 relative`} >
            Ver más
        </button >
    );
}

export default LeftToCenterButton