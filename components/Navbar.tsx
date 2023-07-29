import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pages = [
        {
            name: 'Inicio',
            link: '/'
        },
        {
            name: 'Sobre Nosotros',
            link: './sobre-nosotros'
        },
        {
            name: 'Productos',
            link: './productos'
        },
        {
            name: 'Descargas',
            link: './descargas'
        },
        {
            name: 'Contacto',
            link: './contacto'
        },
    ]

    return (
        <nav className="flex w-full items-center justify-between flex-wrap p-6 top-0 sticky bg-white z-50">
            <div className="flex items-center">
                <img src='./logo.png' className="max-h-10" alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className="text-sm space-y-4 lg:space-y-0 lg:flex-grow lg:space-x-4">
                    {
                        pages.map((page, index) => (
                            <a key={index} href={page.link} className="block lg:inline-block hover:text-orange-500">
                                {page.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar