import { FC } from "react";
import { FaLocationDot, FaWhatsapp, FaPhone, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const ContactUsContent: FC = () => {
    return (
        <div className="bg-white w-full 2xl:w-2/3 2xl:mx-auto flex flex-col space-y-4 md:flex-row xl:space-y-0 items-center justify-between p-10 lg:p-24">
            <div className="w-full md:w-2/5 max-w-md flex flex-col">
                <span className="text-3xl font-semibold mb-4">
                    Déjanos tu consulta
                </span>
                <label className="text-lg font-medium">
                    Nombre:
                </label>
                <input type="text" className="bg-gray-100 border border-gray-300 p-2 rounded mb-4" />
                <label className="text-lg font-medium">
                    Correo:
                </label>
                <input type="email" className="bg-gray-100 border border-gray-300 p-2 rounded mb-4" />
                <label className="text-lg font-medium">
                    Mensaje:
                </label>
                <textarea className="bg-gray-100 border border-gray-300 p-2 rounded mb-4 resize-none" rows={4} />
                <button className='bg-green-600 text-white rounded-full py-1.5 px-6 w-fit'>
                    Enviar
                </button>
            </div>
            <div className="w-full md:w-2/5 max-w-md space-y-4">
                <div className="bg-green-600 text-white flex flex-col space-y-2 p-4">
                    <span className="group flex space-x-2 items-center">
                        <span>
                            <FaLocationDot size={20} />
                        </span>
                        <span>
                            Jr. Primero de Mayo N°474, Puno, Peru.
                        </span>
                    </span>
                    <span className="group flex space-x-2 items-center">
                        <span>
                            <FaPhone size={20} />
                        </span>
                        <span>
                            995 343 400
                        </span>
                    </span>
                    <span className="group flex space-x-2 items-center">
                        <span>
                            <FaWhatsapp size={20} />
                        </span>
                        <span>
                            936 026 149
                        </span>
                    </span>
                    <span className="group flex space-x-2 items-center">
                        <span>
                            <AiOutlineMail size={20} />
                        </span>
                        <span>
                            sundayvegan@gmail.com
                        </span>
                    </span>
                </div>
                <div className="w-full h-[30vh]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.78561317848846!2d-70.0188659160872!3d-15.841616330685612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6991313cc119%3A0x1d76c81cf7cb3c7a!2sJr.%201ro%20de%20Mayo%20474%2C%20Puno%2021001!5e0!3m2!1sen!2spe!4v1692719544461!5m2!1sen!2spe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUsContent