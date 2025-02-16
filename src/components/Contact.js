import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3070/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      alert('Erreur serveur');
    }
  };

  return (
    <section id="contact" className="section pt-60 pb-60">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
       
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 p-8 border-2 border-accent rounded-xl backdrop-blur-sm bg-white bg-opacity-30"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Let's Work Together!
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I'm always open to exciting collaborations and projects.  
            Feel free to reach out for any inquiries or partnerships.
          </p>

          
          <button
            onClick={() => navigate('/contacts')}
            className="btn btn-sm mb-8"
          >
            Voir les Messages
          </button>
        </motion.div>

        
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 p-8 border-2 border-accent rounded-xl backdrop-blur-sm bg-white bg-opacity-20"
        >
          <h3 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-900">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none text-gray-900"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none text-gray-900"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-900">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none text-gray-900"
                placeholder="Your Phone"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-900">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none text-gray-900"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" btn btn-lg w-full py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>

          {messageSent && (
            <p className="mt-4 text-green-600">Votre message a été envoyé avec succès !</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
