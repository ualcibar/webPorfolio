
//'use client';
//import { useState } from 'react';

import Link from 'next/link';
import { proyects } from '@/data/proyects';
import { redirect } from 'next/navigation';
import PhotoGalery from '@/components/PhotoGalery';


type ProyectPageProps = {
  params: Promise<{ url_name: string }>;
};

export default async function ProyectPage({ params }: ProyectPageProps) {
  const arg = await params;
  const proyect = proyects.find((p) => p.url_name === arg.proyect);
  
  //const [fotoActual, setFotoActual] = useState(0);
  
  //const siguiente = () => setFotoActual(fotoActual + 1);
  //const anterior = () => setFotoActual(fotoActual - 1);
  if (!proyect) {
    redirect('/proyects');
  }
  return (
    <div className="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4 p-4">
      <div className="grid grid-cols-[25rem_1fr] gap-9 w-275 h-152 ml-15 mb-12 pb-10">
        <div className="h-full">
          <div className="p-8 pr-4">
            <h1 className="text-3xl font-bold pb-6">{proyect.title}</h1>
            <p>{proyect.description}</p>
          </div>
        </div>
        <PhotoGalery proyect={proyect}/>
      </div>
    </div>
  );
}