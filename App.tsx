
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AIBarista from './components/AIBarista';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (itemName: string) => {
    setCartCount(prev => prev + 1);
    setNotification(`${itemName} telah ditambahkan ke pesanan`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOrderNow = () => {
    if (cartCount > 0) {
      setCartCount(0);
    } else {
      const menuSection = document.getElementById('menu');
      menuSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080707] text-stone-300 selection:bg-amber-900 selection:text-white">
      <Navbar cartCount={cartCount} onOrderClick={handleOrderNow} />
      
      {notification && (
        <div className="fixed top-24 right-6 z-[100] bg-stone-900 border border-amber-900/50 text-amber-100 px-6 py-3 rounded-2xl shadow-2xl text-sm font-medium animate-fade-in-down backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
            {notification}
          </div>
        </div>
      )}

      <main>
        <Hero />
        <Menu onOrder={addToCart} />
        <AIBarista />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
