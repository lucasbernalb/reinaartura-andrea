'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  productName: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, productName, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-24 right-4 z-[100]"
        >
          <div className="bg-surface-elevated border border-olive/30 rounded-lg shadow-[0_0_20px_rgba(107,142,35,0.15)] p-4 flex items-center gap-3 min-w-[320px]">
            <div className="w-10 h-10 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-olive-light" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-ivory font-medium text-sm">{message}</p>
              <p className="text-ivory/60 text-xs truncate">{productName}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-ivory/40 hover:text-ivory transition-colors p-1 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
