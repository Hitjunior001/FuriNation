import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsComponent from '../components/NewsComponent';
import TeamsComponent from '../components/TeamsComponent';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import esportsBanner from '../assets/e-sports-banner.webp';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <section className="relative flex flex-col md:flex-row text-black font-sans overflow-hidden py-20 px-6 bg-white">
        <div className="w-full flex items-center justify-center text-start z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight font-[Orbitron] text-black">
              Explore o universo competitivo dos{' '}
              <span className="text-black underline underline-offset-4 decoration-white">e-sports</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-800 leading-relaxed">
              Descubra partidas ao vivo, estatísticas, novidades e muito mais. Torne-se parte da elite gamer e acompanhe tudo de perto — do seu jeito, no seu ritmo.
            </p>
            <Link
              to="/login"
              className="inline-block bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              Entrar na Plataforma
            </Link>
          </div>
        </div>
      </section>

      <div className="py-6 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="flex gap-16 text-gray-400 text-md whitespace-nowrap font-semibold"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {Array(2).fill([
              '🏆 Torneios',
              '🎧 Comunidade',
              '🎮 Matchmaking',
              '🔥 Ranking',
              '💻 Estatísticas',
              '📡 Transmissões',
              '🎯 Enquetes ao vivo',
            ].map((text, i) => (
              <span key={i} className="hover:text-white transition">{text}</span>
            ))).flat()}
          </motion.div>
        </div>
      </div>

      <NewsComponent />
      <TeamsComponent />

      <section className="py-20 bg-gray-100 text-black px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">O que você pode fazer na plataforma</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-xl mb-2">🔴 Acompanhar partidas ao vivo</h4>
              <p>Assista jogos em tempo real com estatísticas dinâmicas e interações com a torcida.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-xl mb-2">💬 Interagir com a comunidade</h4>
              <p>Participe de chats, enquetes ao vivo e fóruns de discussão sobre seus jogos favoritos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-xl mb-2">🏆 Visualizar rankings e conquistas</h4>
              <p>Acompanhe o desempenho de times e jogadores em tempo real e ganhe conquistas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-xl mb-2">📅 Receber alertas e notificações</h4>
              <p>Seja notificado quando o seu time favorito entrar ao vivo ou publicar novidades.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-xl mb-2">👤 Personalizar seu perfil</h4>
              <p>Monte seu perfil gamer, siga times e desbloqueie recompensas exclusivas.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
