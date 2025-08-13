
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">{children}</h2>
);

const MissionCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="flex justify-center items-center mb-4 text-accent h-12 w-12 mx-auto">
            {icon}
        </div>
        <h3 className="font-display font-semibold text-xl mb-2 text-base-text">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const About: React.FC = () => {
  const missions = [
    {
      title: 'Solusi Terintegrasi',
      description: 'Menyediakan solusi energi yang terintegrasi dari hulu hingga hilir.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-11v11a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1a2 2 0 012 2z" /></svg>
    },
    {
      title: 'Kemitraan Strategis',
      description: 'Membangun kemitraan strategis yang kuat dan berkelanjutan.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: 'Inovasi Berkelanjutan',
      description: 'Mendorong inovasi untuk energi yang lebih bersih dan efisien.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: 'Dampak Positif',
      description: 'Memberikan dampak positif bagi lingkungan dan masyarakat.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 5.068A9.004 9.004 0 0112 3c4.142 0 7.723 2.685 8.945 6.43A8.997 8.997 0 0112 21c-4.142 0-7.723-2.685-8.945-6.43a8.997 8.997 0 013.829-9.502z" /></svg>
    }
  ];

  return (
    <section id="about" className="py-20 bg-base-bg">
      <div className="container mx-auto px-6">
        <SectionTitle>Mitra Energi Andal untuk Masa Depan Berkelanjutan</SectionTitle>
        <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-16">
          <p className="mb-4">
            PT INVESTASI ECOENERGI INDONESIA (INVESCO) adalah perusahaan perdagangan energi yang berdedikasi untuk mendukung transisi menuju masa depan rendah karbon. Kami menyediakan biomassa dan batubara berkualitas tinggi yang memenuhi standar internasional, melayani beragam kebutuhan industri energi dan manufaktur sebagai mitra strategis yang andal dan tepercaya.
          </p>
          <div className="mt-8 p-6 bg-light-bg rounded-lg">
            <h3 className="font-display font-semibold text-2xl text-secondary mb-2">Visi Kami</h3>
            <p className="italic text-gray-600">"Menjadi mitra energi pilihan utama di Indonesia yang mendorong praktik bisnis berkelanjutan dan berkontribusi pada ketahanan energi nasional."</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission) => (
            <MissionCard key={mission.title} icon={mission.icon} title={mission.title} description={mission.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
