'use client';

import type { Proyect } from '@/types/proyect';
import { useState } from 'react';
import Link from 'next/link';
import { proyects } from '@/data/proyects';


interface ProyectCoverProps {
  proyect: Proyect;
}

export default function PhotoGalery({ proyect }: ProyectCoverProps) {
  const [fotoActual, setFotoActual] = useState(1);
  
  const siguiente = () => setFotoActual(fotoActual + 1);
  const anterior = () => setFotoActual(fotoActual - 1);

  return (
    <div className="bg-white h-full">        
        <img 
            className="max-w-full p-4"
            src= {`${proyect.photos[proyect.cover].src}`}
        />
    <span className="absolute pl-157 pt-12">{fotoActual}</span>
    </div>
  );
}