import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from './../types/interface';

const initialState: IFilters = {
  isAll: true,
  isOneTransfer: true,
  isTwoTransfer: true,
  isThreeTransfer: true,
  isNotTransfer: true,
  cheapset: true,
  fastest: false,
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    allFiltersActive: (
      state,
      { payload }: PayloadAction<boolean>
    ): IFilters => {
      return Object.assign({}, state, {
        isAll: payload,
        isNotTransfer: payload,
        isOneTransfer: payload,
        isThreeTransfer: payload,
        isTwoTransfer: payload,
      });
    },
    oneTransferActive: (
      state,
      { payload }: PayloadAction<boolean>
    ): IFilters => {
      return Object.assign({}, state, {
        isAll:
          !state.isAll &&
          state.isNotTransfer &&
          state.isThreeTransfer &&
          state.isTwoTransfer,
        isOneTransfer: payload,
      });
    },
    twoTransferActive: (
      state,
      { payload }: PayloadAction<boolean>
    ): IFilters => {
      return Object.assign({}, state, {
        isAll:
          !state.isAll &&
          state.isNotTransfer &&
          state.isThreeTransfer &&
          state.isOneTransfer,
        isTwoTransfer: payload,
      });
    },
    threeTransfersActive: (
      state,
      { payload }: PayloadAction<boolean>
    ): IFilters => {
      return Object.assign({}, state, {
        isAll:
          !state.isAll &&
          state.isNotTransfer &&
          state.isOneTransfer &&
          state.isTwoTransfer,
        isThreeTransfer: payload,
      });
    },
    notTransfersActive: (
      state,
      { payload }: PayloadAction<boolean>
    ): IFilters => {
      return Object.assign({}, state, {
        isAll:
          !state.isAll &&
          state.isOneTransfer &&
          state.isThreeTransfer &&
          state.isTwoTransfer,
        isNotTransfer: payload,
      });
    },
    sortByCheapset: (state): IFilters => {
      return Object.assign({}, state, {
        cheapset: true,
        fastest: false,
      });
    },
    sortByFastest: (state): IFilters => {
      return Object.assign({}, state, {
        cheapset: false,
        fastest: true,
      });
    },
  },
});

export const {
  allFiltersActive,
  oneTransferActive,
  twoTransferActive,
  threeTransfersActive,
  notTransfersActive,
  sortByCheapset,
  sortByFastest,
} = filters.actions;

export default filters.reducer;
