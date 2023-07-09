import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuizInterface {
  id?: string;
  score: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface QuizGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
