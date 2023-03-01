import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userFetching(state) {
        //     state.isLoading = true
        // },
        // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // userFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        // Success
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        // Waiting
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        // error
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;;
            state.error = action.payload;
        },
    }
})

export default userReducer.reducer
// export const { userFetching, userFetchingError, userFetchingSuccess } = userReducer.actions