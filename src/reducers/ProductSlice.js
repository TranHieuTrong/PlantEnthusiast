import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProductById = createAsyncThunk(
  'product/getById',
  async (productId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://192.168.56.1:7979/product/all/${productId}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: {},
    productStatus: 'idle',
    productError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductById.pending, state => {
        state.productStatus = 'loading';
        state.productError = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.productData = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.productError = action.payload;
      });
  },
});

export default productSlice.reducer;
