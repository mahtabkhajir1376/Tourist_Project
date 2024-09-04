import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '@/features/tokenSlice';
import tourReducer from '@/features/tourSlice'

export const store = configureStore({
  reducer: {
    auth: tokenReducer,
    tour:tourReducer
  },
});
