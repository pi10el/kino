'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// helpers
import { isEqual } from '@/shared/lib/helpers/isEqual';

// redux
import useAppSelector from '@/shared/lib/hooks/useAppSelector';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch';

// components

interface Props {
  children: React.ReactNode;
  loader: React.ReactNode;
}

export const SearchMoviesUpdate = ({ children, loader }: Props) => {
  const params = useAppSelector((s) => s.app.params);
  const searchParams = useSearchParams();
  const { setFilterParams } = useAppDispatch();

  const paramsObject = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFilterParams(paramsObject);
    }
  }, []);

  const isLoading = isEqual(params, paramsObject);

  return isLoading ? <>{children}</> : <>{loader}</>;
};
