import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50">
        <Header />
        <main className="flex-grow flex flex-col items-center w-full px-2 md:px-0">
          <div className="w-full max-w-5xl">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;