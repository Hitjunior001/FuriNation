import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    address: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/register', form);
      alert(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro no registro');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white text-black rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input name="name" placeholder="Nome" onChange={handleChange} className="w-full p-3 border rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded" />
          <input name="cpf" placeholder="CPF" onChange={handleChange} className="w-full p-3 border rounded" />
          <input name="address" placeholder="Endereço" onChange={handleChange} className="w-full p-3 border rounded" />
          <input name="password" type="password" placeholder="Senha" onChange={handleChange} className="w-full p-3 border rounded" />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-white hover:text-black border border-black transition"
          >
            Registrar
          </button>
        </form>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      <p className="mt-6 text-center">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
