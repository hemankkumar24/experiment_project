import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap'  
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // animation for the video
    if (window.innerWidth >= 1280) {
    gsap.to(".hero_video_content", {
        y:-800, // it actually overlapping the text
        scrollTrigger: {
            trigger: ".hero_video_content",
            scrub: 2,
            start: "top 125%", // starts early
            end:"bottom 40%", // ends faster
          },
      });

      // animation for text
      gsap.to(".hero_text",{
        y: -150,
        scale: 0.9,
          scrollTrigger: {
            trigger: ".hero_text", // hero text as trigger
            pin:true, // pin to show its overlapping effect
            pinSpacing:false,
            start: "top-=10 top", // start from the top top 
            end: "50%  40%", // start text scrolling at 50%
            scrub: true,
          },
      })
    }

      // animation for text inside video
      gsap.to(".hero_video_text",{
        opacity:1,
        scrollTrigger: {
          trigger: ".hero_video_text",
          scrub: 2,
          start: "top 100%", 
          end:"bottom 50%",
          // markers:true
        }
      })
    })

  return (
    <div className="relative w-full " id="home" ref={sectionRef} >
        <section className="relative h-auto pt-48 xl:pt-0 xl:h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden px-4 hero_text">
          {/* Hero Text */}
          <h1 className="hero_text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-snug mb-8 max-w-6xl mx-auto break-words whitespace-normal">
            A Complete <span className="italic font-['Instrument_Serif']">System</span> for
            Brands Ready to Scale.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-12 max-w-5xl mx-auto hero_text">
            Using our extensive knowledge of design, technology, and strategy,
            <br />
            we build brands that grow without limits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/book-a-call"
              className="bg-[#6214d9] hover:bg-[#6214d9]/90 text-white px-8 py-4 rounded-full text-lg transition-colors hero_text"
            >
              Book a Call
            </Link>
            <a
              href="#services"
              className="text-white hover:text-gray-300 px-8 py-4 text-lg transition-colors border border-gray-300/40 rounded-full hero_text"
            >
              View Services
            </a>
          </div>
          </section>

          <div className="h-full w-full flex justify-center">
            <div className='hero_video_content block xl:h-[90%] xl:w-[90%] 2xl:h-[75%] 2xl:w-[75%] xl:absolute z-10  py-32 xl:py-0'>
              <div className='relative'>
                  <video src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4" className='opacity-100 rounded-2xl' autoPlay muted loop playsInline webkit-playsinline="true" disablePictureInPicture controls={false}>test</video>
                  {/* The text engraved in the video */}
                  <div className='absolute hero_video_text text-7xl xl:text-9xl inset-0 flex items-center justify-center'>
                    <span className="text-white hero_video_text opacity-0 font-['Instrument_Serif']">
                      S<span className="italic hero_video_text font-['Instrument_Serif'] opacity-0">c</span>al
                    </span>
                    <span className="text-gray-300/70 hero_video_text opacity-0 font-['Instrument_Serif']">
                      Kit
                    </span>
                  </div>
              </div>
            </div>
          </div>

    </div>

  

  );
}