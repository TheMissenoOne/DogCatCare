import { Pet } from './pet.model';
import { Service } from './service.model';

export interface AgendaEvento {
  id?: number;
  data: string;
  hora: string;
  desc: string;
  userId: number;
  pet: string;
  service: string;
}
