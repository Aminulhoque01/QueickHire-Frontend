import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { jobApi } from "./features/services/jobApi"; // ✅ jobApi import

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [jobApi.reducerPath]: jobApi.reducer, // ✅ add jobApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware), // ✅ add jobApi middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;