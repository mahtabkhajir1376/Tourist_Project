import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '@/container/tokenSlice';

export const store = configureStore({
  reducer: {
    auth: tokenReducer,
  },
});
