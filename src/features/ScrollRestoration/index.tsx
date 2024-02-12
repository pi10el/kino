'use client';

import { useEffect } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

// redux
import useAppSelector from '@/shared/lib/hooks/useAppSelector';

interface PropsRestoration {
  children: React.ReactNode;
}

export const ScrollRestoration = ({ children }: PropsRestoration) => {
  const path = usePathname();
  const scroll = useAppSelector((s) => s.app.scroll);

  useEffect(() => {
    const current = scroll.find((el) => el.path === path);

    window.scrollTo(0, current?.offset || 0);
  }, [path]);

  return <>{children}</>;
};
