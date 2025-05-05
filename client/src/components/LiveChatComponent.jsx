import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSmile } from 'react-icons/fa';
import { io } from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';
import EmojiPicker from 'emoji-picker-react';
import Navbar from './Navbar';

export default function LiveChat() {
    const token = localStorage.getItem('access_token');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [messages, setMessages] = useState([
        { user: 'Admin', text: '🏟️ Bem-vindo à torcida ao vivo!' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const [votes, setVotes] = useState({ timeA: 0, timeB: 0 });

    const socketRef = useRef(null);

    useEffect(() => {
        if (!socketRef.current) {
            const newSocket = io('http://localhost:3002');
            socketRef.current = newSocket;

            if (token) {
                const decoded = jwtDecode(token);
                newSocket.emit('register', decoded.email);
            }

            newSocket.on('receiveMessage', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });

            newSocket.on('receiveVote', (vote) => {
                setVotes((prevVotes) => ({
                    ...prevVotes,
                    [vote.team]: (prevVotes[vote.team] || 0) + 1
                }));
            });

            return () => {
                newSocket.disconnect();
                socketRef.current = null;
            };
        }
    }, [token]);

    const sendMessage = () => {
        if (token && socketRef.current) {
            const decoded = jwtDecode(token);
            if (!newMessage.trim()) return;

            const message = { user: decoded.email, text: newMessage };
            socketRef.current.emit('sendMessage', message);
            setNewMessage('');
        }
    };

    const sendVote = (team) => {
        if (socketRef.current) {
            socketRef.current.emit('sendVote', { team });
        }
    };

    const handleEmojiClick = (emojiData) => {
        setNewMessage(prev => prev + emojiData.emoji);
    };

    return (
        <section className="bg-black text-white py-16 px-6 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
                    <div className="w-full h-64 md:h-96 bg-gray-900 flex items-center justify-center text-3xl font-bold text-white">
                        🕹️ Transmissão ao Vivo
                    </div>
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        AO VIVO
                    </div>
                </div>

                <div className="flex flex-col bg-white text-black rounded-lg shadow-lg h-full">
                    <div className="bg-gray-200 px-4 py-3 text-lg font-semibold border-b border-gray-300">
                        💬 Chat da Torcida
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100 max-h-[400px]">
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`p-2 rounded-lg ${msg.user === 'Você' ? 'bg-blue-200 self-end' : 'bg-gray-300'}`}
                            >
                                <strong>{msg.user}:</strong> {msg.text}
                            </motion.div>
                        ))}
                    </div>

                    {showEmojiPicker && (
                        <div className="p-2 border-t border-gray-300">
                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </div>
                    )}

                    <div className="flex border-t border-gray-300 p-3">
                        <button
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            className="px-2 text-xl"
                        >
                            <FaSmile />
                        </button>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Mande seu grito de torcida..."
                            className="flex-1 p-2 border border-gray-300 outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 flex items-center"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>

                    <div className="bg-gray-200 text-center py-3 border-t border-gray-300">
                        <div className="font-semibold mb-2">🏆 Quem vai ganhar?</div>
                        <div className="flex justify-around text-sm">
                            <button
                                onClick={() => sendVote('timeA')}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Time A ({votes.timeA})
                            </button>
                            <button
                                onClick={() => sendVote('timeB')}
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                                Time B ({votes.timeB})
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
