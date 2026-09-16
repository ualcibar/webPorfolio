import type { Proyect } from '@/types/proyect';
import Link from 'next/link';


interface ProyectCoverProps {
  proyect: Proyect;
}

export default function ProyectCover({ proyect }: ProyectCoverProps) {
  return (
    <Link
        href={`/proyects/${proyect.url_name}`} className="bg-white h-56 sm:h-64 md:h-70 w-full overflow-hidden relative flex flex-col" >
        <img
            className="max-w-full p-4"
            src= {`${proyect.photos[proyect.cover].src}`}
      />
      <span className="pl-4 text-sm sm:text-base">{proyect.title}</span>
    </Link>
  );
}