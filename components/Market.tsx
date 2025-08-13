
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'BUMN & Swasta Nasional', value: 60, fill: '#2E7D32' },
  { name: 'Perusahaan Modal Asing (PMA)', value: 30, fill: '#1E88E5' },
  { name: 'Pasar Ekspor', value: 10, fill: '#FB8C00' },
];

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-lg">
        <p className="font-bold text-base-text">{`${label}`}</p>
        <p className="text-primary">{`Pangsa Pasar : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const Market: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">Dipercaya oleh Berbagai Sektor</h2>
        <div className="max-w-4xl mx-auto h-96 bg-white p-4 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} unit="%" />
              <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 14}} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(247, 249, 252, 0.5)'}}/>
              <Bar dataKey="value" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Market;
