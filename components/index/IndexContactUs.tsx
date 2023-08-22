import { FC } from "react";
import { FaLocationDot, FaWhatsapp, FaPhone, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const IndexContactUs: FC = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row items-center space-y-8 justify-center p-12">
            <div className="w-full xl:w-1/3 flex flex-col space-y-6">
                <span className='text-4xl text-gray-600 font-bold'>
                    CONTACTO
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        <FaLocationDot size={20} />
                    </span>
                    <span className="group-hover:text-green-600">
                        Jr. Primero de Mayo N°474, Puno, Peru.
                    </span>
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        <FaPhone size={20} />
                    </span>
                    <span className="group-hover:text-green-600">
                        995 343 400
                    </span>
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        <FaWhatsapp size={20} />
                    </span>
                    <span className="group-hover:text-green-600">
                        936 026 149
                    </span>
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        <AiOutlineMail size={20} />
                    </span>
                    <span className="group-hover:text-green-600">
                        sundayvegan@gmail.com
                    </span>
                </span>
                <div className="flex space-x-2">
                    <a target="_blank"
                        href="https://www.facebook.com/Sundayvegan"
                        className="bg-green-600 rounded-full flex items-center justify-center text-white p-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer"
                        rel="noopener noreferrer">
                        <FaFacebookF size={20} />
                    </a>

                    <a target="_blank"
                        href="https://wa.me/51936026149"
                        className="bg-green-600 rounded-full flex items-center justify-center text-white p-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer"
                        rel="noopener noreferrer">
                        <FaWhatsapp size={20} />
                    </a>
                    
                    <div className="bg-green-600 rounded-full flex items-center justify-center text-white p-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer">
                        <FaTiktok size={20} />
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-1/4 h-[30vh]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.78561317848846!2d-70.0188659160872!3d-15.841616330685612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6991313cc119%3A0x1d76c81cf7cb3c7a!2sJr.%201ro%20de%20Mayo%20474%2C%20Puno%2021001!5e0!3m2!1sen!2spe!4v1692719544461!5m2!1sen!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div >
    );
}

export default IndexContactUs