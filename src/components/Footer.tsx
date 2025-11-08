import { Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left - Contact Icons */}
          <div className="flex items-center gap-6 text-gray-300 mb-6 md:mb-0">
            <a
  href="http://wa.me/+918882217810"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-all"
  aria-label="WhatsApp"
>
  <img
  src="/wsp.png"
  alt="WhatsApp"
  className="w-6 h-6 object-contain invert brightness-0 contrast-200"
/>


</a>

            <a
              href="mailto:navya@scalkit.com"
              className="hover:text-white transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/navyaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-white" />
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-white font-light text-lg text-center">
            ScalKit © 2025
          </div>

          {/* Right - Location */}
          <div className="flex items-center gap-2 text-gray-300 mt-6 md:mt-0">
            <MapPin size={20} className="text-gray-300" />
            <span className="text-lg font-light">Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
