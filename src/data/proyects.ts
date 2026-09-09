import type { Photo } from '@/types/photo';

import type { Proyect } from '@/types/proyect';
import type { Proyects } from '@/types/proyect';

const dscf7911: Photo = {
  src: '/img/DSCF7911.jpg',
  alt: 'Fotografía DSCF7911',
  width: 1600,
  height: 1067,
  date: new Date('2024-03-15'),
};

const v0023484: Photo = {
  src: '/img/V0023484.jpg',
  alt: 'Fotografía V0023484',
  width: 1600,
  height: 1067,
  date: new Date('2024-04-02'),
};

const v0023684: Photo = {
  src: '/img/V0023684.jpg',
  alt: 'Fotografía V0023684',
  width: 1600,
  height: 1067,
  date: new Date('2024-04-10'),
};

const v0023687: Photo = {
  src: '/img/V0023687.jpg',
  alt: 'Fotografía V0023687',
  width: 1600,
  height: 1067,
  date: new Date('2024-04-12'),
};

export const proyects: Proyects = [
  {
    title: 'Proyecto Uno',
    description: 'Descripción del proyecto uno.',
    date: new Date('2024-03-15'),
    photos: [dscf7911, v0023484, v0023684, v0023687],
    cover: 0, // portada: dscf7911
  },
  {
    title: 'Proyecto Dos',
    description: 'Descripción del proyecto dos.',
    date: new Date('2024-04-02'),
    photos: [dscf7911, v0023484, v0023684, v0023687],
    cover: 1, // portada: v0023484
  },
  {
    title: 'Proyecto Tres',
    description: 'Descripción del proyecto tres.',
    date: new Date('2024-04-10'),
    photos: [dscf7911, v0023484, v0023684, v0023687],
    cover: 2, // portada: v0023684
  },
  {
    title: 'Proyecto Cuatro',
    description: 'Descripción del proyecto cuatro.',
    date: new Date('2024-04-12'),
    photos: [dscf7911, v0023484, v0023684, v0023687],
    cover: 3, // portada: v0023687
  },
];