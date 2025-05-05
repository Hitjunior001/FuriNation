import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const newsData = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    id: 2,
    title: 'Sed do Eiusmod Tempor',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  },
  {
    id: 3,
    title: 'Consectetur Adipiscing Elit',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
];

export default function NewsComponent() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-4">Últimas Notícias</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {newsData.map((item, index) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white text-black rounded-lg shadow-md overflow-hidden transition-all duration-300"
                >
                <img src={item.image} alt="Notícia" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.text}</p>
                    <Link
                    to={`/news/${item.id}`}
                    className="text-black font-semibold hover:underline"
                    >
                    Ler mais
                    </Link>
                </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
