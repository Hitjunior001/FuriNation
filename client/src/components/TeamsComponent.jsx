import React from 'react';
import { motion } from 'framer-motion';

import csgoImg from '../assets/cs2.webp';
import rocketImg from '../assets/rocket.jpg';
import lolImg from '../assets/lol.jpg';
import valorantImg from '../assets/valorant.jpg';

const teams = [
  { name: 'CS:GO', image: csgoImg },
  { name: 'Rocket', image: rocketImg },
  { name: 'LoL', image: lolImg },
  { name: 'Valorant', image: valorantImg },
];

export default function TeamsComponent() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 border-b border-black pb-4 uppercase tracking-wide">
          Times mais buscados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-52 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{team.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
