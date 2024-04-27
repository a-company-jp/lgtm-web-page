import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Lgtm } from "../types/lgtm";
import getApiClient from "../utils/client";

export interface LgtmListState {
  lgtms: Lgtm[]
  loading: boolean
}

const initialState: LgtmListState = {
  lgtms: [],
  loading: false
}

export const lgtmsSlice = createSlice({
  name: 'lgtms',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLgtms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLgtms.fulfilled, (state, action) => {
      state.loading = false;
      state.lgtms = action.payload;
    });
    builder.addCase(getLgtms.rejected, (state) => {
      state.loading = false;
    });
  },
})

export const getLgtms = createAsyncThunk('lgtms/getLgtms', async () => {
  const client = getApiClient()
  const res = await client.get('/api/v1/lgtms')
  return res.data
})

export default lgtmsSlice.reducer