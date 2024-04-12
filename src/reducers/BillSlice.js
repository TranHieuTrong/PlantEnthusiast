import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const addBill = createAsyncThunk('bill/add', async data => {
  const response = await fetch('http://localhost:7979/bill/api/bill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

const billSlice = createSlice({
  name: 'bill',
  initialState: {
    status: 'ide',
  },
  reducers: () => {},
  extraReducers: builder => {
    builder.addCase(addBill.pending, state => {
      state.status = 'pending';
    });

    builder.addCase(addBill.fulfilled, (state, {payload}) => {
      state.status = 'success';
    });

    builder.addCase(addBill.rejected, (state, {payload}) => {
      state.status = 'reject';
    });
  },
});

export default billSlice.reducer;
