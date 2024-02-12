import { useRouter } from 'next/navigation';

// redux
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

export const useSearchFilter = () => {
  const router = useRouter();
  const params = useAppSelector((s) => s.app.params);
  const { setFilterParams, resetFilter } = useAppDispatch();

  const setFilter = (query?: { [key: string]: string }) => {
    const buffer = { ...params };

    if (query) {
      Object.keys(query).forEach((el) => {
        if (!query[el]) delete buffer[el];
        else buffer[el] = query[el];
      });

      const result = Object.keys(buffer)
        .map((el) => {
          if (buffer[el]) {
            return `${el}=${buffer[el]}`;
          } else {
            return '';
          }
        })
        .filter((el) => el !== '')
        .join('&');

      setFilterParams(buffer);
      router.push(`/search?${result}`);
    } else {
      resetFilter();
      router.push('/search');
    }
  };

  return { params, setFilter };
};
