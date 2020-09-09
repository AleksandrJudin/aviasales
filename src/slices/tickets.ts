import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { TicketsServices } from '../services/TicketsServices';
import { ITicketsData } from '../types/interface';

export const fetchingTickets = createAsyncThunk(
  'tickets/fetchingTickets',
  async (): Promise<object[]> => {
    const data = await TicketsServices.getTickets();
    return data.tickets;
  }
);

const initialState: ITicketsData = {
  data: [],
  loading: false,
  error: false,
};

const tickets = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingTickets.pending, (state: ITicketsData): void => {
      state.loading = true;
    });
    builder.addCase(
      fetchingTickets.fulfilled,
      (state: ITicketsData, { payload }: PayloadAction<object[]>): void => {
        state.data = payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchingTickets.rejected, (state: ITicketsData): void => {
      state.error = true;
    });
  },
});

export default tickets.reducer;
