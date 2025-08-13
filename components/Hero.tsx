
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-light-bg pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/energybg/1920/1080')"}}></div>
        <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight mb-4">
                INVESCO: Trusted Energy Partner for a Low-Carbon Future
            </h1>
            <p className="text-lg md:text-xl text-base-text max-w-3xl mx-auto mb-8">
                Menyediakan solusi perdagangan biomassa dan batubara berstandar internasional sebagai mitra strategis bagi industri energi dan manufaktur.
            </p>
            <a
                href="#products"
                className="bg-primary hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block"
            >
                Jelajahi Produk Kami
            </a>
        </div>
    </section>
  );
};

export default Hero;
