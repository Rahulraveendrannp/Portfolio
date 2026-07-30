import React, { useEffect, useState, useRef } from 'react';
import { Music, VolumeX, Heart } from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.5 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: 5 + Math.random() * 5,
          scale: 0.5 + Math.random() * 1,
        };
        return [...prev, newHeart].slice(-20); // Keep max 20 hearts
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-pink-300 opacity-50"
          style={{
            left: `${heart.left}%`,
            animation: `floatUp ${heart.animationDuration}s linear forwards`,
            transform: `scale(${heart.scale})`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-sm opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            backgroundColor: ['#ff718d', '#fdff6a', '#71b2ff', '#42ff73', '#ff8eeb'][Math.floor(Math.random() * 5)],
            animation: `confettiFall ${2 + Math.random() * 3}s linear forwards`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function AnishaCMenon() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));

      if (Number(scroll) > 0.95) {
        setShowConfetti(true);
      } else {
        setShowConfetti(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Placeholder for actual audio logic
    if (audioRef.current) {
        if (!isMusicPlaying) {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        } else {
            audioRef.current.pause();
        }
    }
  };

  // Interpolate background color based on scroll progress
  // From a soft pink to a deeper romantic sunset gradient
  const bgStyle = {
    background: `linear-gradient(to bottom, 
      rgba(253, 224, 235, ${1 - scrollProgress * 0.5}), 
      rgba(244, 196, 243, ${0.5 + scrollProgress * 0.5}))`,
  };

  const messages = [
  "Hi. 👋",

  "As requested...\nHere are a few words about you. 😌",

  "You love me so much.\nNo matter what happens,\nI never doubt that. ❤️",

  "You always push us\nto move forward.\nIn everything. 🚀",
  "You always take\nthe initiative.\nOtherwise...\nwe'd probably still\nbe thinking about it.",

  "You're ridiculously good\nat planning. 📅",

  "You cook really well. 🍳😂",

  "Sometimes\nyou drive me crazy. 🤦‍♂️",

  "But considering\neverything else you bring\ninto my life... ❤️",

  "I'd say\nit's a pretty good deal. 😂",

  "That's all...\nfor now. 😌",

  "The remaining compliments\nwill be unlocked\nin future updates. 🔒😂",

  "Thank you\nfor being with me. ❤️"
];

  return (
    <div style={bgStyle} className="min-h-screen relative text-gray-800 font-sans selection:bg-pink-300">
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(100vh) scale(1) rotate(0deg); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: translateY(-20vh) scale(1.5) rotate(45deg); opacity: 0; }
          }
          @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(110vh) rotate(720deg); }
          }
        `}
      </style>

      {/* Hidden audio element (You can add src later) */}
      <audio ref={audioRef} loop>
          {/* <source src="/soft-romantic-music.mp3" type="audio/mpeg" /> */}
      </audio>

      <FloatingHearts />
      {showConfetti && <Confetti />}

      {/* Floating Music Button */}
      <button 
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-4 bg-white/50 backdrop-blur-md rounded-full shadow-lg hover:bg-white/80 transition-all text-pink-600 focus:outline-none"
      >
        {isMusicPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-64 z-10 relative">
        
        {/* Intro */}
        <div className="h-[70vh] flex flex-col items-center justify-center text-center">
            <FadeInSection>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-serif">
                    For Anisha
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
                    As you scroll, walk through my thoughts.
                </p>
                <div className="animate-bounce opacity-60 mt-12">
                    <span className="block text-sm mb-2">Scroll Down</span>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </FadeInSection>
        </div>

        {/* The Messages */}
        <div className="space-y-[60vh] mt-[30vh]">
          {messages.map((msg, index) => (
            <div key={index} className="flex items-center justify-center min-h-[40vh] text-center">
              <FadeInSection>
                <h2 className="text-3xl md:text-5xl font-medium leading-relaxed whitespace-pre-line text-gray-800 drop-shadow-sm">
                  {msg}
                </h2>
              </FadeInSection>
            </div>
          ))}

          {/* Sketch / Image Section at the end */}
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mt-32">
            <FadeInSection delay={300}>
                <div className="relative p-4 bg-white shadow-2xl rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                    {/* Placeholder for the sketch image */}
                    <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden border border-gray-200">
                        <img 
                            src="/sketch.png" 
                            alt="A beautiful sketch of Anisha" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-4 font-serif text-xl text-gray-700 italic">"You"</p>
                </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </div>
  );
}
