import { FC } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
    children: JSX.Element | JSX.Element[];
}


const Layout: FC<Props> = ({ children }) => {

    return (
        <div className='min-h-screen relative'>
            <Navbar />
            <main className='pb-14'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout