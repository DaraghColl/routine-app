export interface RoutineItemInterface {
  id: number;
  title: string;
  icon?: string;
  subTitle?: string;
  time?: string;
  status: string;
  daySection: 'morning' | 'afternoon' | 'evening';
}
