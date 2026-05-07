'use client';

import { ReactNode } from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Toast from '@/components/ui/Toast';
import HeroSection from '@/components/home/HeroSection';

function ToastWrapper({ children }: { children: ReactNode }) {
  const { toast, hideToast } = useCart();
  
  return (
    <>
      {children}
      <Toast
        message={toast.message}
        productName={toast.productName}
        isVisible={toast.visible}
        onClose={hideToast}
      />
    </>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ToastWrapper>
        <div className="bg-background flex flex-col">
          <Navbar />
          <CartDrawer />
          <HeroSection />
          <main className="pt-16 md:pt-20 bg-gradient-to-b from-[#0a0808] to-transparent">
            {children}
          </main>
          <Footer />
        </div>
      </ToastWrapper>
    </CartProvider>
  );
}
