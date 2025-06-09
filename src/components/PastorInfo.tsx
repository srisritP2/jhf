import React from 'react';
import pastor from '../assets/pastor.jpg'; // Replace with your actual image path

const PastorInfo: React.FC = () => {
  // Replace with your pastor's Facebook profile URL
  const facebookUrl = "https://facebook.com/RevDrRSukumarPatnaik";

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(facebookUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#e0c3fc] via-[#f5f7fa] to-[#c3cfe2] rounded-2xl shadow-xl my-12 fade-in-section"
      aria-label="Pastor Information"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-left whitespace-normal">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#344CB7] mb-4 tracking-tight leading-tight drop-shadow-md w-full">
            YOU CAN BECOME A SANCTUARY OF PEACE
          </h3>
          <div className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed w-full whitespace-normal">
            <p className="mb-4">
              True harmony begins with compassion. When we open our hearts to one another, we unlock the fullness of life and the promise of peace.
            </p>
            <p className="mb-4">
              <strong>Pastor Rev Dr R Sukumar Patnaik</strong>, founder of Jesus Heals Fellowship, inspires hope and healing through faith and love. For over 20 years, he has led our community to discover purpose and embrace life’s blessings.
            </p>
            <p>
              Join Pastor Rev Dr R Sukumar Patnaik on this journey—become an ambassador for faith, healing, and peace.
            </p>
          </div>
          <a
            href={facebookUrl}
            onClick={handleAboutClick}
            className="inline-block mt-2 px-6 py-3 bg-[#344CB7] text-white font-bold rounded-full shadow-lg hover:bg-[#23337a] transition"
          >
            ABOUT OUR PASTOR
          </a>
        </div>
        {/* Image with animation */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 bg-white/70 transition-transform duration-700 ease-out hover:scale-105 hover:shadow-3xl animate-fade-in-up">
            <img
              src={pastor}
              alt="Pastor Rev Dr R Sukumar Patnaik"
              className="w-[320px] h-[420px] object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-[#344CB7] font-bold text-lg">
            HIS EMINENCE<br />
            PASTOR Rev Dr R Sukumar Patnaik
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastorInfo;