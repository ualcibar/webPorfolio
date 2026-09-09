import { proyects } from '@/data/proyects';
import Link from 'next/link';
import ProyectoCover from '@/components/ProyectCover';


export default function ProyectsPage() {
  return (
      <div className ="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4">
        <div className="inline-grid items-center grid-cols-3 gap-4 h-170 w-260 ml-30 mb-12 pb-10">
            <ProyectoCover proyect={proyects[0]}/>
            <ProyectoCover proyect={proyects[2]}/>
            <ProyectoCover proyect={proyects[3]}/>
            <ProyectoCover proyect={proyects[1]}/>
        </div>
      </div>
  );
}