import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import journalReducer from "../features/journal/journalSlice";
import tierlistReducer from "../features/tierlist/tierlistSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		journal: journalReducer,
		tierlist: tierlistReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
