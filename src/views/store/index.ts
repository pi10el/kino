import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/api';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import appSlice from './slices/app';

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = (
  preloadedState?: PreloadedState<RootState>,
): ToolkitStore =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
