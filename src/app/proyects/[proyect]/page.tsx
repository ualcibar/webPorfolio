
import Link from 'next/link';
import { proyectos } from '@/data/proyectos';

export default function ProyectPage() {
    return (
    <div className="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-full max-w-3xl">
        <img
          className="max-w-full h-aut pb-50"
          src="/img/DSCF7911.jpg"
        />
      </div>
    </div>
    );
}