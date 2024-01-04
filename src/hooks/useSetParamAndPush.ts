import { useRouter, useSearchParams } from 'next/navigation';

export default function useSetParamAndPush() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (param: string, value: string = '') => {
    const current = new URLSearchParams(Array.from(searchParams?.entries() || []));
    current.set(param, value);
    if (value === '') current.delete(param);
    router.push(`?${current.toString()}`);
    router.refresh();
  };
}
