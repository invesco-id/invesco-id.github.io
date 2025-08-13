
import React from 'react';

const StrengthItem: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-primary mt-1">
      {icon}
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-base-text">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const Strengths: React.FC = () => {
    const strengthsData = [
        {
            title: "Jaringan Mitra Luas",
            description: "Jaringan mitra terpercaya di seluruh Indonesia.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-4a6 6 0 00-12 0v4" /></svg>
        },
        {
            title: "Ketepatan Waktu",
            description: "Pengiriman terjamin sesuai jadwal permintaan.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
        {
            title: "Harga Kompetitif",
            description: "Harga terbaik dengan kualitas produk yang terjamin.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1M7 7h1v1H7V7zm0 0h1v1H7V7z" /></svg>
        },
        {
            title: "Standar Internasional",
            description: "Proses pengemasan dan Quality Control (QC) yang ketat.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 3v1m5.657 1.657l-.707.707M21 12h-1M4 12H3m1.657-5.657l.707.707m12.728 0l-.707.707M6.343 17.657l.707-.707m12.728 0l-.707-.707" /></svg>
        },
        {
            title: "Kualitas Terjamin",
            description: "Produk melewati standar mutu yang tinggi.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        }
    ];

    return (
        <section id="strengths" className="py-20 bg-base-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-16">Mengapa Memilih INVESCO?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
                    {strengthsData.map(strength => (
                        <StrengthItem key={strength.title} {...strength} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
