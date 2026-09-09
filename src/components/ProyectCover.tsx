import { proyects } from '@/data/proyects';
import { proyect } from '@/data/proyects';
import Link from 'next/link';


interface ProyectoCoverProps {
  proyect: Proyect;
}

export default function ProyectCover({ proyect }: ProyectoCoverProps) {
  return (
    <Link 
        href={`/proyectos/${proyect.title}`} className="bg-white bg-white h-70 w-full overflow-hidden relative" >
        <img 
            className="max-w-full p-4"
            src= {`${proyect.photos[proyect.cover].src}`}
      />
      <span className="pl-4">{proyect.title}</span>
    </Link>
  );
}