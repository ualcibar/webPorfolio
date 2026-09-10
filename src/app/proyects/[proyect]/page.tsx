
import Link from 'next/link';
import { proyects } from '@/data/proyects';

import { notFound } from 'next/navigation';

type ProyectPageProps = {
  params: Promise<{ url_name: string }>;
};

export default async function ProyectPage({ params }: ProyectPageProps) {
  console.log('param recibido:', params);
  const paramsResueltos = await params;
  const url_name: string = paramsResueltos.proyect;
  console.log('url recibido:', url_name);
  const proyecto = proyects.find((p) => p.url_name === url_name);
  console.log('proyecto encontrado:', proyecto);

  if (!proyecto) {
    notFound();
  }
  return (
    <div className="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4 p-4">
      <div className="grid grid-cols-[25rem_1fr] gap-4 w-275 h-152 ml-45 mb-12 pb-10">
        <div className="bg-white h-full">
          <div className="p-8">
            1
            <h1 className="text-3xl font-bold">{proyecto.title}</h1>
            <p>{proyecto.description}</p>
            
          </div>
        </div>
        <div className="bg-white h-full">2</div>
      </div>
    </div>
  );
}