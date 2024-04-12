import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect'; // Import createSelector từ reselect

export const GetDanhMuc = createAsyncThunk('all/category', async () => {
  try {
    const response = await fetch('http://172.16.113.255:7979/category/all');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

export const selectCategoryData = state => state.category.categoryData;

export const selectSubCategoriesOfPlants = createSelector(
  [selectCategoryData],
  categoryData => {
    if (!categoryData || !categoryData.length) return []; 

    const parentIdOfPlants = categoryData.find(
      category => category.name === 'Cây Trồng',
    )?._id;
    if (!parentIdOfPlants) return []; 
    return categoryData.filter(
      category => category.parentId === parentIdOfPlants,
    );
  },
);

export const viewAllCategorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryData: {},
    categoryStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetDanhMuc.pending, state => {
        state.categoryStatus = 'loading';
      })
      .addCase(GetDanhMuc.fulfilled, (state, action) => {
        state.categoryStatus = 'succeeded';
        state.categoryData = action.payload;
      })
      .addCase(GetDanhMuc.rejected, (state, action) => {
        state.categoryStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default viewAllCategorySlice.reducer;
