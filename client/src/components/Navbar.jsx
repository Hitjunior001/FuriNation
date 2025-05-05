import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="bg-black text-white px-6 py-4  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wide text-400 hover:text-gray-300 transition-all">
          E-SPORTS
        </Link>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
          <Link to="/teams" className="relative text-white font-semibold hover:text-gray-300 transition-all">
            Times
            <div className="underline-bar"></div>
            </Link>
            <Link to="/matches" className="relative text-white font-semibold hover:text-gray-300 transition-all">
            Partidas
            <div className="underline-bar"></div>
            </Link>
            <Link to="/news" className="relative text-white font-semibold hover:text-gray-300 transition-all">
            Notícias
            <div className="underline-bar"></div>
            </Link>
            <Link to="/matches" className="relative text-white font-semibold hover:text-gray-300 transition-all">
            Chat ao vivo
            <div className="underline-bar"></div>
            </Link>
          </div>

          
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu} 
            >
            <FaBars className="text-2xl" />
          </button>
        </div>
              {!isLoggedIn ? (
                <>
                <div>

                  <Link
                    to="/login"
                    className="text-white border-0 bg-rounded hover:text-gray-300 m-2 font-semibold px-4 py-2 transition-all"
                  >
                    Entrar
                  </Link>
                  {/* <Link
                    to="/register"
                    className="text-white border border-white rounded hover:bg-white hover:text-black m-2 font-semibold px-4 py-2 transition-all"
                  >
                    Registrar
                  </Link> */}
                </div>
                </>
              ) : (
                <div className="relative">
                  <button 
                    className="flex items-center space-x-2 text-white font-semibold"
                    onClick={toggleMenu} 
                  >
                    <FaUserAlt className="text-xl" />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-black text-white border border-gray-700 rounded-lg shadow-lg">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
                      >
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6 space-y-4">
          <Link 
            to="/teams"
            className="block text-white font-semibold hover:text-gray-300"
          >
            Times
          </Link>
          <Link 
            to="/matches"
            className="block text-white font-semibold hover:text-gray-300"
          >
            Partidas
          </Link>
          <Link 
            to="/news"
            className="block text-white font-semibold hover:text-gray-300"
          >
            Notícias
          </Link>
          <Link 
            to="/livechat"
            className="block text-white font-semibold hover:text-gray-300"
          >
            Chat ao vivo
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="block text-white font-semibold hover:bg-white hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-white font-semibold hover:bg-white hover:text-black"
              >
                Registrar
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block text-white font-semibold hover:bg-white hover:text-black"
            >
              Sair
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
