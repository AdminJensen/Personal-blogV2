import React from 'react';

    const Contact = () => {
      return (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      );
    };

    export default Contact;
