import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-t border-gray-800">
        <div className="text-start">
          <h3 className="text-2xl font-extrabold text-white mb-4">E-SPORTS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Sobre nós</a></li>
            <li><a href="#" className="hover:underline">Conquistas</a></li>
            <li><a href="#" className="hover:underline">Times gerenciados</a></li>
            <li><a href="#" className="hover:underline">Carreiras</a></li>
            <li><a href="#" className="hover:underline">Missão e Visão</a></li>
          </ul>
        </div>
        <div className="text-start">
          <h4 className="text-lg font-semibold text-white mb-4">Políticas</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
            <li><a href="#" className="hover:underline">Termos de Uso</a></li>
            <li><a href="#" className="hover:underline">Política de Cookies</a></li>
            <li><a href="#" className="hover:underline">Direitos Autorais</a></li>
          </ul>
        </div>

        <div className="text-start mt-50">
          <div className="flex items-start space-x-6 text-xl">
            <a href="https://github.com/Hitjunior001/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/juniorf_047/?next=%2F" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573456715771" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>



      <div className="text-center text-sm text-gray-500 border-t border-gray-800 py-6">
        © 2025 E-SPORTS. Todos os direitos reservados.
      </div>
    </footer>
  );
}
