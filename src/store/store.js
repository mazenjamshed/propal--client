import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import toggleSlice from './slices/toggleSlice';

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
