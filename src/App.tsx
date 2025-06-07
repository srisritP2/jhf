import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50">
      <Header />
      <main className="flex-grow flex flex-col items-center w-full px-2 md:px-0">
        <div className="w-full max-w-5xl">
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;