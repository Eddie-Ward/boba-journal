import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import journalReducer from "../features/journal/journalSlice";
import tierlistReducer from "../features/tierlist/tierlistSlice";
import locationReducer from "../features/location/locationSlice";

export const store = configureStore({
	reducer: {
		journal: journalReducer,
		tierlist: tierlistReducer,
		location: locationReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
