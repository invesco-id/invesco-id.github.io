
import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#90CAF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#FFCC80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-display font-bold text-xl text-white">INVESCO</span>
    </div>
  );

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Produk', href: '#products' },
        { name: 'Kekuatan Kami', href: '#strengths' },
    ];
    
    return (
        <footer id="contact" className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <Logo />
                        <p className="mt-4 text-gray-400 max-w-xs">Trusted Energy Partner for a Low-Carbon Future.</p>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-display font-semibold tracking-wider uppercase">Navigasi</h3>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="font-display font-semibold tracking-wider uppercase">Kontak</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">&#9658;</span>
                                <span>Jalan Panembahan Senopati no. 17, Gondokusuman, Yogyakarta</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">&#9658;</span>
                                <a href="mailto:invesco.general@gmail.com" className="hover:text-white">invesco.general@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                     <div className="md:col-span-3">
                        <h3 className="font-display font-semibold tracking-wider uppercase">Media Sosial</h3>
                        <div className="flex mt-4 space-x-4">
                             <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.25,8.375A3.375,3.375,0,0,0,17.875,5H6.125A3.375,3.375,0,0,0,2.75,8.375v7.25A3.375,3.375,0,0,0,6.125,19h11.75A3.375,3.375,0,0,0,21.25,15.625V8.375ZM8.375,15.625a1.125,1.125,0,1,1,1.125-1.125A1.125,1.125,0,0,1,8.375,15.625Zm0-4.5A1.125,1.125,0,1,1,9.5,10,1.125,1.125,0,0,1,8.375,11.125Zm4.5,4.5a1.125,1.125,0,1,1,1.125-1.125A1.125,1.125,0,0,1,12.875,15.625Zm4.5-4.5a1.125,1.125,0,1,1,1.125-1.125A1.125,1.125,0,0,1,17.375,11.125Zm0-4.5a1.125,1.125,0,1,1,1.125-1.125A1.125,1.125,0,0,1,17.375,6.625Zm-4.5,0a1.125,1.125,0,1,1,1.125-1.125A1.125,1.125,0,0,1,12.875,6.625Z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
    <div className="container mx-auto px-6 text-center text-sm text-gray-500">
        <span>
            &copy; {new Date().getFullYear()} PT INVESTASI ECOENERGI INDONESIA. All Rights Reserved.
        </span>
        <span className="mx-2">|</span>
        <span>
            Developed by <a 
                href="https://farrosfr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
            >
                FarrosFR
            </a>
        </span>
    </div>
</div>
        </footer>
    );
};

export default Footer;
