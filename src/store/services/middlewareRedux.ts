import { clearUser } from "../slices/userSlice"
import { userApi } from "./userApi"

export const apiMiddleware = (store: any) => (next: any) => (action: any) => {
    if (userApi.endpoints.createMovie.matchFulfilled(action)) {
        if(action.payload.status === 401){
            store.dispatch(clearUser())
        }
    }
    return next(action)
}