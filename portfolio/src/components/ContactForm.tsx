import React, { useState } from "react";
import emailjs from "emailjs-com";
import type { ContactFormData } from "../Types/index.ts";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ✅ from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ from .env
        {
          from_name: formData.name,
          reply_to: formData.email, // This makes "Reply" go to the user's email
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ from .env
      )
      .then(
        (response) => {
          console.log("EmailJS Response:", response);
          setIsSuccess(true);
          setFormData({ name: "", email: "", title: "", message: "" });

          // Reset to normal state after 3 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert(
            `❌ Failed to send message. Error: ${
              error.text || error.message || "Unknown error"
            }`
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Sending...</span>
        </div>
      );
    }

    if (isSuccess) {
      return (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Done!</span>
        </div>
      );
    }

    return "Send Message";
  };

  const getButtonStyles = () => {
    if (isSuccess) {
      return "w-full bg-green-600 text-white py-3 rounded-lg font-medium cursor-default";
    }

    if (isSubmitting) {
      return "w-full bg-indigo-400 text-white py-3 rounded-lg font-medium cursor-not-allowed";
    }

    return "w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium";
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
            disabled={isSubmitting || isSuccess}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting || isSuccess}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Subject</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          disabled={isSubmitting || isSuccess}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
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
          disabled={isSubmitting || isSuccess}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={getButtonStyles()}
      >
        {getButtonContent()}
      </button>
    </form>
  );
};

export default ContactForm;
