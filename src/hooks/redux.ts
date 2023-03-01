import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
// useAppSelector для подхвата полей в редюсере
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 