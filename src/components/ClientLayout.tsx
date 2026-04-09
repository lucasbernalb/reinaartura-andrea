'use client';

import { ReactNode } from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Toast from '@/components/ui/Toast';

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
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-1 pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </ToastWrapper>
    </CartProvider>
  );
}
