'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-full flex items-center pl-12">
        <button 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center text-4xl hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Toggle menu">
          <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="inline-block">
            {isOpen ? '×' : '≡'}
          </motion.span>
        </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[20vw] h-dvh bg-transparent"
          >
            <nav className="flex flex-col gap-7 p-8 pl-20 pt-30">
              <Link href="/proyectos" onClick={() => setIsOpen(false)} className="text-lg hover:opacity-70">
                Proyectos
              </Link>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:opacity-70">
                Diario
              </Link>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:opacity-70">
                Sobre mi
              </Link>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:opacity-70">
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
