import type { AppDispatch } from '@/views/store';

import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { allActions } from '@/views';

const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActions, dispatch);
};

export default useAppDispatch;
