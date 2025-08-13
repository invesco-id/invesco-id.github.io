
import React from 'react';

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => (
    <div className="h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
        <span className="font-display font-semibold text-gray-500 text-center">{name}</span>
    </div>
);


const Partners: React.FC = () => {
    const partnerNames = [
        "Capital Energi",
        "Sonus Biomass",
        "Energi Jaya Integra",
        "Dt. Agro Multikarya",
        "Hejotekno",
        "Amarta",
        "Mitra Global",
        "Power Source ID",
    ];

    return (
        <section id="partners" className="py-20 bg-base-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">Mitra Strategis Kami</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {partnerNames.map(name => (
                        <PartnerLogo key={name} name={name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
