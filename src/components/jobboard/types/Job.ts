export type Job = {
  id: number;
  title: string;
  location: string;
  salary: number;
  description: string;
};

export type OrderedTerm = 'title' | 'location' | 'salary';
