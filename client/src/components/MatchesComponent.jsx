import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const matches = [
  {
    id: 1,
    game: 'CS:GO',
    status: 'ao_vivo',
    timeA: 'FURIA',
    timeB: 'NAVI',
    horario: '13:00',
  },
  {
    id: 2,
    game: 'CS:GO',
    status: 'encerrada',
    timeA: 'MIBR',
    timeB: 'Astralis',
    horario: '11:00',
    placar: '16x5'
  },
  {
    id: 3,
    game: 'Valorant',
    status: 'ao_vivo',
    timeA: 'LOUD',
    timeB: 'Sentinels',
    horario: '14:00',
  },
  {
    id: 4,
    game: 'LoL',
    status: 'encerrada',
    timeA: 'T1',
    timeB: 'G2',
    horario: '10:00',
    placar: '1x2'
  },
  {
    id: 5,
    game: 'CS:GO',
    status: 'ao_vivo',
    timeA: 'Imperial',
    timeB: 'BIG',
    horario: '15:30',
  },
  {
    id: 6,
    game: 'LoL',
    status: 'ao_vivo',
    timeA: 'FNC',
    timeB: 'DRX',
    horario: '16:00',
  },
];

export default function MatchesComponent({ matchesList = matches }) {
  const perGame = matchesList.reduce((acc, match) => {
    if (!acc[match.game]) acc[match.game] = [];
    acc[match.game].push(match);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <section className=" text-black py-10 px-4 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center">🎮 Partidas</h2>

        {Object.keys(perGame).map((gameName) => (
          <div key={gameName} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">{gameName}</h3>

            <div className="grid md:grid-cols-2 gap-5">
              {perGame[gameName]
                .filter((p) => p.status === 'ao_vivo')
                .map((p) => (
                  <div key={p.id} className="bg-green-800 rounded-lg p-5 shadow-md border border-green-500">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-lg">
                        {p.timeA} vs {p.timeB}
                      </div>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">AO VIVO</span>
                    </div>
                    <div className="text-sm text-gray-200 mb-2">Horário: {new Date().toLocaleTimeString('pt-BR',{hour: '2-digit', minute: '2-digit'})}</div>
                    <Link
                      to={`/livechat/${p.id}`}
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-3 rounded text-sm"
                    >
                      Assistir agora
                    </Link>
                  </div>
                ))}

              {perGame[gameName]
                .filter((p) => p.status === 'encerrada')
                .map((p) => (
                  <div key={p.id} className="bg-gray-700 rounded-lg p-5 shadow-md border text-start border-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-lg">
                        {p.timeA} vs {p.timeB}
                      </div>
                        <div>
                            <span className="text-sm text-gray-300">Encerrada</span>
                            <div className="text-sm text-gray-400 font-semibold">Placar: {p.placar}</div>

                        </div>
                    </div>
                    <div className="text-sm text-gray-400">Horário: {p.horario}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
