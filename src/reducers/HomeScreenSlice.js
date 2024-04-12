import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const ViewProduct = createAsyncThunk('all', async () => {
  try {
    const response = await fetch('http://192.168.56.1:7979/product/all');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});
export const viewAllProductSlice = createSlice({
  name: 'all',
  initialState: {
    productsData: [],
    productsStatus: 'idle',
    productsError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ViewProduct.pending, state => {
        state.productsStatus = 'loading';
        state.productsError = null;
      })
      .addCase(ViewProduct.fulfilled, (state, action) => {
        state.productsStatus = 'succeeded';
        state.productsData = action.payload;
      })
      .addCase(ViewProduct.rejected, (state, action) => {
        state.productsStatus = 'failed';
        state.productsError = action.error.message;
      });
  },
});
export default viewAllProductSlice.reducer;
