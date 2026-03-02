import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { jobApi } from "./features/services/jobApi";  
import { applicationApi } from "./features/services/applicationApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [jobApi.reducerPath]: jobApi.reducer,  
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware).concat(applicationApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;