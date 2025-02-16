import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3070/api/contact');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="ml-4 text-xl">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Messages</h2>
      <button
        onClick={() => navigate('/')}
        className="btn btn-lg mb-4"
      >
        Retour
      </button>
      {messages.length === 0 ? (
        <p className="text-lg text-gray-700 text-center">No messages found.</p>
      ) : (
        <ul className="space-y-6">
          {messages.map((message) => (
            <li
              key={message._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500"
            >
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{message.name}</h3>
              <p className="text-gray-700">{message.message}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>{message.email}</p>
                <p>{message.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsPage;
