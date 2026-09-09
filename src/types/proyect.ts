import type { Photo } from '@/types/photo';

export type Proyect = {
  title: string;
  description: string;
  date: Date;
  photos: Photo[];
  cover: number;
};

export type Proyects = Proyect[];