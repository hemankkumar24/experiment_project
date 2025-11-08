import { Link } from "react-router-dom";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background video */}
      <div className="absolute inset-0 bg-black/40 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0">
          <source
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Displacement.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-7xl md:text-8xl font-medium mb-6 leading-tight text-white">
          Are you <span className="italic font-['Instrument_Serif']">ready?</span>
        </h2>
        <p className="text-3xl text-gray-300 mb-12">
          This could be the start of something big.
        </p>
        <Link
          to="/book-a-call"
          className="inline-block bg-[#6214d9] hover:bg-[#6214d9]/90 text-white px-12 py-4 rounded-full transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-[#6214d9]/50"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
}
