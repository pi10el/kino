'use client';

import Link, { LinkProps } from 'next/link';

// redux
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch';
import { usePathname } from 'next/navigation';

type PropsLink = {
  onClick?: () => void;
} & Omit<
  LinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.RefAttributes<HTMLAnchorElement>,
  'onClick'
>;

export const CustomLink = ({ children, ...props }: PropsLink) => {
  const { onClick, ...attr } = props;

  const path = usePathname();
  const { setScroll } = useAppDispatch();

  return (
    <Link
      onClick={() => {
        setScroll({ path, offset: window.scrollY });

        if (onClick) onClick();
      }}
      {...attr}
    >
      {children}
    </Link>
  );
};
