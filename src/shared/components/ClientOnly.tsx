'use client';

import { Suspense, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ClientOnly = ({ children, fallback }: Props) => {
  const [isClient, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return <>{fallback}</>;

  return <Suspense fallback={fallback}>{children}</Suspense>;
};
