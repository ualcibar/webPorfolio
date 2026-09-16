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
  
  if (!proyect) {
    redirect('/proyects');
  }
  return (
    <div className="bg-photo1-bg flex-1 flex flex-col items-center justify-center gap-4 p-4 py-8">
      <div className="flex flex-col lg:grid lg:grid-cols-[25rem_1fr] gap-6 lg:gap-9 w-full max-w-6xl mb-12 pb-10">
        <div className="h-full">
          <div className="p-2 sm:p-8 lg:pr-4">
            <h1 className="text-2xl sm:text-3xl font-bold pb-4 sm:pb-6">{proyect.title}</h1>
            <p>{proyect.description}</p>
          </div>
        </div>
        <PhotoGalery proyect={proyect}/>
      </div>
    </div>
  );
}