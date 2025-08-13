
import React from 'react';

const ProductCard: React.FC<{ imgSrc: string; title: string; description: string; }> = ({ imgSrc, title, description }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
        <div className="overflow-hidden h-56">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-base-text">{description}</p>
        </div>
    </div>
);

const Products: React.FC = () => {
    const productData = [
        {
            imgSrc: "https://picsum.photos/seed/woodpellet/400/300",
            title: "Wood Pellet",
            description: "Bahan bakar padat dari limbah kayu terkompresi, efisien dan ramah lingkungan sebagai alternatif batubara."
        },
        {
            imgSrc: "https://picsum.photos/seed/woodchips/400/300",
            title: "Wood Chips",
            description: "Potongan kecil kayu untuk bahan bakar boiler industri, produksi pulp, dan bahan baku wood pellet."
        },
        {
            imgSrc: "https://picsum.photos/seed/palmshell/400/300",
            title: "Cangkang Sawit",
            description: "Limbah padat dari pengolahan kelapa sawit dengan nilai kalor tinggi, diminati pasar domestik dan ekspor."
        },
        {
            imgSrc: "https://picsum.photos/seed/coal/400/300",
            title: "Batu Bara",
            description: "Sumber energi masif dan stabil untuk pembangkit listrik dan berbagai sektor industri dengan harga kompetitif."
        }
    ];

    return (
        <section id="products" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">Produk Energi untuk Setiap Kebutuhan Industri</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productData.map(product => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
