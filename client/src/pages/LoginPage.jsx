import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { email, password };
    const axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
      }
    };

    try {
      const res = await axios.post('http://localhost:3002/api/login', data, axiosConfig, { withCredentials: true });
      localStorage.setItem('access_token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro no login');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white text-black rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-white hover:text-black border border-black transition"
          >
            Entrar
          </button>
        </form>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <p className="mt-6 text-center">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Registrar-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
