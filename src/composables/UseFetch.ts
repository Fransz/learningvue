import { Ref, UnwrapRef, reactive, ref } from 'vue';

type FetchRespose<T> = {
  data: Ref<UnwrapRef<T> | null>;
  loading: Ref<boolean>;
  error: Ref<UnwrapRef<Error> | null>;
};

function timeout(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function sleep(fn: Function, ...args: unknown[]): Promise<unknown> {
  console.log(`Sleeping 2000 ms`);
  await timeout(2000);
  return fn(...args);
}

export function useFetch<T>(url: string): FetchRespose<T> {
  const data = ref<T | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Error | null>(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      const response = await sleep(fetch, url);

      if (!response.ok) throw new Error(`Failed to fetch from url: ${url}`);

      data.value = await response.json();
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  fetchData();

  return {
    data,
    error,
    loading,
  };
}
