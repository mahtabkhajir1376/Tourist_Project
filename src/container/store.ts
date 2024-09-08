import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '@/container/tokenSlice';

export const store = configureStore({
  reducer: {
    auth: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
