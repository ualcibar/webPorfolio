import type { Photo } from '@/types/photo';

export type Proyect = {
  tilte: string;
  description: string;
  date: Date;
  photos: Photo[];
  cover: number;
};