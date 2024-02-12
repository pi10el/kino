import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  params: { [key: string]: string };
  scroll: { path: string; offset: number }[];
  dropdown: {
    filters: boolean;
  };
}

const initialState: AppState = {
  params: {},
  scroll: [],
  dropdown: {
    filters: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFilterParams: (
      state,
      { payload }: PayloadAction<{ [key: string]: string }>,
    ) => {
      state.params = payload;
    },

    resetFilter: (state) => {
      state.params = {};
    },

    setDropdownFilters: (state) => {
      state.dropdown.filters = !state.dropdown.filters;
    },

    setScroll: (
      state,
      { payload }: PayloadAction<{ path: string; offset: number }>,
    ) => {
      const array = state.scroll.filter((el) => el.path !== payload.path);

      state.scroll = [...array, payload];
    },
  },
});

export default appSlice;
