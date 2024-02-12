'use client';

import { Provider } from 'react-redux';
import { setupStore } from '../store';

interface Props {
  children: React.ReactNode;
}

export const WithStore: React.FC<Props> = ({ children }) => (
  <Provider store={setupStore()}>{children}</Provider>
);
