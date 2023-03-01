import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../models/IUser"
import { AppDispatch } from "../store"
import { userReducer } from "./useSlice"



// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userReducer.actions.userFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userReducer.actions.userFetchingSuccess(response.data))
//     } catch (error: any) {
//         dispatch(userReducer.actions.userFetchingError(error.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось сделать запрос')
        }

    }
)