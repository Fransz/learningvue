import { useFetch } from './UseFetch';
import { ref } from 'vue';

type Repo = {
  id: number;
  name: string;
  description: string;
};

export const useGithubFetch = (userName: string) => {
  return useFetch<Repo[]>(`https://api.github.com/users/${userName}/repos`);
};
