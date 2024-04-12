import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const LoginAccount = createAsyncThunk('login', async data => {
  const response = await fetch('http:// 192.168.56.1:7979/users/login', {
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

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginData: {},
    loginStatus: 'khoitao',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LoginAccount.pending, (state, action) => {
        state.loginStatus = 'loading';
      })
      .addCase(LoginAccount.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.loginData = action.payload;
      })
      .addCase(LoginAccount.rejected, (state, action) => {
        state.loginStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default loginSlice.reducer;
