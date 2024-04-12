import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (name, thunkAPI) => {
    try {
      const response = await fetch(
        `http://192.168.56.1:7979/product/search/${name}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed');
      }

      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  },
);

const initialState = {
  searchResults: [],
  status: 'idle',
  error: null,
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchProducts.pending, state => {
      state.status = 'loading';
    });

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.searchResults = action.payload;
    });

    builder.addCase(searchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const {setSearch} = searchSlice.actions;
export default searchSlice.reducer;
