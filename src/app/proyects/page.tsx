import { proyects } from '@/data/proyects';
import ProyectoCover from '@/components/ProyectCover';


export default function ProyectsPage() {
  return (
      <div className ="bg-photo1-bg flex-1 flex flex-col items-center justify-center gap-4 px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-12 pb-10">
            <ProyectoCover proyect={proyects[0]}/>
            <ProyectoCover proyect={proyects[2]}/>
            <ProyectoCover proyect={proyects[3]}/>
            <ProyectoCover proyect={proyects[1]}/>
        </div>
      </div>
  );
}