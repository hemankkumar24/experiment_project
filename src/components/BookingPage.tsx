import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { init, send } from '@emailjs/browser';

export function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ''
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormComplete) return;
    setIsSending(true);
    setStatus('');

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      reply_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleScheduleCall = () => {
    window.open('https://calendar.app.google/WJEhxWd82ycBpf8F7', '_blank');
  };

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.avif')" }}
    >
      <div className="backdrop-blur-[2px] bg-black/60 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>

          <div className="text-center mb-14">
            <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              Book a <span className="italic font-serif">call.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to take the next step? Let’s schedule a call to discuss how we can help your business grow and succeed online.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <button
              onClick={handleScheduleCall}
              className="flex items-center justify-center gap-3 px-10 py-4 bg-[#6214d9] hover:bg-[#6214d9]/90 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#6214d9]/30"
            >
              <Calendar className="w-5 h-5" />
              Schedule Call
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 space-y-8 shadow-lg shadow-black/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Peter"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-black/40 rounded-xl text-white placeholder-gray-500 border border-transparent focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Parker"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-black/40 rounded-xl text-white placeholder-gray-500 border border-transparent focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="peter@parker.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-4 bg-black/40 rounded-xl text-white placeholder-gray-500 border border-transparent focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+14151234567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-5 py-4 bg-black/40 rounded-xl text-white placeholder-gray-500 border border-transparent focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Your Message
              </label>
              <textarea
                placeholder="I am the founder of Parker, a US-based brand dealing in apparel, and I'm looking to get my website renewed."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-5 py-4 bg-black/40 rounded-xl text-white placeholder-gray-500 border border-transparent focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={!isFormComplete || isSending}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-medium rounded-full transition-all duration-300 ${
                  isFormComplete && !isSending
                    ? 'bg-[#6214d9] hover:bg-[#6214d9]/90 text-white shadow-lg shadow-[#6214d9]/30'
                    : 'bg-white/10 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status && (
              <p className="text-center text-sm text-gray-300 pt-4">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

