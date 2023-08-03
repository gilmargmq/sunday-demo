import { FC } from "react";

const locationIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        version="1.1"
        viewBox="0 0 395.71 395.71"
        xmlSpace="preserve"
    >
        <path d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 002.471 1.255 3.08 3.08 0 002.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z"></path>
    </svg>
)

const whatsappIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        version="1.1"
        viewBox="0 0 308 308"
        xmlSpace="preserve"
    >
        <g>
            <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 011.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z"></path>
            <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 004.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 00-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 00-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z"></path>
        </g>
    </svg>
)

const mailIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
    >
        <path d="M461.913 83.478H50.087C22.467 83.478 0 105.974 0 133.565v244.87c0 27.622 22.498 50.087 50.087 50.087h411.826c27.578 0 50.087-22.453 50.087-50.087v-244.87c0-27.581-22.457-50.087-50.087-50.087zm-1.35 33.392L267.806 309.628c-6.527 6.526-17.085 6.526-23.612 0-5.891-5.893-184.267-184.268-192.757-192.758h409.126zM33.391 377.085V146.046L148.91 261.565 33.391 377.085zm29.176 18.045l109.954-109.954 48.061 48.061c19.526 19.528 51.304 19.529 70.834 0l48.061-48.061L449.432 395.13H62.567zm416.042-18.045l-115.52-115.52 115.519-115.519v231.039z"></path>
    </svg>
)

const facebookIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="-5 0 20 20"
    >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="currentColor" transform="translate(-385 -7399)">
                <g transform="translate(56 160)">
                    <path d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9h3.898z"></path>
                </g>
            </g>
        </g>
    </svg>
)

const IndexContactUs: FC = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row items-center space-y-8 justify-center p-12">
            <div className="w-full xl:w-1/3 flex flex-col space-y-6">
                <span className='text-4xl text-gray-600 font-bold'>
                    CONTACTO
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        {locationIcon}
                    </span>
                    <span className="group-hover:text-green-600">
                        Jr. Jorge Basadre N°111, Puno, Peru
                    </span>
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        {whatsappIcon}
                    </span>
                    <span className="group-hover:text-green-600">
                        995 343 400
                    </span>
                </span>
                <span className="group flex space-x-2 items-center">
                    <span className="text-green-600 group-hover:text-orange-500">
                        {mailIcon}
                    </span>
                    <span className="group-hover:text-green-600">
                        sundayvegan@gmail.com
                    </span>
                </span>
                <div className="flex space-x-2">
                    <a target="_blank" href="https://www.facebook.com/Sundayvegan" className="bg-green-600 rounded-full flex items-center justify-center text-white p-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer">
                        {facebookIcon}
                    </a>
                    <div className="bg-green-600 rounded-full flex items-center justify-center text-white p-2 hover:text-green-600 hover:bg-gray-200 cursor-pointer">
                        {whatsappIcon}
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-1/4 h-[30vh]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.5782667358318!2d-70.02812681116862!3d-15.840134781872235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69eb160ec5dd%3A0x4ddcde1ed69150a8!2sMunicipalidad%20de%20Puno!5e0!3m2!1ses-419!2spe!4v1688433541603!5m2!1ses-419!2spe"
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