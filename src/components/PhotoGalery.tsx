'use client';

import type { Proyect } from '@/types/proyect';
import { useState } from 'react';
import Link from 'next/link';
import { proyects } from '@/data/proyects';


interface ProyectCoverProps {
  proyect: Proyect;
}

export default function PhotoGalery({ proyect }: ProyectCoverProps) {
  const [fotoActual, setFotoActual] = useState(0);
  
  const siguiente = () => {
    // Evita pasar del total de fotos si existe el arreglo
    if (fotoActual < proyect.photos.length - 1) {
      setFotoActual(fotoActual + 1);
    }
  };

  const anterior = () => {
    // Si ya está en 0, no entra al setState y React NO re-renderiza
    if (fotoActual >= 1) {
      setFotoActual(fotoActual - 1);
    }
  };
  return (
    <div className="bg-white h-full">        
        <img 
            className="max-w-full p-4"
            src= {`${proyect.photos[fotoActual].src}`}
        />
    <span className="absolute pl-157 pt-12">{fotoActual + 1}</span>
<div className="relative flex items-center text-2xl justify-center gap-4 w-full mt-7 p-4">
    <button type="button" onClick={anterior}>&lt;</button>
    <button type="button" onClick={siguiente}>&gt;</button>
  </div>
    </div>
  );
}