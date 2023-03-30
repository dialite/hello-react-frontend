import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  const response = await fetch('http://localhost:5000/api/v1/greetings');
  const data = await response.json();
  const { greeting } = data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { loading: false, greeting: '', error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line max-len
      .addCase(fetchGreetings.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        loading: false,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: false,
      }));
  },
});

export default greetingSlice.reducer;
