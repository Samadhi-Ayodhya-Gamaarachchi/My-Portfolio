import React, { useState } from "react";
import emailjs from "emailjs-com";
import type { ContactFormData } from "../Types/index.ts";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    title: "",   // ✅ must match EmailJS variable
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a properly typed object for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.title,
      message: formData.message,
      to_name: "Samadhi", // Your name
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✅ from .env
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✅ from .env
      )
      .then(
        (response) => {
          console.log("EmailJS Response:", response);
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert(`❌ Failed to send message. Error: ${error.text || error.message || 'Unknown error'}`);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Subject</label>
        <input
          type="text"
          name="title"   // ✅ changed from "subject" to "title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="What's this about?"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
